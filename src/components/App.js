import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Players from './Players'
import Teams from './Teams'
import TeamPage from './TeamPage'
import Articles from './Articles'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/players' component={Players} />
            <Route path='/teams' component={Teams} />
            <Route path='/:teamId' exact component={TeamPage} />
            <Route path='/:teamId/articles' component={Articles} />
            <Route render={() => <h1 className='text-center'>Four oh Four.</h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App