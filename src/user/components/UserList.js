import React from 'react';
import './UsersList.css';
import Card from '../../shared/components/UIElements/Card';
import UserItems from './UserItem';

const UserList = props =>{
    if(props.items.length === 0){
        return (
            <div className='Center'>
                <Card>
                <h2>No users found</h2>
                </Card>
            </div>
        );
    }

    return(
        <ul className="users-list">
            {props.items.map(user => (
                <UserItems key={user.key} id={user.id} image={user.image} name={user.name} placeCount={user.places}/>
            ))}
        </ul>
    );
};

export default UserList;