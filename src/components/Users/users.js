import React, { Component } from 'react';
import {users} from '../../data/data';
import User from '../User/user';


export default class Users extends Component {
    render() {
        return (
            <div>
            {
                users.map(user => {
                  return (
                      <User user={user} key={user.id}/>
                  )
                })
              }
            </div>
        )
    }
}
