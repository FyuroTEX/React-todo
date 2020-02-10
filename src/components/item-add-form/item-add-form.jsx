import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    //     constructor(props) {
    //         super();
 
    //  };
   
    render() {
        let { onItemAdded } = this.props;
        return (
            <div className='item-add-form'>
                <button
                    className='btn btn-outline-primary'
                    onClick={() => onItemAdded('Hello World')}>
                    Add Item
                </button>
            </div>

        );
    };

};