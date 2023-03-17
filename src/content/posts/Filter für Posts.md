---
title: 'Filter für Posts'
pubDate: 2022-07-01
description: 'Filter für Posts'
author: 'me'
image:
    url: ''
    alt: ''
tags: ["php", "wordpress"]
---


```php
add_action( 'restrict_manage_posts', 'form_select' );
add_action( 'pre_get_posts', 'query_filter' );
//add_action( 'admin_enqueue_scripts', 'jqueryui' );

function form_select() {
    $post_type = ( isset($_GET['post_type']) ) ? $_GET['post_type'] : 'jobs';

    if ($post_type == 'jobs') {
        // please use unique name
        $from = ( isset( $_GET['pe_date'] ) && $_GET['pe_date'] ) ? $_GET['pe_date'] : '';
        $current_status = $_GET['pe_status'] ?? '';
        $statuses = array('Inaktiv', 'Aktiv');

        $companies = new WP_Query(array(
            'post_type' => 'company',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'orderby' => "post_title",
            'order' => "ASC"
        ));
        $companies = $companies->posts;
        ?>
        <select name="filter_company" id="filter_company">
            <option value="">Alle Firmen</option>
            <?php
            foreach ($companies as $company) {
                echo "<option value='" . $company->ID . "'>" . $company->post_title . "</option>";
            }
            ?>
        </select>

        <select name="pe_status">
            <option value="" <?php if (!isset($_GET['pe_status']) || $_GET['pe_status'] == '') {echo "selected";} ?>><?= __('Aktiv & Inaktiv', 'projectsengine'); ?></option>
            <option value="1" <?php if (isset($_GET['pe_status']) && $_GET['pe_status'] == 1) {echo "selected";} ?>><?= __('Aktiv', 'projectsengine'); ?></option>
            <option value="2" <?php if (isset($_GET['pe_status']) && $_GET['pe_status'] == 2) {echo "selected";} ?>><?= __('Inaktiv', 'projectsengine'); ?></option>
        </select>

        <?php
    }
    wp_reset_query();
}

function query_filter( $admin_query ) {
    global $pagenow;
    $post_type = (isset($_GET['post_type'])) ? $_GET['post_type'] : 'jobs';

    if ( $post_type == 'jobs' && $pagenow == 'edit.php' ) {
//        echo "Status: " . $_GET['pe_status'] . "<br>";
        if ( isset( $_GET['pe_status'] ) && ! empty( $_GET['pe_status'] ) && (!isset( $_GET['filter_company'] )  || empty( $_GET['filter_company'] ))) {
            $admin_query->set('meta_key', 'is_active');
            $admin_query->set('meta_value', $_GET['pe_status']);
        }
//
        if ( isset( $_GET['filter_company'] ) && ! empty( $_GET['filter_company'] ) && (!isset( $_GET['pe_status'] ) || empty( $_GET['pe_status'] ))) {
            $admin_query->set('meta_key', 'company_id');
            $admin_query->set('meta_value', $_GET['filter_company']);
        }

        if ( isset( $_GET['filter_company'] ) && ! empty( $_GET['filter_company'] ) && isset( $_GET['pe_status'] ) && !empty( $_GET['pe_status'] ) ) {

            $meta_query[] = array(
                'relation' => 'AND',
                array(
                    'key' => 'company_id',
                    'value' => $_GET['filter_company'],
                    'compare' => '='
                ),

                array(
                    'key' => 'is_active',
                    'value' => $_GET['pe_status'],
                    'compare' => '='
                )
            );

            $admin_query->set('meta_query', $meta_query);
        }
    }

    return $admin_query;
}
``` 
