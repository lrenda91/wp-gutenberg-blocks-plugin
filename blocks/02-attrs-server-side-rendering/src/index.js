/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { Component } from 'react';

import json from '../block';

const { name, ...settings } = json;

// Register the block
registerBlockType(name, {
    settings,

    edit: class extends Component  {
        constructor(props) {
            super(props);
            this.props = props;
            this.state = {value: ''};
        }

        handleChange = (event) => {
            this.setState({value: event.target.value});
            this.props.attributes.text = event.target.value;
        };

        render() {
            return (
                <>
                    <label>Type text:</label>
                    <input type="text" value={this.props.attributes.text} onChange={this.handleChange} />
                </>
            )
        }
    },
    save: () => {
        return null;
    }
});
