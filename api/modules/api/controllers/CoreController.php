<?php

namespace app\modules\api\controllers;

use Yii;
use yii\web\Controller;
use yii\helpers\Json;
use app\models\Mentors;
use app\models\Artists;
use app\models\Partners;
use app\models\Submissions;
use app\models\CoreTeam;
use app\models\Testimonials;

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
		/**
		 * Condensing variable for the \Yii::$app->request component.
		 */
		$request = Yii::$app->request;
		
		if ($request->get()) {
			$model = new Submissions();

			if (Submissions::findOne(['email' => $request->get('email')])) {
				return Json::encode(['status' => false, 'data' => 'error_email_exists']);
			} elseif (Submissions::findOne(['phone' => $request->get('phone')])) {
				return Json::encode(['status' => false, 'data' => 'error_phone_number_exists']);
			} elseif (Submissions::findOne(['facebook_link' => $request->get('facebook_link')])) {
				return Json::encode(['status' => false, 'data' => 'error_facebook_link_exists']);
			} elseif (Submissions::findOne(['instagram_link' => $request->get('instagram_link')])) {
				return Json::encode(['status' => false, 'data' => 'error_instagram_link_exists']);
			} else {
				$model->email 			= $request->get('email');
				$model->name 			= $request->get('name');
				$model->birth 			= $request->get('birth');
				$model->location 		= $request->get('location');
				$model->study 			= $request->get('study');
				$model->phone 			= $request->get('phone');
				$model->domain 			= $request->get('domain');
				$model->facebook_link 	= $request->get('facebook');
				$model->instagram_link 	= $request->get('instagram');
				$model->motivation 		= $request->get('motivation');
				$model->work_link 		= $request->get('work_link');
				$model->projects_link 	= $request->get('projects_link');
				$model->availability 	= $request->get('availability');
				$model->accommodation 	= $request->get('accommodation');
				$model->hobbies 		= $request->get('hobbies');
				$model->found_out 		= $request->get('found_out');
				$model->about_you 		= $request->get('about_you');
			}
			
			if ($model->save(false)) {
				return Json::encode(['status' => true, 'data' => 'success']);
			} else {
				return Json::encode(['status' => false, 'data' => 'error_cannot_save']);
			}
		} else {
			return Json::encode(['status' => false, 'data' => 'error_no_request']);
		}
	}

	/**
	 * Fetches all the testimonials from the database
	 */
	public function actionGetTestimonials()
	{
		$model = Testimonials::find()->all();

		return Json::encode(['status' => true, 'data' => $model]);
	}
}