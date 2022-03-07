import React, { createContext, useState, useEffect } from 'react'
import ApiUser from '../services/api/ApiUser';

const initialState:any = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    posts: [],
    subscriptions: [],
    userName: "",
    _id: ""
}

export const UserProfileContext = createContext(initialState)

const UserProfileProvider = ({children}:any) => {

    const [userProfile, setUserProfile] = useState(UserProfileContext); 

    useEffect(() => {
        ApiUser.getUser().then(response => setUserProfile(response.data))
    }, [])

    return (    
        <UserProfileContext.Provider value={userProfile}>      
            {children}
        </UserProfileContext.Provider>
    );
};

export default UserProfileProvider;