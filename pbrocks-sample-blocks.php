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
add_action( 'init', 'pbrocks_sample_blocks_enqueue_scripts' );
add_filter( 'render_block', 'pbrocks_sample_blocks_enqueue_conditionally', 10, 2 );
/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function pbrocks_sample_blocks_register_blocks() {
	register_block_type( __DIR__ . '/build' );
}

/**
 * Registers frontend JavaScript allowing the tabs
 * to function.
 */
function pbrocks_sample_blocks_enqueue_scripts() {
	wp_register_script(
		'esnext-tabs-frontend',
		plugins_url( 'tabs-frontend.js', __FILE__ ),
		array( 'jquery' ),
		filemtime( plugin_dir_path( __FILE__ ) . '/tabs-frontend.js' ),
		true
	);
}

/**
 * Registers frontend JavaScript allowing the tabs
 * to function.
 */
function pbrocks_sample_blocks_enqueue_conditionally( $block_content, $block ) {
	if ( 'pbrocks-sample-blocks/esnext-tabs' === $block['blockName'] ) {
		wp_enqueue_script( 'esnext-tabs-frontend' );
	}
	return $block_content;
}
