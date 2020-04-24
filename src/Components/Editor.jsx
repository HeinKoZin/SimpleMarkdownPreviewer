import React from "react";

class Editor extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <h4>Editor</h4>
        <textarea
          id="editor"
          value={this.props.markdown}
          onChange={this.props.onChange}
          type="text"
        />
        
      </div>
    );
  }
}

export default Editor;
