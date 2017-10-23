import React, {Component} from 'react'
import {Page} from '../components'
import { connect } from 'react-redux'
import {fetching} from '../state/actions'

class PageContainer extends Component {
  componentDidMount () {
    this.props.fetchPages()
  }

  render () {
    var page = null
    if (this.props.shouldAppearTable) {
      page = <Page pages={this.props.pages} />
    } else {
      page = this.props.message
    }
    return (
      <div>
        {page}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.page.pages,
    shouldAppearTable: state.page.shouldAppearTable,
    message: state.page.message
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    fetchPages: () => {
      dispatch(fetching())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(PageContainer)
