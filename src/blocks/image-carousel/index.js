import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './style.scss';
import edit from './edit';
import save from './save';
import json from './block.json';

registerBlockType(json, {
	edit,
	save,
});
