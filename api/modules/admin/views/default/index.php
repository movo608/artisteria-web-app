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
                <tr id="artists">
                    <td>
                        <?= Html::a('/admin/artists', ['/admin/artists']) ?>
                    </td>
                    <td>
                        Admin Artists
                    </td>
                </tr>
                <tr id="partners">
                    <td>
                        <?= Html::a('/admin/partners', ['/admin/partners']) ?>
                    </td>
                    <td>
                        Admin Partners
                    </td>
                </tr>
                <tr id="testimonials">
                    <td>
                        <?= Html::a('/admin/testimonials', ['/admin/testimonials']) ?>
                    </td>
                    <td>
                        Admin Testimonials
                    </td>
                </tr>
        </tbody>
    </table>
</div>
