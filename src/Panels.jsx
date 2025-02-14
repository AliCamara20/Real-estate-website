import EstateLocations from "./EstateLocation"
import Panel from "./Panel"
import Features from "./PropertyFeatures"
import PropertyStatus from "./PropertyStatus"
import PropertyTypes from "./PropertyTypes"
const Panels = () => {
    return(
        <div className="collapsible_panels">
            <Panel label={'Where'} >
                <EstateLocations />
            </Panel>
            <Panel label={'Property types'} >
                <PropertyTypes />
            </Panel>
            <Panel label={'property status'} >
                <PropertyStatus />
            </Panel>
            <Panel label={'features'} >
                <Features />
            </Panel>
        </div>
    )
}

export default Panels