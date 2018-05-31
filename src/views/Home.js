import React, { Component } from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';


class Home extends Component {

	navigateEdit(){
  	this.props.history.push('edit',null);
	}

	navigateDisplay(){
  	this.props.history.push('display',null);
	}

	render() {
		const wellStyles = { maxWidth: 600, margin: '0 auto 10px' };

		const heading = (<div><h1>Arkenian Rule Engine</h1><h4>Some motto here</h4></div>);

		const buttons = (
			<Row>
				<Col lg={12} md={12} sm={12} xs={12}>
				  <div className="well" style={wellStyles}>
				    	<Button bsStyle="primary" bsSize="large" block onClick={this.navigateEdit.bind(this)}>
				      	New Rule
				    	</Button>
				    	<Button bsSize="large" block onClick={this.navigateDisplay.bind(this)}>
					      View Rules
				    	</Button>
				  </div>
	  			</Col>
	  		</Row>
		);  	
	  return (
	  		<div>
	  			<Header heading={heading}/>
			  	<Grid>
					{buttons}
		  		</Grid>
		  		<Footer/>
	  		</div>
		);
	}
}

export default Home;
