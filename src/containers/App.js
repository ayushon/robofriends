import React, {Component} from 'react';
import Cardlists from '../components/Cardlists';
import Searchbox from '../components/Searchbox';
import { robots } from '../robots';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {

    
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));   
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
        console.log(event.target.value); 
        
      //  console.log(filteredRobots);
    }


    render() {const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if(this.state.robots.length === 0) {
        return <h1>Loading</h1>
    }else {
        return(
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <Searchbox searchChange ={this.onSearchChange}/>    
            <Scroll>
                <ErrorBoundry>
                 <Cardlists robots = {filteredRobots}/>
                </ErrorBoundry>
                
            </Scroll>
            </div>
        )
    }
       
    }
   
}

export default App;