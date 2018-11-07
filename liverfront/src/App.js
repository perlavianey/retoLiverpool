import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Routes from './Routes';
import './index.css'


class App extends Component {
  render() {
    return (
      <div>
        <section className="content">
          <Routes/>
        </section>
        <footer className="footer">
          <p>Developed by Perla Vianey</p>
          <a href="https://www.linkedin.com/in/pvramosr/"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/perlavianey"><i className="fab fa-github-alt"></i></a>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);