import React, { Component } from 'react';
import LeftAside from './LeftAside';
import RightAside from './RightAside';
import CenterSection from './CenterSection';

export default class MainSection extends Component {
	render() {
		return (
			<section class="main__section--first">
				<LeftAside />
				<CenterSection />
				<RightAside />
			</section>
		);
	}
}
