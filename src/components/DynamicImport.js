import { Component } from 'react'

export default class DynamicImport extends Component {
  state = {
    component: null
  }
  componentWillMount() {
    this.props.load()
      .then((mod) => this.setState(() => ({
        component: mod.default
      })))
  }
  render() {
    return this.props.children(this.state.component)
  }
}