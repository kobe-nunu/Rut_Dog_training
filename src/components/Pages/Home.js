import React, {Component} from 'react';
import Header from '../Common/Header';
import Services from './Services';
import Contact from '../Common/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Home extends Component{
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render(){
        return(
            <section id="main">
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
              <Header
                title = "Rut Dog Training"
                subtitle = "אילוף כלבים וכלבנות טיפולית"
                ButtonText = "למידע נוסף"
                link = "/about"
                showButton = {true}
              />
              <Services/>
              <br/>
              <br/>
              <br/>
              <Contact />
            </section>
        )
    }
}

export default Home;