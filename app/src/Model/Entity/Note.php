<?php
declare(strict_types=1);

namespace App\Model\Entity;

use App\Model\Table\UsersTable;
use Cake\ORM\Entity;

/**
 * Note Entity
 *
 * @property int $id
 * @property int $user_id
 * @property string $title
 * @property string $salt
 * @property string|null $message
 * @property \Cake\I18n\FrozenTime|null $last_edited
 * @property \Cake\I18n\FrozenTime|null $created
 *
 * @property \App\Model\Entity\User $user
 */
class Note extends Entity
{
    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        'user_id' => true,
        'title' => true,
        'salt' => true,
        'message' => true,
        'last_edited' => true,
        'created' => true,
        'user' => true,
    ];

    protected $_hidden = ['salt', 'user_id'];

    /**
     *
     * @return string
     */
    public function decryptNote() : string
    {
        [$encrypted_data, $iv] = explode(':$', base64_decode($this->message), 2);
        return openssl_decrypt($encrypted_data, 'blowfish', UsersTable::$PEPPER.$this->salt, 0, $iv);
    }

    /**
     * @param string $note
     */
    public function encryptNote(string $note) : void
    {
        $this->salt = UsersTable::getNewSalt();
        $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length(UsersTable::$CIPHER));
        $this->message = base64_encode(
            openssl_encrypt(
                $note, 'blowfish', UsersTable::$PEPPER.$this->salt, 0, $iv
            ) . ':$' . $iv
        );
    }
}
