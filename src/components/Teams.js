import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { getTeamNames } from '../api'

export default class Teams extends Component {
  state = {
    teamNames: [],
    loading: true,
  }
  componentDidMount () {
    getTeamNames()
      .then((teamNames) => {
        this.setState(() => ({
          loading: false,
          teamNames,
        }))
      })
  }
  render () {
    const { loading, teamNames } = this.state
    const { location, match } = this.props

    return (
      <div className='container two-column'>
        <Sidebar
          loading={loading}
          title='Teams'
          list={teamNames}
          {...this.props}
        />

        {loading === false && location.pathname === '/teams'
          ? <div className='sidebar-instruction'>Select a Team</div>
          : null}
      </div>
    )
  }
}
