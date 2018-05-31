import React, { Component } from 'react';

class Footer extends Component {
	render() {
		const { buttonGroup } = this.props;

		return buttonGroup === null ? (<div/>) : (<div>{buttonGroup}</div>);
	}
}

export default Footer;
