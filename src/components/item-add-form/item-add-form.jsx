import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    constructor() {
        super();
        this.state = {
            label: ''
        };
        this.onLabelChange = this.onLabelChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onLabelChange(e) {
        this.setState({
            label: e.target.value
        });
    };
    onSubmit(e) {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        // document.getElementById('todoForm').value = '';
        this.setState({
            label: ''
        })
    };

    render() {
        // let { onItemAdded } = this.props;
        return (
            <form className='item-add-form d-flex'
                onSubmit={this.onSubmit}>
                <input
                    id='todoForm'
                    type="text"
                    className='form-control'
                    onChange={this.onLabelChange}
                    placeholder='What need to be done?'
                    value={this.state.label}
                />
                <button
                    className='btn btn-outline-primary'>
                    <i className="fa fa-plus"></i>
                </button>
            </form>

        );
    };

};