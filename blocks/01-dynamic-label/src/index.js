/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

import json from '../block';

const { name, ...settings } = json;

registerBlockType(name, {
    settings,
    edit: (props) => {
        const handleChange = ( event ) => {
            props.setAttributes( { text: event.target.value } );
        };

        return (
            <>
                <label>Type text:</label>
                <input type="text" value={props.attributes.text} onChange={handleChange} />
            </>
        )
    },
    save: (props) => {
        return (
            <>
                <div><p>Text is: {props.attributes.text}</p></div>
            </>
        )
    }
});