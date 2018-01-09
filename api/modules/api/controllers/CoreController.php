<?php

namespace app\modules\api\controllers;

use yii\web\Controller;
use yii\helpers\Json;
use app\models\Mentors;

/**
* Allow all-cross-origin AJAX-let request.
* Headers allowance for the header type.
*/
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

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