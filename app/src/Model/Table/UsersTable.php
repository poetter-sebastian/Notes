<?php
declare(strict_types=1);

namespace App\Model\Table;

use App\Controller\Component\NotificationComponent;
use App\Model\Entity\User;
use Cake\Datasource\EntityInterface;
use Cake\Datasource\ResultSetInterface;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Users Model
 *
 * @property \App\Model\Table\NotesTable&\Cake\ORM\Association\HasMany $Notes
 *
 * @method User newEmptyEntity()
 * @method User newEntity(array $data, array $options = [])
 * @method User[] newEntities(array $data, array $options = [])
 * @method User get($primaryKey, $options = [])
 * @method User findOrCreate($search, ?callable $callback = null, $options = [])
 * @method User patchEntity(EntityInterface $entity, array $data, array $options = [])
 * @method User[] patchEntities(iterable $entities, array $data, array $options = [])
 * @method User|false save(EntityInterface $entity, $options = [])
 * @method User saveOrFail(EntityInterface $entity, $options = [])
 * @method User[]|ResultSetInterface|false saveMany(iterable $entities, $options = [])
 * @method User[]|ResultSetInterface saveManyOrFail(iterable $entities, $options = [])
 * @method User[]|ResultSetInterface|false deleteMany(iterable $entities, $options = [])
 * @method User[]|ResultSetInterface deleteManyOrFail(iterable $entities, $options = [])
 */
class UsersTable extends Table
{
    public static string $PEPPER = "eM^uj3Ytr8LW8neb^ZeCLnZFbNAV-+8xgk!N?ZxazW3Wbm8M*QapJr4aB%QwphsYW^E^8=Cvg&-w%CrjyEA6hMNpbSQEmBekE#aAMyqdrNA9RFYNR+JK+hCSPEgg8P*Y&H@aBP$!*QNbPFkT%GhV4M?#FC6pYjyVj3dGgQj!W!4nr#2^3vC-n=F9TnFdgJWuuFCs^TjvR7-BzyD5JfW-7kfLrLRg7LTHEkJFmzw^_T%f^v@t--?fBSTX54k!&b&";

    public static string $CIPHER = 'blowfish';

    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config): void
    {
        parent::initialize($config);

        $this->setTable('users');
        $this->setDisplayField('id');
        $this->setPrimaryKey('id');

        $this->hasMany('Notes', [
            'foreignKey' => 'user_id',
        ]);
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator): Validator
    {
        $validator
            ->nonNegativeInteger('id')
            ->allowEmptyString('id', null, 'create');

        $validator
            ->scalar('username')
            ->maxLength('username', 60)
            ->requirePresence('username', 'create')
            ->notEmptyString('username')
            ->add('username', 'unique', ['rule' => 'validateUnique', 'provider' => 'table']);

        $validator
            ->scalar('salt')
            ->maxLength('salt', 128)
            ->requirePresence('salt', 'create')
            ->notEmptyString('salt');

        $validator
            ->scalar('password')
            ->maxLength('password', 255)
            ->requirePresence('password', 'create')
            ->notEmptyString('password');

        $validator
            ->dateTime('created')
            ->notEmptyString('created');

        return $validator;
    }

    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules): RulesChecker
    {
        $rules->add($rules->isUnique(['username']), ['errorField' => 'username']);

        return $rules;
    }


    /**
     * @return string
     */
    public static function getNewSalt() : string
    {
        $newTimestamp = "";
        $timestamp = date('Y-m-d-H-i-s');
        $replacedTimestamp = str_replace("-", "", $timestamp);
        for ($i = 0; $i <= 9; $i++)
        {
            $newTimestamp .= $replacedTimestamp[$i] + rand(0, 9);
        }
        $newTimestamp .= UsersTable::saltGenerateString();
        $salt = UsersTable::saltGenerateString();
        $salt .= $newTimestamp;
        return $salt;
    }

    /**
     * @param int $length
     *
     * @return string
     */
    private static function saltGenerateString($length=16): string
    {
        $saltString = "";
        $string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#.,`?=)(/&%$§"!°ÖÄÜöäü';
        $stringLength = strlen($string);
        for ($i = 0; $i <= $length; $i++) {
            $randomKey = rand(0, $stringLength - 1);
            $saltString .= $string[$randomKey];
        }
        return $saltString;
    }
}
