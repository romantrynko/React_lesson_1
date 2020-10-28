/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

export default class User extends Component {

    // constructor(props) {
    //     super(props);
    // };


    render() {

        let {user} = this.props;

        return (
            <div class='user'>
            {
                !user.status && (
                    <b>
                        <div>{user.id}. {user.name} - {user.status.toString()}</div>
                    </b>
                )
            }
            {
                user.status && (
                    <div>{user.id}. {user.name} - {user.status.toString()}</div>
                )
            }
            </div>
            )
        }
    }