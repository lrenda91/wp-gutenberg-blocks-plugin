/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { Component } from 'react';

const name = "iol-gutenberg-examples/client-side-rendering";

// Register the block
registerBlockType(name, {
    apiVersion: 2,
    title: "IOL: Dynamic label",
    category: "layout",
    icon: "universal-access-alt",
    textdomain: "iol-gutenberg-examples",
    attributes: {
        text: { type: 'string' }
    },
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
                    <p>ciao</p>
                    <input type="text" value={this.props.attributes.text} onChange={this.handleChange} />
                </>
            )
        }
    },
    save: (props) => {
        return (
            <>
                <div><p>Text is: "{props.attributes.text}"</p></div>
                <p>ciao</p>
            </>
        )
    }
});