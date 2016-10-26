import reducers from './reducers/index';
import {createStore} from 'redux';
import {editTask, addTask, removeTask, editPriority, toggleOrderTasks} from './actions/index';
import { Component } from 'react';
import React from 'react';
import { render } from "react-dom";

let store = createStore(reducers);


store.dispatch(addTask('Pick Kens Nose', 4));
store.dispatch(addTask('Pick Kens Ear', 3));
store.dispatch(addTask('Pick Kens Eye', 2));
store.dispatch(addTask('Pick Kens Bum', 1));

store.dispatch(toggleOrderTasks());
store.dispatch(toggleOrderTasks());

class Wrapper extends Component {
    render () {
        return (
            <div>
                <AddKensTask />
                <KensTaskWrapper tasks={store.getState().tasks} />
            </div>
        )
    }
}


class AddKensTask extends Component {
    render () {
        return (
            <form onSubmit={this.addTask.bind(this)}>
                <label>
                    Task
                    <input type="text" name="task" onChange={this.setInputValue.bind(this)} />
                </label>
                <label>
                    Priority
                    <input type="number" name="priority" onChange={this.setInputValue.bind(this)} />
                </label>
                <button>Add A Task</button>
            </form>
        )
    }
    setInputValue (evt) {
        this[evt.currentTarget.name] = evt.currentTarget.value;
    }
    addTask (evt) {
        evt.preventDefault();
        if (this.task !== '' && this.priority !== '') {
            store.dispatch(addTask(this.task, this.priority));
            this.resetFormsValue(evt.currentTarget);
        }
    }
    resetFormsValue (elm) {
        elm.reset();
        this.task = '';
        this.priority = '';
    }
}


class KensTaskWrapper extends Component {
    render () {
        return (
            <div>
                <h1>All your tasks!</h1>
                {this.props.tasks.map((task) => (
                    <div key={task.id}>
                       <KensTask  task={task} />
                       <KensPriority task={task} />
                    </div>
                ))}
            </div>
        )
    }
};

class KensTask extends Component {
    render () {
        return (
            <div>
                <input type="text"
                    value={this.props.task.name}
                    onChange={this.editTask.bind(this)} />
            </div>
        )
    }
    editTask (evt) {
        store.dispatch(editTask(evt.currentTarget.value, this.props.task.id));
    }
};

class KensPriority extends Component {
    render () {
        return (
            <div>
                <input type="text" value={this.props.task.priority}
                    onChange={this.editPriority.bind(this)} />
            </div>
        )
    }
    editPriority (evt) {
        store.dispatch(editPriority(evt.currentTarget.value, this.props.task.id));
    }
}

const taskRender = () => {
    render(<Wrapper />,
        document.getElementById('reactTasks')
    );
}

let unsubscribe = store.subscribe(taskRender);
taskRender();
