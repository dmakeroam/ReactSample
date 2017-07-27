import React, {Component} from 'react'
import {render} from 'react-dom'
import fetch from 'isomorphic-fetch'
import {Page} from '../components'

class PageContainer extends Component {

  state = {
    pages: []
  }

  componentDidMount () {
    fetch('http://localhost:8081/api/v1/pages')
     .then((response) => response.json())
     .then(json => this.setState({pages : json}))
  }

  render () {
     return (
         <div>
         <Page pages = {this.state.pages}/>
         </div>
     )
  }
}

export default PageContainer
