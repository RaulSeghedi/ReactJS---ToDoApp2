import React, {Component} from 'react';

class TodosListItem extends Component {
    constructor() {
        super();
        this.state = {
            isEditing: false
        };
    }

    onEditClick() {
        this.setState({
            isEditing: true
        })
    }

    onCancelClick(){
        this.setState({
            isEditing: false
        })
    }

    onSaveClick(event){
        event.preventDefault();
        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({isEditing: false});
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </td>
        );
    }

    renderTaskSection(){
        const {task, isCompleted} = this.props;
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        if (this.state.isEditing){
            return(
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref='editInput'/>
                    </form>
                </td>
            );
        }

        return(
            <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>{task}</td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
        );
    }
}

export default TodosListItem;