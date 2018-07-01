<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\Mentors */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Mentors', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="mentors-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'name',
            'category',
            'image1' => [
                'attribute' => 'image1',
                'value' => function ($value) {
                    //return '/artisteria-web-app/api/uploads/' . $value->image1;
                    return 'http://www.artisteria.ro/api/uploads' . $value->image1;
                },
                'format' => ['image', ['class' => 'col-md-5 col-sm-7']]
            ],
            'image2' => [
                'attribute' => 'image2',
                'value' => function ($value) {
                    //return '/artisteria-web-app/api/uploads/' . $value->image2;
                    return 'http://www.artisteria.ro/api/uploads' . $value->image2;
                },
                'format' => ['image', ['class' => 'col-md-5 col-sm-7']]
            ],
            'description',
        ],
    ]) ?>

</div>
