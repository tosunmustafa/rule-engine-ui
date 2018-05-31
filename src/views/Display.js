import React, { Component } from 'react';
import { Grid, Col, Row, Button, ButtonToolbar } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

class Display extends Component {


	render() {

		const heading = (<h2>Rules Inventory</h2>);

		const rulesTable = (
			<Row>
				<Col lg={12}>
		      
		  		</Col>
	  		</Row>
		);
		const footerButtonGroup = (
				<ButtonToolbar>
					<Button bsStyle="primary">Home</Button>
					<Button bsStyle="primary">Editor</Button>
				</ButtonToolbar>
		);		
	  return (
	  		<div>
		  		<Header heading={heading} />
			  	<Grid>
					{rulesTable}
		  		</Grid>
		  		<Footer buttonGroup={footerButtonGroup} />
	  		</div>
		);
	}
}

export default Display;
