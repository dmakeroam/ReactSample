import React, {Component} from 'react'
import {Provider} from 'react-redux'
import Store from '../store/pageStore'
import PageContainer from './PageContainer'

export default class PageProvider extends Component {
  render () {
    return (
      <Provider store={Store}><PageContainer /></Provider>
    )
  }
}
