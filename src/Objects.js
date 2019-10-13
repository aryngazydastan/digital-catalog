import React, { Component } from 'react';
import './App.css';


class Orders extends Component {

    constructor(props) {
      super(props);


      this.state = {
        rooms: [], 

      }

    }

    componentDidMount() {
        
    fetch('http://167.71.44.231:1010/api/v1/buildingModule/rooms/', { method: 'get', // or ‘PUT’
    body: JSON.stringify(), // data can be `string` or {object}!
    headers:{ 'Token': '18c04b30d60835d95b8a21be79d9c423edfab39a', 'Content-Type': 'application/json' } })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    }

       render() {
        
        return (
            <div>{this.state.rooms.map(room => 
            <div key={room.id}>
                <h1>{room.name}</h1>
            </div>)}
            </div>); 
    }
}

export default Orders
