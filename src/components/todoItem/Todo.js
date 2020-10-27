/* eslint-disable no-useless-constructor */
// export default function Todo(props) {

// let {todoItem, xxx, asd} = props;
//     return (
//         <div>
//             {xxx}-{asd}
//             <div>{todoItem.action}</div>
//             <h3>{todoItem.priority.toString()}</h3>
//         </div>
//     )
// }

import React, { Component } from 'react'

export default class Todo extends Component {
    state = {isDone: this.props.todoItem.isDone};

    constructor(props) {
        super(props);
    };

    action = (todoItem) => {
        console.log(todoItem);
        todoItem.isDone = !todoItem.isDone;
        this.setState({isDone: !this.props.todoItem.isDone});
    };

    render() {

        let {todoItem} = this.props;

        return (
            <div>
            {
                todoItem.isDone && (
                    <del>
                        <div>{todoItem.action} - {todoItem.priority.toString()}</div>
                    </del>
                )
            }
            {
                !todoItem.isDone && (
                    <div>{todoItem.action} - {todoItem.priority.toString()}</div>
                )
            }
                <button onClick={() => {return this.action(todoItem)}}>action done</button>
            </div>
        )
    }
}
