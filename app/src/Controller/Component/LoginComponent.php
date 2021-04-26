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
                ->where(['username' => $username, 'password' => $user->evazluate($auth)])
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
                    'errorMessage' => 'No user or auth was send!',
                ]);
        }

        return null;
    }

    /**
     * @param int $receiver
     *
     * @return array
     */
    public function getNotes(int $receiver): array
    {
        $subConditions = [];
        $conditions = [];

        $ret = [];

        $personalMessages = $this->UserMessages->find()
            ->contain(
                [
                    'Users',
                    'Users.Employees',
                    'Sender',
                    'Sender.Employees'
                ]
            )
            ->where(
            [
                $conditions,
                'OR' =>
                [
                    ['receiver_id' => $receiver],
                    $subConditions
                ]
            ])
            ->orderDesc('UserMessages.created');

        $arr = $personalMessages->toArray();

        $ret['count'] = sizeof($arr);
        //decrypt the messages
        $ret['messages'] = $this->decryptNotes($arr);

        return $ret;
    }

    /**
     * @param array ...$messages
     *
     * @return array
     */
    private function decryptNotes(array $messages) : array
    {
        foreach ($messages as $message)
        {
            $message['message'] = $this->decryptNote($message['message'], $message['salt']);
        }
        return $messages;
    }

    /**
     * @param string $message
     * @param string $salt
     *
     * @return string
     */
    private function decryptNote(string $message, string $salt) : string
    {
        [$encrypted_data, $iv] = explode(':$', base64_decode($message), 2);
        return openssl_decrypt($encrypted_data, 'blowfish', UsersTable::$PEPPER.$salt, 0, $iv);
    }

    /**
     * @param string $message
     * @param string $salt
     *
     * @return string
     */
    private function encryptNote(string $message, string $salt) : string
    {
        $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length(UsersTable::$CIPHER));
        return base64_encode(
            openssl_encrypt(
                $message, 'blowfish', UsersTable::$PEPPER.$salt, 0, $iv
            ) . ':$' . $iv
        );
    }
}
