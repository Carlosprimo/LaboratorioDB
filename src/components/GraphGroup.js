import React, { Component } from 'react';
import LineChart from './LineChart';
import '../css/GraphGroup.css'

export default class GraphGroup extends Component {
	render() {
		return (
			<section className="section__graph">
            <div className="graph__options">
               <select>
                  <option>Hola 1</option>
                  <option>Hola 2</option>
                  <option>Hola 3</option>
               </select>
               <select>
                  <option>Hola 1</option>
                  <option>Hola 2</option>
                  <option>Hola 3</option>
               </select>
            </div>
            <LineChart />
			</section>
		);
	}
}