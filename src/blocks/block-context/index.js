import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import json from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType(json, {
	attributes: {
		contextId: {
			type: 'string',
		},
	},

	providesContext: {
		'pbrocks-sample-blocks/contextId': 'contextId',
	},

	/**
	 * @see ./edit.js
	 */
	edit,

	/**
	 * @see ./save.js
	 */
	save,
});

registerBlockType('pbrocks-sample-blocks/uses-context', {
	title: 'Context Title',
	category: 'elemental-blocks',
	// so that this block doesn't appear in inserter
	parent: ['pbrocks-sample-blocks/provide-context'],

	usesContext: ['pbrocks-sample-blocks/contextId'],

	edit({ context }) {
		return 'The context ID: ' + context['pbrocks-sample-blocks/contextId'];
	},

	save() {
		return null;
	},
});
