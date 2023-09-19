import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return <h2>You have to Login</h2>
        return <h1>Welcome {user.username}</h1>
}

export default Profile
