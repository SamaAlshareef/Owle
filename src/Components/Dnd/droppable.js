import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Droppable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    drop = (e) => { 
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        console.log("frp"); 
        e.target.appendChild(document.getElementById(data));
        console.log(data);
    }

    allowDrop = (e) =>{
        e.preventDefault();
    }

    render() { 
        return ( 
            <div id = {this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
                
                {this.props.children}
            </div>
         );
    }
}
 
Droppable.prototypes = {
    id : PropTypes.string,
    children : PropTypes.node ,
    style : PropTypes.object
}

export default Droppable;