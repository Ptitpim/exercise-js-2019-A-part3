import React, { Component } from 'react';

class UITreeNode extends Component {
  state = {
    dragging: false,
  };

  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }

  render() {
    return (
      <div
        className="ui-tree-node"
        draggable="true"
        data-id={this.props.id}
        ref={this.componentRef}
        onDragStart={e => this.props.dragStart(e, this.props.id)}
      >
        <div className="ui-tree-node__inner">{this.props.label}</div>
      </div>
    );
  }
}

export default UITreeNode;