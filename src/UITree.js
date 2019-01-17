import React, { Component } from 'react';
import UITreeNode from './UITreeNode';

class UITree extends Component {
  state = {
    dragging: null,
    targetUnderneath: null,
    dragDirection: null,
    tree: this.props.tree,
  };

  moveNode(draggingID, targetID, direction) {
    const originalArray = this.state.tree;
    const movedItem = originalArray.find(todo => todo.id === draggingID);
    const remainingItems = originalArray.filter(todo => todo.id !== draggingID);
    const targetIndex = remainingItems.findIndex(todo => todo.id === targetID);
    const newIndex = targetIndex + direction;

    // Réordonne les éléments
    const reorderedItems = [
      ...remainingItems.slice(0, newIndex),
      movedItem,
      ...remainingItems.slice(newIndex)
    ];

    // Met à jour la liste des éléments
    this.setState({
      dragging: null,
      targetUnderneath: null,
      dragDirection: null,
      tree: reorderedItems
    });
  }

  onDragStart = (e, id) => {
    // Mémorise l'ID de l'élément déplacé
    this.setState({
      dragging: id,
    });
  };

  onDragOver = event => {
    // Element en dessous du curseur
    const targetUnderneath = event.target.closest('.ui-tree-node');

    const bounding = targetUnderneath.getBoundingClientRect();
    const offset = bounding.y + (bounding.height/2);
    // -1: before, 0: after
    const dragDirection = (event.clientY - offset > 0) ? 1 : 0;

    this.setState({
      targetUnderneath: parseInt(targetUnderneath.getAttribute('data-id')),
      dragDirection,
    });
  }

  onDragEnd = () => {
    // Déplace l'élément relaché
    this.moveNode(this.state.dragging, this.state.targetUnderneath, this.state.dragDirection);
  }

  render() {
    return (
      <div className="ui-tree" onDragOver={this.onDragOver} onDragEnd={this.onDragEnd}>
        {this.state.tree.map(node => <UITreeNode key={node.id} {...node} dragStart={this.onDragStart} />)}
      </div>
    );
  }
}

export default UITree;