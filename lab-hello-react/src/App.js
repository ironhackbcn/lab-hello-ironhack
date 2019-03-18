import React, { Component } from 'react';
import Nav from "./components/Nav"
import Content from "./components/Content"
import Card from "./components/Card"
import './App.css';

const cards = [
	{
		id: 1,
		src: "icon1.png",
		header: "Declarative",
		text: "React makes it painless to create interactive UIs"
	},
	{
		id: 2,
		src: "icon2.png",
		header: "Components",
		text: "React makes it painless to create interactive UIs"
	},
	{
		id: 3,
		src: "icon3.png",
		header: "Single-Way",
		text: "React makes it painless to create interactive UIs"
	},
	{
		id: 4,
		src: "icon4.png",
		header: "JSX",
		text: "React makes it painless to create interactive UIs"
	}
];

class App extends Component {
	renderCards() {
		return cards.map((card) => {
			return <Card key={card.id} src={card.src} header={card.header} text={card.text} />
		});
	}

	render() {
		return (
			<div className="wrap">
				<header>
					<Nav />
					{/* <Content /> */}
					<Content>
						<h1>Header 1</h1>
						<p>blah blah</p>
						<button>button 1</button>
					</Content>
				</header>
				<section className="container cards-wrap">
					{this.renderCards()}
				</section>
			</div>
		);
	}
}

export default App;
