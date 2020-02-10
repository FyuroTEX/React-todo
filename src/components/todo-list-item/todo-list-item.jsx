import React, {Component} from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {

  constructor() {
    super();
    this.state = {
      done: false
    };
    // this.onLabelClick = () => {
    //   console.log(`Done: ${this.props.label}`);
    // };
    this.onLabelClick = this.onLabelClick.bind(this); //Delete if use first variant
  };
  onLabelClick() {  //Delete if use first variant
    this.setState({
      done: !this.state.done
    });
    // console.log(this.state.done)
  };
  // onLabelClick = () => {
  //   console.log(`Done: ${this.props.label}`); //Use arrow function withouts constructirs and bindings
  // };

  render() {

    const { label, important = false } = this.props;

    const { done } = this.state;
    let classNames = "todo-list-item";
    if (done) {
      classNames += ' done';
    }

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    return (
      <div className={classNames}>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={this.onLabelClick}>  {/* onClick={this.onLabelClick.bind(this)} */}
          {label}
        </span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </div>
    );
  }

}



