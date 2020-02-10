import React, { Component } from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {

  constructor() {
    super();
    this.state = {
      done: false,
      important: false
    };
    // this.onLabelClick = () => {
    //   console.log(`Done: ${this.props.label}`);
    // };
    this.onLabelClick = this.onLabelClick.bind(this); //Delete if use first variant
    this.onMarkImportant = this.onMarkImportant.bind(this);
  };
  onMarkImportant() {
    this.setState((state) => {
      return {
        important: !state.important
      }
    });
  };
  onLabelClick = () => {  //Delete if use first variant
    this.setState(({ done }) => {
      return {
        done: !done
      }
    })
    // console.log(this.state.done)
  };
  // onLabelClick = () => {
  //   console.log(`Done: ${this.props.label}`); //Use arrow function withouts constructirs and bindings
  // };

  render() {

    const { label, onDeleted } = this.props;

    const { done, important } = this.state;
    let classNames = "todo-list-item";
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <div className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick}>  {/* onClick={this.onLabelClick.bind(this)} */}
          {label}
        </span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </div>
    );
  }

}



