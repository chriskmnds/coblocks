/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { BlockControls, AlignmentToolbar } = wp.editor;

class Controls extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			contentAlign,
		} = attributes;

		return (
			<Fragment>
				<BlockControls>
					<AlignmentToolbar
						value={ contentAlign }
						onChange={ ( nextContentAlign ) => setAttributes( { contentAlign: nextContentAlign } ) }
					/>
				</BlockControls>
			</Fragment>
		);
	}
};

export default Controls;
