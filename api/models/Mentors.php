<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "mentors".
 *
 * @property int $id
 * @property string $name
 * @property string $image1
 * @property string $image2
 * @property string $description
 */
class Mentors extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'mentors';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'image1', 'image2', 'description'], 'required'],
            [['name'], 'string', 'max' => 64],
            [['description'], 'string', 'max' => 256],
            [['image1', 'image2'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'image1' => 'Image1',
            'image2' => 'Image2',
            'description' => 'Description',
        ];
    }
}
