<?php

namespace app\components;

use yii\base\Component;

/**
 * MentorImageUploadComponent Component class.
 * 
 * Used to upload the images in the Mentor model to the server
 * and saves their names into the database.
 */
class MentorImageUploadComponent extends Component
{
	/**
	 * Core upload directory for the images
	 */
	public static $UPLOAD_DIR = 'uploads/';

	/**
	 * Upload function for the images.
	 * Also constructs the name which will be saved into the database.
	 * @return boolean
	 */
	public function uploadImages(&$model)
	{
		$time = time();
		if ($model->image1->saveAs('../' . $this::$UPLOAD_DIR . $time . 'mentor-image-1' . '.' . $model->image1->extension)
			&& 
			$model->image2->saveAs('../' . $this::$UPLOAD_DIR . $time . 'mentor-image-2' . '.' . $model->image1->extension)) {
			$model->image1 = $time . 'mentor-image-1' . '.' . $model->image1->extension;
			$model->image2 = $time . 'mentor-image-2' . '.' . $model->image2->extension;
			return true;
		} else {
			return false;
		}
	}
}