<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\modules\admin\models\SubmissionsSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Submissions';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="submissions-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Create Submissions', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'name',
            'birth',
            'location',
            'study',
            //'phone',
            //'email:email',
            //'facebook_link',
            //'instagram_link',
            //'domain',
            //'motivation',
            //'work_link',
            //'projects_link',
            //'availability',
            //'accommodation',
            //'hobbies',
            //'found_out',
            //'about_you',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
