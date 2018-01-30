import React, { Component } from 'react'

import Row from './layout/row'
import Grid from './layout/grid'

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Grid cols='12 6 3 1'>
          </Grid>
        </Row>
      </div>
    )
  }
}

export default App