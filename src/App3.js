import React, {useState} from 'react';
// with hooks

function App() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

   function onAdd () {
      let currentItem = value.trim();
      let taskArray = items;  // necessary?
      let taskObject = {todo: '', isTaskComplete: false };

      setValue('');

      if (currentItem.length){
        setItems(taskArray.concat(Object.assign({}, taskObject, {todo: currentItem})))
        
        console.log(taskArray);

      }
    }

    function handleTaskCompletion(index){
      var copy = [...items]; // necessary?
      var piece  = copy[index];
      piece.isTaskComplete = !piece.isTaskComplete;
      
      setItems(copy);
    }

    function calculate(){
      var someTasks = items.filter(thing => thing.isTaskComplete === true);
      var statement = someTasks.length ? `You've finished ${someTasks.length} task(s)` : `You haven't finished any tasks`; 
      return statement;
    }

  return (
    <div>
        <h1>My to-do List</h1>
        <input type='text' 
          placeholder='Add an item' 
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <input type='button' value='Add' onClick={onAdd}/>
        
        {!items.length ?
          <h4>Chill out. You have no tasks for today</h4> :
          <div>
            <div>
             {items.map((item, index) => {
                return (
                  <div>
                    <input key={index} type="checkbox" id={index} onClick={() => handleTaskCompletion(index)}></input>
                    <label htmlFor={index}>{item.todo}</label><br></br>
                  </div>
      
                )})}
            </div>

            <div>{calculate()}</div>
            <input type='button' value='Clear all tasks' onClick={() => setItems([])}/> 

          </div>
        }


        </div>
    );
}


export default App;