<?php 

use yii\helpers\Html;

$this->title = 'Admin';
?>

<div class="admin-default-index">
    <h1>Admin Panel</h1>

    <table class="table table-hover">
        <thead>
            <tr>
                <td>Path</td>
                <td>Url</td>
            </tr>
        </thead>
        <tbody>
                <tr id="home-admin">
                    <td>
                        <?= Html::a('/admin', ['/admin']) ?>
                    </td>
                    <td>
                        Admin Home
                    </td>
                </tr>
                <tr id="mentors">
                    <td>
                        <?= Html::a('/admin/mentors', ['/admin/mentors']) ?>
                    </td>
                    <td>
                        Admin Mentors
                    </td>
                </tr>
        </tbody>
    </table>
</div>
