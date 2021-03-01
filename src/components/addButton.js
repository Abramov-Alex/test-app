import React, { Component } from "react";

export default class AddButton extends Component {

    state = {
        label: ''
    };

    onLabelChange = (a) => {
        this.setState({
            label: a.target.value
        });
    };

    onSubmit = (a) => {
        a.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className='row'>
                    <div className='col-md-9'>
                        <input type='text' className='form-control' placeholder='what to do...' value={this.state.label} onChange={this.onLabelChange}/>
                    </div>
                    <div className='col-md-3'>
                        <button type="button" className="btn btn-outline-primary" onClick={this.onSubmit} style={{width: '100%'}}>
                            Add item
                        </button>
                    </div>
                </div>
            </form>
        );
    }
};