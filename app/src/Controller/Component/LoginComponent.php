<?php
declare(strict_types=1);

namespace App\Controller\Component;

use App\Controller\ApiController;
use App\Model\Entity\Note;
use App\Model\Entity\User;
use App\Model\Table\UsersTable;
use Cake\Controller\Component;
use Cake\Datasource\ModelAwareTrait;
use Cake\Http\ServerRequest;
use Cake\I18n\FrozenTime;

/**
 * Class MessagesController
 *
 * @property \App\Model\Table\UsersTable $UserMessages
 * @property \App\Model\Table\NotesTable $Skills
 */
class LoginComponent extends Component
{
    use ModelAwareTrait;

    private array $options = [

    ];

    public function initialize(?array $config) : void
    {
        $this->loadModel('Users');
        $this->loadModel('Notes');

        $this->options += $config;
    }

    public function login(ApiController $api): ?user
    {
        $username = $api->getRequest()->getData('user', '');
        $auth = $api->getRequest()->getData('auth', '');

        if($username != '' && $auth != '')
        {
            /* @var $user \App\Model\Entity\User */
            $user = $api->Users->find()
                ->where(['username' => $username, 'password' => $user->evaluate($auth)])
                ->limit(1);

            if(!empty($user))
            {
                return $user;
            }
            $api->set(
                [
                    'error' => true,
                    'errorMessage' => 'No user found',
                ]);
        }
        else
        {
            $api->set(
                [
                    'error' => true,
                    'errorMessage' => 'No user or auth was send',
                ]);
        }
        return null;
    }
}
