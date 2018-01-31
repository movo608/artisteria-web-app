<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\ValidCategories */

$this->title = 'Update Valid Categories: {nameAttribute}';
$this->params['breadcrumbs'][] = ['label' => 'Valid Categories', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="valid-categories-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
