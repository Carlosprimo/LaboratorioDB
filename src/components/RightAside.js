import React, { Component } from 'react';
import '../css/RightAside.css';

export default class RightAside extends Component {
	render() {
		return (
			<aside className="section__aside--right">
				<div className="aside__info--total-deaths">
					<span className="info--title">Total Deaths</span>
					<span className="info--quantity">*Example*</span>
					<div className="aside__menu--department-deaths">
						<span>100.000 Atlántico</span>
						<span>200.000 Antioquia</span>
						<span>50.000 Amazonas</span>
						<span>80.000 Cundinamarca</span>
						<span>10.000 Meta</span>
					</div>
				</div>
				<div className="aside__info--total-recovers">
					<span className="info--title">Total Recovered</span>
					<span className="info--quantity">*Example*</span>
					<div className="aside__menu--department-recovers">
						<span>100.000 Atlántico</span>
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
