<?php
/**
 *
 */

defined( 'ABSPATH' ) || exit;

add_action( 'init', 'pbrocks_sample_blocks_enqueue_scripts' );
add_filter( 'render_block', 'pbrocks_sample_blocks_enqueue_conditionally', 10, 2 );
add_filter( 'block_categories_all', 'register_pbrocks_sample_blocks_categories', 10, 2 );
/**
 * Register PBrocks block category
 *
 * @param  [type] $categories [description]
 * @param  [type] $post       [description]
 * @return [type]             [description]
 */
function register_pbrocks_sample_blocks_categories( $categories, $post ) {
	$pbrocks_sample_blocks = array(
		'slug'  => 'pbrocks-sample-blocks',
		'title' => __( 'PBrocks Sample Blocks', 'pbrocks-sample-blocks' ),
		'icon'  => 'sos',
	);

	array_unshift( $categories, $pbrocks_sample_blocks );
	return $categories;
}

/**
 * Registers frontend JavaScript allowing the tabs
 * to function.
 */
function pbrocks_sample_blocks_enqueue_scripts() {
	wp_register_script(
		'esnext-tabs-frontend',
		plugins_url( 'js/tabs-frontend.js', __FILE__ ),
		array( 'jquery' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'js/tabs-frontend.js' ),
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
