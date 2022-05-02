
// try this one again when u create actual components? Showing a placeholder.
        <div>
            {this.state.items.map((item, index) => {
            return !this.state.items.length ?
            <h1>Chill out. You have no tasks for today</h1> :
            (
            <div>
                <input key={index} type="checkbox" id={index}></input>
                <label for={index}>{item}</label><br></br>
            </div>
            )
        })}
      </div>





// Assess how many tasks have been completed using:
//const status = !this.state.isTaskComplete ? 'you have completed x tasks' : 'You havent completed any'
// clear all tasks btn