<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\Submissions */

$this->title = 'Create Submissions';
$this->params['breadcrumbs'][] = ['label' => 'Submissions', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="submissions-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
