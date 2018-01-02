<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\Mentors */

$this->title = 'Create Mentors';
$this->params['breadcrumbs'][] = ['label' => 'Mentors', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="mentors-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
