<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\modules\admin\models\MentorsSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Mentors';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="mentors-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Create Mentors', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            //'id',
            'name',
            'category',
            'image1' => [
                'attribute' => 'image1',
                'value' => function ($value) {
                    return '/artisteria-web-app/api/uploads/' . $value->image1;
                },
                'format' => ['image', ['class' => 'col-md-12 col-sm-12']]
            ],
            'image2' => [
                'attribute' => 'image2',
                'value' => function ($value) {
                    return '/artisteria-web-app/api/uploads/' . $value->image2;
                },
                'format' => ['image', ['class' => 'col-md-12 col-sm-12']]
            ],
            'description',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
