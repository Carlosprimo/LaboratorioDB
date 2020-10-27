import React, { Component } from 'react';
import '../css/LeftAside.css';

export default class LeftAside extends Component {
	render() {
		return (
			<aside class="section__aside--left">
				<div class="aside__info--total-cases">
					<span>Total Cases</span>
					<span>*Example*</span>
				</div>
				<div class="aside__menu--department-cases">
					<p>
						<strong>Cases by Deparment</strong>
					</p>
					<span class="active">100.000 Atlántico</span>
					<span>200.000 Antioquia</span>
					<span>50.000 Amazonas</span>
					<span>80.000 Cundinamarca</span>
					<span>10.000 Meta</span>
				</div>
				<div class="aside__info--updated">
					<span>Last Updated at (DD/MM/YYYY)</span>
					<span>
						<strong>11/10/2020 5:30 p.m.</strong>
					</span>
				</div>
			</aside>
		);
	}
}
