import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

const data = [
  { image: process.env.PUBLIC_URL + '/images/icon1.png',
    title: 'Declarative',
    subTitle: 'React makes it painless to create interactive UIs.'
  },
  {
    image: '/images/icon2.png',
    title: 'Components',
    subTitle: 'Build encapsulated components that manage their state.'
  },
  {
    image: '/images/icon3.png',
    title: 'Single-Way',
    subTitle: `A set  of immutable values are passed to the component's.`
  },
  {
    image: '/images/icon4.png',
    title: 'JSX',
    subTitle: 'Statically-typed, designed to run on modern browsers.'
  }
]
class App extends Component {
  renderList () {
    return data.map((item, index) => {
      return <Main key={`id-${index}`} image={item.image} title={item.title} subTitle={item.subTitle} />
    })
  }

  render () {
    return (
      <div>
        <Header/>
        {this.renderList()}
      </div>

    )
  }
}

export default App
