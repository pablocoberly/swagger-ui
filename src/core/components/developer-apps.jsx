import React from "react"
import PropTypes from "prop-types";

export default class DeveloperApps extends React.Component {

  static propTypes = {
    layoutActions: PropTypes.object.isRequired,
    authActions: PropTypes.object.isRequired,
    authSelectors: PropTypes.object.isRequired,
  }


  onFilterChange =(e) => {
    let {target: {value}} = e
    this.props.layoutActions.updateFilter(value)
  }

  onSelectedAppNameChange = (e) => {
    let { authActions } = this.props

    authActions.selectAppName(e.target.value)
  }

  render() {
    let { authSelectors } = this.props
    let configs = authSelectors.getAllConfigs()

    if (configs.length > 0) {
      return (
        <div className="developer-apps-container">
          <label htmlFor="selectedAppName"><span className="selectAppNameTitle">Choose an app to authorize:</span>
            <select name="selectedAppName" onChange={this.onSelectedAppNameChange} value={authSelectors.getSelectedAppName()}>
              {
                configs
                  .map((value)=> {
                    return ( <option key={value.appName}>{value.appName}</option>)
                  })

              }
            </select>
          </label>
        </div>
      )
    } else {
      return (
        <div className="developer-apps-container">
          <label htmlFor="selectedAppName"><span className="selectAppNameTitle">You don't have any apps to authorize. <a href="/user/me/apps/add">Create one</a>.</span>
            <select></select>
          </label>
        </div>
      )
    }
  }
}
