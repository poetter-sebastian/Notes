<?php
declare(strict_types=1);

namespace App\Model\Entity;

use App\Model\Table\UsersTable;
use Cake\ORM\Entity;

/**
 * User Entity
 *
 * @property int $id
 * @property string $username
 * @property string $salt
 * @property string $password
 * @property \Cake\I18n\FrozenTime|null $created
 *
 * @property \App\Model\Entity\Note[] $notes
 */
class User extends Entity
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
        'username' => true,
        'salt' => true,
        'password' => true,
        'created' => true,
        'notes' => true,
    ];

    /**
     * Fields that are excluded from JSON versions of the entity.
     *
     * @var array
     */
    protected $_hidden = [
        'password',
    ];

    public function evaluate(string $password) : string
    {
        return hash('sha256', UsersTable::$PEPPER.$password.$this->salt);
    }
}
