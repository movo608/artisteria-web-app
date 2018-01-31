<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use app\models\ValidCategories;

/* @var $this yii\web\View */
/* @var $model app\models\Artists */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="artists-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'category')->dropDownList(
        ArrayHelper::map(ValidCategories::find()->all(), 'name', 'name'),
        ['prompt' => 'Choose a category...']
    ) ?>

    <?= $form->field($model, 'image1')->fileInput() ?>

    <?= $form->field($model, 'image2')->fileInput() ?>

    <?= $form->field($model, 'description')->textarea(['rows' => 12]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
