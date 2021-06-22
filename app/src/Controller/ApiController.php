<?php
declare(strict_types=1);

/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link          https://cakephp.org CakePHP(tm) Project
 * @since         3.3.4
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 */
namespace App\Controller;

use App\Model\Table\UsersTable;
use Cake\Event\EventInterface;
use Cake\Http\Response;
use Cake\I18n\FrozenTime;
use phpDocumentor\Reflection\Types\This;

/**
 * ApiController
 *
 * @property \App\Model\Table\UsersTable $Users
 * @property \App\Model\Table\NotesTable $Notes
 * @property \App\Controller\Component\LoginComponent $Login
 */
class ApiController extends AppController
{
    /**
     * Initialization hook method.
     *
     * @return void
     * @throws \Exception
     */
    public function initialize(): void
    {
        parent::initialize();
        $this->loadComponent('Security');
        $this->loadComponent('RequestHandler');
        $this->loadComponent('Login');

        $this->loadModel('Users');
        $this->loadModel('Notes');

        //for the same origin request
        header('Access-Control-Allow-Origin: http://localhost:4200');
        header('Access-Control-Allow-Credentials: *');
        header('Access-Control-Allow-Headers: *');
        header('Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE');
        $this->RequestHandler->prefers('json');
    }

    public function beforeFilter(EventInterface $event)
    {
        parent::beforeFilter($event);

        $this->Security->setConfig('unlockedActions', ['authenticate']);
    }

    public function index(): void
    {

        $notes = $this->Notes->find()
            ->orderDesc('Notes.last_edited');

        /* @var \App\Model\Entity\Note $message */
        foreach ($notes as $message)
        {
            $message->message = $message->decryptNote();
        }

        $this->set('data', $notes->toArray());

        $this->viewBuilder()
            ->setOption('serialize', 'data');
    }

    public function authenticate(): void
    {
        $this->set('error', false);

        /* @var \App\Model\Entity\User $user */
        $user = $this->Login->login($this);
        if(!is_null($user))
        {
            $this->set('error', false);
            $this->set('errorMessage', '');
        }
        else
        {
            $this->set('error', true);
            $this->set('errorMessage', 'not logged in');

        }
        $this->viewBuilder()
            ->setOption('serialize', ['error', 'errorMessage'])
            ->setOption('jsonOptions', JSON_FORCE_OBJECT);
    }

    /**
     * @return void
     */
    public function register(): void
    {
        $this->set('error', false);

        $user = $this->Users->newEmptyEntity();

        $username = $this->getRequest()->getData('user', '');
        $auth = $this->getRequest()->getData('auth', '');

        if($username != '' && $auth != '')
        {
            $user->username = $username;
            $user->salt = UsersTable::getNewSalt();
            $user->password = $user->evaluate($auth);
            $user->created = FrozenTime::now();

            if($this->Users->save($user))
            {
                $this->set('data', 'success');
                $this->viewBuilder()
                    ->setOption('serialize', ['error', 'data'])
                    ->setOption('jsonOptions', JSON_FORCE_OBJECT);
                return;
            }
            else
            {
                $this->set('error', true);
                //TODO remove debug log
                $this->set('errorMessage', $user->getErrors());
                $this->viewBuilder()
                    ->setOption('serialize', ['error', 'errorMessage'])
                    ->setOption('jsonOptions', JSON_FORCE_OBJECT);
            }
        }
        else
        {
            $this->set('error', true);
            $this->set('errorMessage', 'empty username or password');

            $this->viewBuilder()
                ->setOption('serialize', ['error', 'errorMessage'])
                ->setOption('jsonOptions', JSON_FORCE_OBJECT);
        }
    }

    /**
     *
     * @return void
     */
    public function createNote(): void
    {
        $this->set('error', false);

        /* @var \App\Model\Entity\User $user */
        $user = $this->Login->login($this);
        if(!is_null($user))
        {
            $note = $this->Notes->newEmptyEntity();

            $note->user_id = $user->id;
            $note->title = $this->request->getData('noteTitle', '');
            $note->encryptNote($this->request->getData('noteText', ''));
            $note->created = FrozenTime::now();
            $note->last_edited = $note->created;

            if($this->Notes->save($note))
            {
                $this->set('error', false);
                $this->set('data', 'success');
                $this->viewBuilder()
                    ->setOption('serialize', ['error', 'data'])
                    ->setOption('jsonOptions', JSON_FORCE_OBJECT);
                return;
            }
            $this->set('error', true);
            //TODO remove debug log
            $this->set('errorMessage', $note->getErrors());

        }
        else
        {
            $this->set('error', true);
            $this->set('errorMessage', 'not logged in');

        }
        $this->viewBuilder()
            ->setOption('serialize', ['error', 'errorMessage'])
            ->setOption('jsonOptions', JSON_FORCE_OBJECT);
    }

    /**
     *
     * @return void
     */
    public function getNotes(): void
    {
        $this->set('error', false);

        /* @var \App\Model\Entity\User $user */
        $user = $this->Login->login($this);
        if(!is_null($user))
        {
            $notes = $this->Notes->find()
                ->contain(['Users'])
                ->where(['User.id' => $user->id])
                ->orderDesc('Notes.last_edit');
            /* @var \App\Model\Entity\Note $message */
            foreach ($notes as $message)
            {
                $message->message = $message->decryptNote();
            }
            if($notes->count() == 0)
            {
                $notes = [];
            }
            $this->set('data', $notes->toArray());
            $this->viewBuilder()
                ->setOption('serialize', ['error', 'data'])
                ->setOption('jsonOptions', JSON_FORCE_OBJECT);
        }
        else
        {
            $this->set('error', true);
            $this->set('errorMessage', 'not logged in');

            $this->viewBuilder()
                ->setOption('serialize', ['error', 'errorMessage'])
                ->setOption('jsonOptions', JSON_FORCE_OBJECT);
        }
    }

    /**
     *
     * @param int $id
     *
     * @return void
     */
    public function editNote(int $id): void
    {
        $this->set('error', false);

        /* @var \App\Model\Entity\User $user */
        $user = $this->Login->login($this);
        if(!is_null($user) && is_integer($id) && $id > 0)
        {
            $note = $this->Notes->get($id);

            $note->title = $this->request->getData('noteTitle', '');
            $note->encryptNote($this->request->getData('noteText', ''));
            $note->last_edited = FrozenTime::now();

            if($this->Notes->save($note))
            {
                $this->set('error', false);
                $this->set('data', 'success');
                $this->viewBuilder()
                    ->setOption('serialize', ['error', 'data'])
                    ->setOption('jsonOptions', JSON_FORCE_OBJECT);
                return;
            }
            $this->set('error', true);
            //TODO remove debug log
            $this->set('errorMessage', $note->getErrors());
        }
        else
        {
            $this->set('error', true);
            $this->set('errorMessage', 'not logged in');

            $this->viewBuilder()
                ->setOption('serialize', ['error', 'errorMessage'])
                ->setOption('jsonOptions', JSON_FORCE_OBJECT);
        }
    }

    /**
     *
     * @param int $id
     *
     * @return void
     */
    public function deleteNote(int $id): void
    {
        /* @var \App\Model\Entity\User $user */
        $user = $this->Login->login($this);
        if(!is_null($user))
        {
            $note = $this->Notes->get($id);

            if($this->Notes->delete($note))
            {
                $this->set('error', false);
                $this->set('data', 'success');
                $this->viewBuilder()
                    ->setOption('serialize', ['error', 'data'])
                    ->setOption('jsonOptions', JSON_FORCE_OBJECT);
                return;
            }
            $this->set('error', true);
            //TODO remove debug log
            $this->set('errorMessage', $note->getErrors());
        }
        else
        {
            $this->set('error', true);
            $this->set('errorMessage', 'not logged in');

            $this->viewBuilder()
                ->setOption('serialize', ['error', 'errorMessage'])
                ->setOption('jsonOptions', JSON_FORCE_OBJECT);
        }
    }
}
