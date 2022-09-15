import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox' ;
import {robots} from  './robots';
import './App.css';
// NOTE App.js components -> SMART COMPONENTS because they containe STATE which describes whole app
class App extends React.Component{  

    constructor(props) {
        
        super(props)
        this.state = {
            // robots: new URL("https://jsonplaceholder.typicode.com/users"),
            robots: robots,
            searchfield: '',        
        }
    }
    onSearchChange = (event) => {

      const obj = {...this.state}//obj now contains this.state 's pairs initialised
      obj.searchfield = event.target.value//it changes on typing something
      // setState is used to  set any property of state
      this.setState({...obj})
      console.log(event.target.value);
    }

    render(){
      // // console.log(this.state.robots)
      let filteredRobots = this.state.robots.filter(robot =>{
          
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) || robot.email.toLowerCase().includes(this.state.searchfield.toLowerCase());
           
      })
//  console.log(filter_robots)
      return (
          <div className='tc'>
              <div> <h1> Robofriends </h1> </div>
              <SearchBox searchChange = {this.onSearchChange}/>
              <CardList robots = {filteredRobots}/>
          </div>
      );
    }
}

export default App;
// class App extends Component{

//   constructor(props){
//     super(props)
//     state={
//       items:[],
//       DataisLoaded:false,
//       Searchfiled
//     }
//   }
// }