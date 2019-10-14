import React from "react";

class Fiddle extends React.Component {
    render() {
        return <div>
            Value by default props: {this.props.name}
        </div>
    }
}

Fiddle.defaultProps = {
    name: "Anand Dev Singh"
}

export default Fiddle;