import React from 'react';
import './UsersList.css';
import UserItems from './UserItem';

const UserList = props =>{
    if(props.items.lenght === 0){
        return (
            <div className='Center'>
                <h2>No users found</h2>
            </div>
        )
    }

    return(
        <ul>
            {props.items.map(){user => (
                <UserItems/>
            )}}
        </ul>
    )
};

export default UserList;