<?php
declare(strict_types=1);

namespace App\Model\Table;

use App\Model\Entity\Note;
use Cake\Datasource\EntityInterface;
use Cake\Datasource\ResultSetInterface;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Notes Model
 *
 * @property \App\Model\Table\UsersTable&\Cake\ORM\Association\BelongsTo $Users
 *
 * @method Note newEmptyEntity()
 * @method Note newEntity(array $data, array $options = [])
 * @method Note[] newEntities(array $data, array $options = [])
 * @method Note get($primaryKey, $options = [])
 * @method Note findOrCreate($search, ?callable $callback = null, $options = [])
 * @method Note patchEntity(EntityInterface $entity, array $data, array $options = [])
 * @method Note[] patchEntities(iterable $entities, array $data, array $options = [])
 * @method Note|false save(EntityInterface $entity, $options = [])
 * @method Note saveOrFail(EntityInterface $entity, $options = [])
 * @method Note[]|ResultSetInterface|false saveMany(iterable $entities, $options = [])
 * @method Note[]|ResultSetInterface saveManyOrFail(iterable $entities, $options = [])
 * @method Note[]|ResultSetInterface|false deleteMany(iterable $entities, $options = [])
 * @method Note[]|ResultSetInterface deleteManyOrFail(iterable $entities, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class NotesTable extends Table
{
    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config): void
    {
        parent::initialize($config);

        $this->setTable('notes');
        $this->setDisplayField('title');
        $this->setPrimaryKey('id');

        $this->addBehavior('Timestamp');

        $this->belongsTo('Users', [
            'foreignKey' => 'user_id',
            'joinType' => 'INNER',
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
            ->scalar('title')
            ->maxLength('title', 60)
            ->requirePresence('title', 'create')
            ->notEmptyString('title');

        $validator
            ->scalar('message')
            ->allowEmptyString('message');

        $validator
            ->dateTime('last_edited')
            ->allowEmptyDateTime('last_edited');

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
        $rules->add($rules->existsIn(['user_id'], 'Users'), ['errorField' => 'user_id']);

        return $rules;
    }
}
