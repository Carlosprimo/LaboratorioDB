import React, { Component } from 'react';
import '../css/RightAside.css';

export default class RightAside extends Component {
	render() {
		return (
			<aside class="section__aside--right">
				<div class="aside__info--total-deaths">
					<span class="info--title">Total Deaths</span>
					<span class="info--quantity">*Example*</span>
					<div class="aside__menu--department-deaths">
						<span class="active">100.000 Atlántico</span>
						<span>200.000 Antioquia</span>
						<span>50.000 Amazonas</span>
						<span>80.000 Cundinamarca</span>
						<span>10.000 Meta</span>
					</div>
				</div>
				<div class="aside__info--total-recovers">
					<span class="info--title">Total Recovered</span>
					<span class="info--quantity">*Example*</span>
					<div class="aside__menu--department-recovers">
						<span class="active">100.000 Atlántico</span>
						<span>200.000 Antioquia</span>
						<span>50.000 Amazonas</span>
						<span>80.000 Cundinamarca</span>
						<span>10.000 Meta</span>
					</div>
				</div>
			</aside>
		);
	}
}
