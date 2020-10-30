import React, { Component } from 'react';
//import axios from 'axios';
import '../css/LineChart.css';

export default class LineChart extends Component {

   /*
   componentDidMount() {
      axios.get('http://localhost:5000/persons')
         .then(res => console.log(res.data.map((caso) => {return caso.Estado})))
   }*/

	render() {
		return (
			<div className="section__chart--line"></div>
		);
	}
}