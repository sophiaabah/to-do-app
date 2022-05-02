import React from 'react';
import './App.css';


// 1: if it's used in multiple (more than 3) files
// 2: if it needs its own state
// 3: if it's a shared global component 

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      items: [],
      
    };

    this.onType = this.onType.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.handleTaskCompletion = this.handleTaskCompletion.bind(this);
    this.handleListClear = this.handleListClear.bind(this);
    //this.calculate = this.calculate.bind(this);
  }

  onType(e) {
    this.setState({value: e.target.value})
  }

  onAdd() {
    let currentItem = this.state.value.trim();
    let taskArray = this.state.items; // point to state items []
    let taskObject = {todo: '', isTaskComplete: false };
    // todos.push(currentItem);

    this.setState({
      value: '',
    })

  if (currentItem.length){
    this.setState({
      items: taskArray.concat(Object.assign({}, taskObject, {todo: currentItem})),
    })
    
    console.log(taskArray);
    // delay might have smtn to do with lifecycle things. pls check.
    
  }
}

  handleTaskCompletion(index){
    var copy = [...this.state.items];
    var piece  = copy[index];
    piece.isTaskComplete = !piece.isTaskComplete;
    
    this.setState({
     items: copy,
    })
  }
// !(this.state.items.find(thing => thing.isTaskComplete === true).isTaskComplete)

  handleListClear(){
    this.setState({
      items: [],
    })
  }

  calculate(){
    var someTasks = this.state.items.filter(thing => thing.isTaskComplete === true);
    var statement = someTasks.length ? `You've completed ${someTasks.length} task(s)` : `You haven't completed any tasks`; 
    return statement;
    }
  
  render(){ 
    return (
      <div>
        <h1>My to-do List</h1>
        <input type='text' 
          placeholder='Add an item' 
          value={this.state.value}
          onChange={this.onType}
        />
        <input type='button' value='Add' onClick={this.onAdd}/>
        
        {!this.state.items.length ?
          <h4>Chill out. You have no tasks for today</h4> :
          <div>
            <div>
             {this.state.items.map((item, index) => {
                return (
                  <div>
                    <input key={index} type="checkbox" id={index} onClick={() => this.handleTaskCompletion(index)}></input>
                    <label htmlFor={index}>{item.todo}</label><br></br>
                  </div>
      
                )})}
            </div>

            <div>{this.calculate()}</div>
            <input type='button' value='Clear all tasks' onClick={this.handleListClear}/> 

          </div>
        }


        </div>
        
       

    );
  }
}

export default App;