import React from 'react'
import { connect } from 'react-redux'
import Example from './../components/Example'

const mapStateToProps = (state) => {
  console.log(state)
}

const ExampleContainer = () => (
  <Example />
)

export default connect(mapStateToProps)(ExampleContainer)