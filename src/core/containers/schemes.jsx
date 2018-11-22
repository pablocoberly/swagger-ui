import React from "react"
import PropTypes from "prop-types"

export default class SchemesContainer extends React.Component {

  static propTypes = {
    specActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
  }

  render () {
    const {specActions, specSelectors, getComponent} = this.props
    const currentScheme = specSelectors.operationScheme()
    const schemes = specSelectors.schemes()
    const securityDefinitions = specSelectors.securityDefinitions()

    const Col = getComponent("Col")
    const Schemes = getComponent("schemes")
    let DeveloperApps = getComponent("DeveloperApps", true)

    return (
      <div>
        {schemes && schemes.size || securityDefinitions ? (
          <div className="scheme-container">
            <Col className="schemes wrapper" mobile={12}>
              {schemes && schemes.size ? (
                <Schemes
                  currentScheme={currentScheme}
                  schemes={schemes}
                  specActions={specActions}
                />
              ) : null}
              {securityDefinitions ? (
                <DeveloperApps/>
              ) : null}
            </Col>
          </div>
        ) : null}
      </div>
    )
  }
}
