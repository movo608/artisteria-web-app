<?php

namespace app\modules\admin\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Submissions;

/**
 * SubmissionsSearch represents the model behind the search form of `app\models\Submissions`.
 */
class SubmissionsSearch extends Submissions
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'availability', 'accommodation'], 'integer'],
            [['name', 'birth', 'location', 'study', 'phone', 'email', 'facebook_link', 'instagram_link', 'domain', 'motivation', 'work_link', 'projects_link', 'hobbies', 'found_out', 'about_you'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Submissions::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'birth' => $this->birth,
            'availability' => $this->availability,
            'accommodation' => $this->accommodation,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'location', $this->location])
            ->andFilterWhere(['like', 'study', $this->study])
            ->andFilterWhere(['like', 'phone', $this->phone])
            ->andFilterWhere(['like', 'email', $this->email])
            ->andFilterWhere(['like', 'facebook_link', $this->facebook_link])
            ->andFilterWhere(['like', 'instagram_link', $this->instagram_link])
            ->andFilterWhere(['like', 'domain', $this->domain])
            ->andFilterWhere(['like', 'motivation', $this->motivation])
            ->andFilterWhere(['like', 'work_link', $this->work_link])
            ->andFilterWhere(['like', 'projects_link', $this->projects_link])
            ->andFilterWhere(['like', 'hobbies', $this->hobbies])
            ->andFilterWhere(['like', 'found_out', $this->found_out])
            ->andFilterWhere(['like', 'about_you', $this->about_you]);

        return $dataProvider;
    }
}
