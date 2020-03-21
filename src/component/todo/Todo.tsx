import * as React from 'react';

const EMPTY_STRING : string = '';
const EMPTY_STRING_ARRAY : Array<string> = [];

export interface ITodoProps {
}

export default function Todo (props: ITodoProps) {
    let [task, setTask] = React.useState(EMPTY_STRING);
    let [items, setItems] = React.useState(EMPTY_STRING_ARRAY);

    const onDelete = (id : number) => {
        let tasks = [...items];
        tasks.splice(id, 1);
        setItems(tasks);
    };
    const onSubmit = (e : any) => {
        e.preventDefault();
        setItems([...items, task]);
        setTask('');
    };
    const onChange = (e : any) => {
        setTask(e.target.value);
    };
    const renderTodo = () => {
        return items.map((item, index) => {
            return (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h4>{item}
                        <i className="fas fa-times"
                        style={{cursor:'pointer', color : 'red', float : 'right'}}
                        onClick={() => {onDelete(index)}}
                        ></i>
                        </h4>
                    </div>
                </div>
            )
        });
    };
  return (
      <React.Fragment>
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
    {renderTodo()}
    </React.Fragment>
  );
}
