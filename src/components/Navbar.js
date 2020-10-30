import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

export default class Nabvar extends Component {
	render() {
		return (
			<header className="main__header">
				<div className="header__logo">
					<span>
						<Link to="/" className="logo">
							COVID 24/7
						</Link>
					</span>
				</div>
				<nav className="header__nav">
					<ul className="nav__menu">
						<li className="menu--option">
							<Link to="/graphics">Graphics</Link>
						</li>
						<li className="menu--option">
							<Link to="/">Item 2</Link>
						</li>
						<li className="menu--option">
							<Link to="/">Item 3</Link>
						</li>
						<li className="menu--option">
							<Link to="/">Item 4</Link>
						</li>
						<li className="menu--option">
							<Link to="/">Item 5</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}
