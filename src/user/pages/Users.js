import React from 'react';

import UserList from '../components/UserList';

const Users = () => {
    const USERS =[
        {id:'u1',name:'sami',image:'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',places:4}
    ]


    return <UserList items={USERS}/>
}

export default Users;