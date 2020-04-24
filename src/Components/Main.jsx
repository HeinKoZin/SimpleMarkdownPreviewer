import React from "react";

class Main extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.props.children}</div>
      </div>
    );
  }
}

export default Main;
