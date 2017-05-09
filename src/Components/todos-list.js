import React, {Component} from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';
import _ from 'lodash';


class TodosList extends Component {
    render() {
        const props = _.omit(this.props, 'todos');

        let todoIt;
        if (this.props.todos) {
            todoIt = this.props.todos.map((todo, i) => {
                return (
                    <TodosListItem key={i} {...todo} {...props}/>
                )
            })
        }
        return (
            <table>
                <TodosListHeader/>
                <tbody>{todoIt}</tbody>
            </table>
        );
    }
}

export default TodosList;
