<?php

namespace app\modules\api\controllers;

use Yii;
use yii\web\Controller;
use yii\helpers\Json;
use app\models\Mentors;
use app\models\Artists;
use app\models\Partners;
use app\models\Submissions;

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
	 * Before action.
	 */
	public function beforeAction($action)
	{
		switch ($action->id) {
			case 'submit':
				$this->enableCsrfValidation = false;
				break;
			default:
				$this->enableCsrfValidation = true;
				break;
		}

		return parent::beforeAction($action);
	}

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

	/**
	 * Fetches the specified mentor's information.
	 * 
	 * @return Json
	 */
	public function actionGetMentor($id)
	{
		$model = Mentors::findOne(['id' => $id]);

		return Json::encode(['status' => true, 'data' => $model]);
	}

	/**
	 * Fetches the artists from the database.
	 * 
	 * @return Json
	 */
	public function actionGetArtists()
	{
		$model = Artists::find()->all();

		return Json::encode(['status' => true, 'data' => $model]);
	}

	/**
	 * Fetches the requested artist from the database.
	 * 
	 * @return Json
	 */
	public function actionGetArtist($id)
	{
		$model = Artists::findOne(['id' => $id]);

		return Json::encode(['status' => true, 'data' => $model]);
	}

	/**
	 * Fetches all the partners from the database.
	 * 
	 * @return Json
	 */
	public function actionGetPartners()
	{
		$model = Partners::find()->all();

		return Json::encode(['status' => true, 'data' => $model]);
	}

	/**
	 * Submits the received data to the database.
	 */
	public function actionSubmit()
	{
		$model = new Submissions();
		
		if (Yii::$app->request->get()) {
			$request = Yii::$app->request;
			

			var_dump($model); die;

			//$model->save() ? Json::encode(['status' => true, 'data' => $model]) : null;
		} else {
			return Json::encode(['status' => false, 'data' => 'error_no_request']);
		}
	}
}