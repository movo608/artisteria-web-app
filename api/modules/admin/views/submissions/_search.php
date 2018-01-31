<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\modules\admin\models\SubmissionsSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="submissions-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'name') ?>

    <?= $form->field($model, 'birth') ?>

    <?= $form->field($model, 'location') ?>

    <?= $form->field($model, 'study') ?>

    <?php // echo $form->field($model, 'phone') ?>

    <?php // echo $form->field($model, 'email') ?>

    <?php // echo $form->field($model, 'facebook_link') ?>

    <?php // echo $form->field($model, 'instagram_link') ?>

    <?php // echo $form->field($model, 'domain') ?>

    <?php // echo $form->field($model, 'motivation') ?>

    <?php // echo $form->field($model, 'work_link') ?>

    <?php // echo $form->field($model, 'projects_link') ?>

    <?php // echo $form->field($model, 'availability') ?>

    <?php // echo $form->field($model, 'accommodation') ?>

    <?php // echo $form->field($model, 'hobbies') ?>

    <?php // echo $form->field($model, 'found_out') ?>

    <?php // echo $form->field($model, 'about_you') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
