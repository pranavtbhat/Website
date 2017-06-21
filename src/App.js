import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';

import Home from './Main/Home'
import About from './Main/About'
import CV from './Main/CV'
import Blog from './Main/Blog'
import Music from './Main/Music'
import Album from './Main/Album'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      width: 0
    }
  }

  componentDidMount() {
    this.setState({ width: document.getElementById('root').offsetWidth });
  }

  render() {
    const picWidth = Math.round( 0.15 * this.state.width )

    return (
      <Router>
        <div className="App">
          <div className="Navbar">
            <div className="Profile">
              <img className="ProfilePic" src={"http://graph.facebook.com/100004102142256/picture?width=" + picWidth + "&height=" + picWidth}/>
            </div>

            <div className="Menu">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/CV">CV</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Music">Music</Link></li>
                <li><Link to="/Album">Album</Link></li>
              </ul>
            </div>
          </div>

          <hr />
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/CV" component={CV}/>
          <Route path="/Blog" component={Blog}/>
          <Route path="/Music" component={Music}/>
          <Route path="/Album" component={Album}/>
        </div>
      </Router>
    )
  }
}

export default App;
