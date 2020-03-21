import * as React from 'react';

export interface ITodoProps {
}

export default function Todo (props: ITodoProps) {
    const EMPTY_STRING : string = '';
    const EMPTY_STRING_ARRAY : Array<string> = [];
    let [task, setTask] = React.useState(EMPTY_STRING);
    let [items, setItems] = React.useState(EMPTY_STRING_ARRAY);
    const onSubmit = (e : any) => {
        e.preventDefault();
        setItems([...items, task]);
        console.log(task, items);
    };
    const onChange = (e : any) => {
        setTask(e.target.value);
    };
  return (
    <div className='card my-3'>
      <div className="card-header">
          Todo List
      </div>
      <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="element">Task</label>
                <input 
                    type="text"
                    className='form-control form-control-lg' 
                    name='element'
                    onChange={onChange}
                    value={task}
                />
            </div>
            <button className="btn btn-primary btn-block">Add</button>
          </form>
      </div>
    </div>
  );
}
