import { shallow } from 'enzyme';
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { expect } from 'chai';
import sinon from 'sinon';

import Header from './Header';

describe('<Header/>', ()=>{

		it('renders Jumbotron', ()=>{
			const wrapper = shallow(<Header/>);
			expect(wrapper.find(Jumbotron)).to.have.length(1);
		});


		it('renders h1 wrapped with Jumbotron', ()=>{
			const heading = (<h1>Hello</h1>);
			const wrapper = shallow(<Header heading={heading}/>);
			expect(wrapper.find(Jumbotron).find('h1')).to.have.length(1);
		});
});
