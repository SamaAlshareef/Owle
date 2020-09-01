import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Draggable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    drag = (e) => { 
        e.preventDefault();
        e.dataTransfer.setData('transfer', e.target.id);
        console.log( e.target.id);
    }

    noAllowDrop = (e) =>{
        e.stopPropagation();
    }

    render() { 
        return (  
            <div id = {this.props.id} draggable='true' onDragStart = {this.drag}  onDragOver = {this.noAllowDrop} style ={this.props.style}>
                
                
                {this.props.children}
            </div>
        );
    }
}
 
Draggable.prototypes = {
    id : PropTypes.string,
    children : PropTypes.node,
    style: PropTypes.object
}

export default Draggable;