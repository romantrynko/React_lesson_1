import React, { Component } from 'react';
import {todoList} from '../../data/data';
import Todo from '../todoItem/Todo';

export default class TodoList extends Component {
    render() {
        return (
            <div>
            {
                todoList.map(item => {
                  return (
                      <Todo 
                        todoItem={item} key={item.id}
                        xxx="Roman"
                        asd="Trynko"
                      />
                  )
                })
              }
          
            </div>
        )
    }
}
