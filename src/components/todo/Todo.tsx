import * as React from 'react';
import {useState, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { EMPTY_STRING, EMPTY_STRING_ARRAY, TODO_NAME_VALIDATION_PATTERN } from '../../utils';

/**
 * The component with todo form and todo list
 * @visibleName Todo component
 */
export default function Todo() {
    let [task, setTask] = useState(EMPTY_STRING);
    let [items, setItems] = useState(EMPTY_STRING_ARRAY);

    /**
     * Function to update the value of task state 
     * @param even The event of changement
     */
    const onChange = (event: any) => {
        setTask(event.target.value);
    };

    /**
     * Function to add an item in todolist
     * @param event 
     */
    const onSubmit = (event: any) => {
        event.preventDefault();
        if (TODO_NAME_VALIDATION_PATTERN.test(task)) {
            setItems([...items, task.trim()]);
            setTask(EMPTY_STRING);
        }
    };

    /**
     * function to delete an item of todolist
     * @param id The id of item must be deleted
     */
    const onDelete = (id: number) => {
        const tasks = [...items];
        tasks.splice(id, 1);
        setItems(tasks);
    };

    /**
     * Function to write the task list
     */
    const renderTodo = () => {
        return items.map((item, index) => {
            return (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h4>{item}
                            <i
                                className="fas fa-times"
                                style={{ cursor: 'pointer', color: 'red', float: 'right' }}
                                onClick={() => { onDelete(index) }}
                            ></i>
                        </h4>
                    </div>
                </div>
            )
        });
    };

    /**
     * Funtion to select the valid className if input is valid or not
     * @param validClassName The className if input value is valid
     * @param invalidClassName The className if input value is invalid
     */
    const getValidationClassName = (validClassName: string, invalidClassName: string) => {
        let resultClassName: string;
        if (TODO_NAME_VALIDATION_PATTERN.test(task)) {
            resultClassName = validClassName;
        } else {
            resultClassName = invalidClassName;
        }
        return resultClassName;
    }

    return (
        <Fragment>
            <div className='card my-3'>
                <div className="card-header">
                    Todo List
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label
                                htmlFor="task"
                                className={task.length > 0 ? getValidationClassName('text-success', 'text-danger') : ''}
                            >Task</label>
                            <input
                                type="text"
                                placeholder="Task to add"
                                className={`form-control form-control-lg ${task.length > 0 ? getValidationClassName('is-valid', 'is-invalid') : ''}`}
                                name='task'
                                onChange={onChange}
                                value={task}
                            />
                        </div>
                        <button className="btn btn-primary btn-block">Add</button>
                    </form>
                </div>
            </div>
            {renderTodo()}
        </Fragment>
    );
}
