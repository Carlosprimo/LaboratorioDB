import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

export default class Nabvar extends Component {
	render() {
		return (
			<header className="main__header">
				<div className="header__logo">
					<img src="https://1.bp.blogspot.com/-2D0d7SrhPNA/X5zo6-NChGI/AAAAAAAAa2c/5YwDa0lF7ek9YhR7aEXHuTpugzqFh0o7wCLcBGAsYHQ/s495/logo.png"width="250" height="60"/>
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
