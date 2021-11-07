<?php

/*
 * Plugin Name: Gutenberg custom blocks
 * Plugin URI: https://github.com/lrenda91/wp-gutenberg-blocks-plugin.git
 * Description: Boilerplate code for custom Gutenberg blocks plugin
 * Author: Luigi Renda
 * Author URI:
 * Version 1.0
 * Text Domain: wp-gutenberg-blocks
 */

defined( 'ABSPATH' ) || exit;

add_action('init', function () {

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

    /*
     * Load blocks
     */
    include 'blocks/01-dynamic-label/index.php';
    include 'blocks/02-attrs-server-side-rendering/index.php';

});


