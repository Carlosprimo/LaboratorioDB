import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nabvar extends Component{
   render() {
      return(
         <header class="main__header">
				<div class="header__logo">
					<span><Link to="/" className="logo">COVID 24/7</Link></span>
				</div>
				<nav class="header__nav">
					<ul class="nav__menu">
                  <li class="menu--option">
							<Link to="/">Item 1</Link>
						</li>
						<li class="menu--option">
							<Link to="/">Item 2</Link>
						</li>
						<li class="menu--option">
							<Link to="/">Item 3</Link>
						</li>
						<li class="menu--option">
							<Link to="/">Item 4</Link>
						</li>
						<li class="menu--option">
							<Link to="/">Item 5</Link>
						</li>
					</ul>
				</nav>
			</header>
      )
   }
}