import React, { Component } from 'react';
import '../css/CenterSection.css';

export default class CenterSection extends Component {
	render() {
		return (
			<section className="section__section--center">
				<div className="section__map-cases">
					{' '}
					<canvas className="map"></canvas>
				</div>
			</section>
		);
	}
}
