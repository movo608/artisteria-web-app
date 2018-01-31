<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "submissions".
 *
 * @property int $id
 * @property string $name
 * @property string $birth
 * @property string $location
 * @property string $study
 * @property string $phone
 * @property string $email
 * @property string $facebook_link
 * @property string $instagram_link
 * @property string $domain
 * @property string $motivation
 * @property string $work_link
 * @property string $projects_link
 * @property int $availability
 * @property int $accommodation
 * @property string $hobbies
 * @property string $found_out
 * @property string $about_you
 */
class Submissions extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'submissions';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'birth', 'location', 'study', 'phone', 'email', 'facebook_link', 'instagram_link', 'domain', 'motivation', 'work_link', 'projects_link', 'availability', 'accommodation', 'hobbies', 'found_out', 'about_you'], 'required'],
            [['birth'], 'safe'],
            [['availability', 'accommodation'], 'integer'],
            [['name', 'location', 'study', 'email', 'facebook_link', 'instagram_link'], 'string', 'max' => 128],
            [['phone'], 'string', 'max' => 16],
            [['domain'], 'string', 'max' => 32],
            [['motivation', 'hobbies', 'about_you'], 'string', 'max' => 256],
            [['work_link', 'projects_link'], 'string', 'max' => 1024],
            [['found_out'], 'string', 'max' => 64],
            [['email'], 'unique'],
            [['phone'], 'unique'],
            [['facebook_link', 'instagram_link'], 'unique', 'targetAttribute' => ['facebook_link', 'instagram_link']],
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
            'birth' => 'Birth',
            'location' => 'Location',
            'study' => 'Study',
            'phone' => 'Phone',
            'email' => 'Email',
            'facebook_link' => 'Facebook Link',
            'instagram_link' => 'Instagram Link',
            'domain' => 'Domain',
            'motivation' => 'Motivation',
            'work_link' => 'Work Link',
            'projects_link' => 'Projects Link',
            'availability' => 'Availability',
            'accommodation' => 'Accommodation',
            'hobbies' => 'Hobbies',
            'found_out' => 'Found Out',
            'about_you' => 'About You',
        ];
    }
}
