<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Mentors */
/* @var $form yii\widgets\ActiveForm */
?>

<style type="text/css">
    textarea {
        resize: none;
    }
</style>

<div class="mentors-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'image1')->fileInput() ?>

    <?= $form->field($model, 'image2')->fileInput() ?>

    <?= $form->field($model, 'description')->textarea(['maxlength' => true, 'rows' => 15]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
