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
 * @property \App\Controller\Component\LoginComponent $LoginComponent
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
        $this->loadComponent('RequestHandler');
        $this->loadModel('Users');
        $this->loadModel('Notes');
        $this->loadComponent('Login');
    }

    public function index(): void
    {
        $this->RequestHandler->prefers('json');
        $this->set('errors', []);
        $this->viewBuilder()
            ->setOption('serialize', ['errors'])
            ->setOption('jsonOptions', JSON_FORCE_OBJECT);
    }

    /**
     * @return void
     */
    public function register(): void
    {
        $this->RequestHandler->prefers('json');
        $this->request->allowMethod(['post', 'put']);

        $user = $this->Users->newEmptyEntity();

        $username = $this->getRequest()->getData('user', '');
        $auth = $this->getRequest()->getData('auth', '');

        if($username != '' && $auth != '')
        {
            $user->username = $user;
            $user->salt = UsersTable::salt();
            $user->password = $user->evaluate($auth);
            $user->created = FrozenTime::now();
        }

        if ($user->getErrors()) {

        }
    }

    /**
     *
     * @return void
     */
    public function createNote(): void
    {
        $this->RequestHandler->prefers('json');
        $this->request->allowMethod(['post', 'put']);

        if($this->LoginComponent->login($this))
        {


            $this->viewBuilder()
                ->setOption('serialize', ['data'])
                ->setOption('jsonOptions', JSON_FORCE_OBJECT);
        }
        else
        {
            $this->viewBuilder()
                ->setOption('serialize', ['error', 'errorMessage'])
                ->setOption('jsonOptions', JSON_FORCE_OBJECT);
        }
    }

    /**
     *
     * @return void
     */
    public function getNotes(): void
    {
        $this->RequestHandler->prefers('json');
        $this->request->allowMethod(['post', 'put']);

        if($this->LoginComponent->login($this))
        {


            $this->viewBuilder()
                ->setOption('serialize', ['data'])
                ->setOption('jsonOptions', JSON_FORCE_OBJECT);
        }
        else
        {
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
        $this->RequestHandler->prefers('json');
        $this->request->allowMethod(['post', 'put']);

        if($this->LoginComponent->login($this))
        {


            $this->viewBuilder()
                ->setOption('serialize', ['data'])
                ->setOption('jsonOptions', JSON_FORCE_OBJECT);
        }
        else
        {
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
        $this->RequestHandler->prefers('json');
        $this->request->allowMethod(['post', 'put']);

        if($this->LoginComponent->login($this))
        {


            $this->viewBuilder()
                ->setOption('serialize', ['data'])
                ->setOption('jsonOptions', JSON_FORCE_OBJECT);
        }
        else
        {
            $this->viewBuilder()
                ->setOption('serialize', ['error', 'errorMessage'])
                ->setOption('jsonOptions', JSON_FORCE_OBJECT);
        }
    }
}
