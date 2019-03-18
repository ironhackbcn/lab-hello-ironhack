import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import Jumbotron from './components/Jumbotron';

const data = [
  { title: 'Declarative', text: 'React makes it painless to create interactive UIs.', img: 'icon1.png'},  
  { title: 'Components', text: 'Build encapsulated components that manage their state.', img: 'icon2.png'},
  { title: 'Single-Way', text: 'A set of immutable values are passed to the component\'s.', img: 'icon3.png'},
  { title: 'JSX', text: 'Statically-typed, designed to run on modern browsers.', img: 'icon4.png'}
]

class App extends Component {
  renderList() {
    return (data.map((item, index) => {
      return <Card key ={`id${index}`}
      title = {item.title}
      img = {item.img}
      text= {item.text}/>
    }))
  }

  render() {
    return (
      <div className="App"> 
        <Jumbotron
        title="Say Hello to ReactJS"
        paragraph="You will learn a Frontend framework form scratch to became a Ninka Developer."
        buttonText="Awesome!"
        iconOne="ironhack-logo"
        iconTwo="menu-top"
        />

        <section >
          <div className="articles">
            <Card
              img='icon1.png'
              title='Declarative'
              text='React makes it painless to create interactive UIs.'
            />
            <Card
              img='icon2.png'
              title='Components'
              text='Build encapsulated components that manage their state.'
            />
            <Card
              img='icon3.png'
              title='Single-Way'
              text="A set of immutable values are passed to the component\'s."
            />
            <Card
              img='icon4.png'
              title='JSX'
              text='Statically-typed, designed to run on modern browsers.'
            />
          </div> 
        </section>

        <section>
          <div className="articles">
              {this.renderList()}
          </div>
        </section>
      </div>
    );
  }
}

export default App;