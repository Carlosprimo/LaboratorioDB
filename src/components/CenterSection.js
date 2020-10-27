import React, { Component } from 'react';
import '../css/CenterSection.css';

export default class CenterSection extends Component {
	render() {
		return (
			<section class="section__section--center">
				<div class="section__map-cases">
					{' '}
					CANVAS MAP
					<canvas class="map"></canvas>
				</div>
			</section>
		);
	}
}
