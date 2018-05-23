<?php

namespace app\modules\admin;

use Yii;
use yii\helpers\Url;

/**
 * admin module definition class
 */
class Module extends \yii\base\Module
{
    /**
     * @inheritdoc
     */
    public $controllerNamespace = 'app\modules\admin\controllers';

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();

        // custom initialization code goes here
    }

    /**
     * Before action
     */
    public function beforeAction($action)
    {
        if (Yii::$app->controller->module->id === 'admin' && Yii::$app->user->isGuest) {
            Yii::$app->response->redirect(Url::to(['/login']));
        }

        return parent::beforeAction($action);
    }
}
