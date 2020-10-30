import React, { Component } from 'react';
import GraphGroup from './GraphGroup';

export default class SecondSection extends Component {
	render() {
		return (
			<section className="main__section--second">
            <GraphGroup />
            <GraphGroup />
			</section>
		);
	}
}
