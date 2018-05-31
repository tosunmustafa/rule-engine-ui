import React, { Component } from 'react';
import { Grid, Col, Row, Button, ButtonToolbar, Form, FormControl, FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

class Edit extends Component {

	constructor(){
		super();
		this.state = {
			ruleName : 'New Rule',
			ruleContex : '',
			ruleSourceCatalogs : [],
		};
    	this.handleChange = this.handleChange.bind(this);
	}



	getValidationState() {
		const length = this.state.ruleName.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	}

	handleChange(e) {
		this.setState(!e.target.value ? {ruleName : 'New Rule'} : { ruleName: e.target.value });
	}  

	render() {

  		const { ruleName } = this.state;

  		const heading = (<h2>{ruleName}</h2>);

		const form = (
			<Form>
				<Row>
					<Col lg={12}>
						<FormGroup controlId="ruleName" validationState={this.validationState}>
							<ControlLabel>Rule Name</ControlLabel>
							<FormControl type="text" value={this.state.value} placeholder={ruleName} onChange={this.handleChange} />
							<FormControl.Feedback/>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<FormGroup>
							<ControlLabel>Available Rule Contexes</ControlLabel>
							<Checkbox>
								Default
							</Checkbox>
						</FormGroup>
					</Col>
				</Row>
			</Form>
		);

		const footerButtonGroup = (
				<ButtonToolbar>
					<Button bsStyle="primary">Home</Button>
					<Button bsStyle="primary">Editor</Button>
				</ButtonToolbar>
		);
		return (
	  		<div>
		  		<Header heading={heading}/>
		  		<Grid>
					{form}
	  			</Grid>
	  			<Footer buttonGroup={footerButtonGroup}/>
	  		</div>
		);
	}
}

export default Edit;
