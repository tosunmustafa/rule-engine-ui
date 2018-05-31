import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Header extends Component {
	render() {
		const { heading } = this.props;
		return (
			<Jumbotron>{heading}</Jumbotron>
		);
	}
}

export default Header;
