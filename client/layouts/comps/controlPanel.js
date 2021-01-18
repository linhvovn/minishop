import React, { Component } from 'react'

class ControlPanel extends React.Component {

  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">{this.props.headerText}</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2">
            {/* <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button> */}
          </div>
          {/* <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
              This week
            </button> */}
        </div>
      </div>
    )
  }
}

export default ControlPanel;