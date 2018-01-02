<?php

namespace app\modules\api\controllers;

use yii\web\Controller;
use yii\helpers\Json;
use app\models\Mentors;

/**
 * CoreController core api Controller class.
 * 
 * Handles cross-site requests.
 */
class CoreController extends Controller
{
	/**
	 * Test action handler.
	 * 
	 * @return Json
	 */
	public function actionTest()
	{
		return Json::encode(['status' => true, 'data' => 'TEST_REQUEST']);
	}

	/**
	 * Fetches the mentors from the database.
	 * 
	 * @return Json
	 */
	public function actionGetMentors()
	{
		$model = Mentors::find()->all();

		return Json::encode(['status' => true, 'data' => $model]);
	}
}