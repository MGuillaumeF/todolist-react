import * as React from 'react';

export interface ITodoProps {
}

export default function Todo (props: ITodoProps) {
    let [value, setValue] = React.useState('');
    const onSubmit = (e : any) => {
        e.preventDefault();
        console.log(value);
    };
    const onChange = (e : any) => {
        setValue(e.target.value);
        console.log(value);
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
                    value={value}
                />
            </div>
            <button className="btn btn-primary btn-block">Add</button>
          </form>
      </div>
    </div>
  );
}
