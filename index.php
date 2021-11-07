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

    defined( 'WP_GUTENBERG_BLOCKS_JS_HANDLE' ) || define('WP_GUTENBERG_BLOCKS_JS_HANDLE', 'blocks-js');
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' );

    wp_register_script('blocks-js',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    if ( ! function_exists( 'register_block_type' ) ) {
        // Gutenberg is not active.
        return;
    }

});