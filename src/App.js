import React, {
  Component
} from 'react';
import Card from './components/Card';
import Header from './components/Header'
import './app.css';

class App extends Component {
  render() {
    const title = 'title inside var';
    const data = [{
        title: 'title1',
        image: '/images/icon1.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam reprehenderit possimus at minus assumenda animi magni vitae asperiores obcaecati harum voluptates odit, deserunt provident, molestias culpa. Alias, iusto veniam!'
      },
      {
        title: 'title2',
        image: '/images/icon2.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam reprehenderit possimus at minus assumenda animi magni vitae asperiores obcaecati harum voluptates odit, deserunt provident, molestias culpa. Alias, iusto veniam!'
      } ,{
        title: 'title3',
        image: '/images/icon3.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam reprehenderit possimus at minus assumenda animi magni vitae asperiores obcaecati harum voluptates odit, deserunt provident, molestias culpa. Alias, iusto veniam!'
      } ,{
        title: 'title4',
        image: '/images/icon4.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quibusdam reprehenderit possimus at minus assumenda animi magni vitae asperiores obcaecati harum voluptates odit, deserunt provident, molestias culpa. Alias, iusto veniam!'
      }
    ];


    return ( <
      div className = "main" >
      <
      Header / >
      <
      div className = "main-text" >
      <
      h1 > Say hello to ReactJS < /h1> <
      h3 > You will learn a Frontend framework from scratch, to become a Developer < /h3> <
      button > Awesome! < /button> <
      /div>


      <
      div className = "bottom" > {
        data.map((item, index) => {
          return <Card key = {
            index
          }
          image = {
            item.image
          }
          title = {
            item.title
          }
          description = {
            item.description
          }
          />
        })


        /* <Card title={title} description="Text1 about bla bla bla bla
      Text about bla bla bla bla
      Text about bla bla bla bla"/>
        <Card title="title2" description="Text2 about bla bla bla bla
      Text about bla bla bla bla
      Text about bla bla bla bla" />
        <Card title="title3" description="Text3 about bla bla bla bla
      Text about bla bla bla bla
      Text about bla bla bla bla"/>
        <Card title="title4" description="Text4 about bla bla bla bla
      Text about bla bla bla bla
      Text about bla bla bla bla"/> */
      } <
      /div>




      <
      /div>
    );
  }
}

export default App;