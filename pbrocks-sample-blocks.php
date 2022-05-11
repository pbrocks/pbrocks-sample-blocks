<?php
/**
 * Plugin Name: PBrocks Sample Blocks
 * Plugin URI: https://github.com/pbrocks/pbrocks-sample-blocks
 * Description: This is a plugin demonstrating how to create tabs using the Gutenberg editor.
 * Version: 2.0.1
 * Author: pbrocks
 * Author URI: https://github.com/pbrocks
 *
 * License:           GPL v3
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain:       pbrocks-sample-blocks
 * Domain Path:       /languages
 *
 * @package pbrocks_sample_blocks
 */

defined( 'ABSPATH' ) || exit;

add_action( 'init', 'pbrocks_sample_blocks_register_blocks' );
add_action( 'init', 'pbrocks_sample_blocks_php_init' );
/**
 * Registers block assets individually. Webpack watches
 * /src folder for changes and builds in /build.
 */
function pbrocks_sample_blocks_register_blocks() {
	register_block_type( __DIR__ . '/build/blocks/block-context' );
	register_block_type( __DIR__ . '/build/blocks/esnext-tabs' );
	register_block_type( __DIR__ . '/build/blocks/image-carousel' );
	register_block_type( __DIR__ . '/build/nasa-image-carousel' );
}

/**
 * Registers php files for inclusion.
 */
function pbrocks_sample_blocks_php_init() {
	$block_directory = __DIR__ . '/inc';
	if ( file_exists( $block_directory ) && is_dir( $block_directory ) ) {
		foreach ( glob( $block_directory . '/*.php' ) as $filename ) {
			require_once $filename;
		}
	}
	$block_callbacks = __DIR__ . '/inc/callbacks';
	if ( file_exists( $block_callbacks ) && is_dir( $block_callbacks ) ) {
		foreach ( glob( $block_callbacks . '/*.php' ) as $filename ) {
			require_once $filename;
		}
	}
}
