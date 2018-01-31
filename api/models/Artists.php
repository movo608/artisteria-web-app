<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "artists".
 *
 * @property int $id
 * @property string $name
 * @property string $image1
 * @property string $image2
 * @property string $description
 */
class Artists extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'artists';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'image1', 'image2', 'description', 'category'], 'required'],
            [['description'], 'string'],
            [['category'], 'string', 'max' => 32],
            [['name'], 'string', 'max' => 64],
            [['image1', 'image2'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg'],
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
            'catgory' => 'Category',
            'description' => 'Description',
        ];
    }
}
