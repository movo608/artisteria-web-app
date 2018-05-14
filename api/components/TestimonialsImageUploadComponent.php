<?php

namespace app\components;

use yii\base\Component;

/**
 * MentorImageUploadComponent Component class.
 * 
 * Used to upload the images in the Mentor model to the server
 * and saves their names into the database.
 */
class TestimonialsImageUploadComponent extends Component
{
	/**
	 * Core upload directory for the images
	 * 
	 * @return none
	 */
	public static $UPLOAD_DIR = 'uploads/';

	/**
	 * Upload function for the images.
	 * Also constructs the name which will be saved into the database.
	 * 
	 * @return boolean
	 */
	public function uploadImage(&$model)
	{
		$time = time();
		if ($model->image->saveAs('../' . $this::$UPLOAD_DIR . $time . 'testimonials' . '.' . $model->image->extension)) {
			$model->image = $time . 'testimonials' . '.' . $model->image->extension;
			return true;
		} else {
			return false;
		}
	}
}