import React from 'react';
import UserCard from "../Component/UserCard";
import MyPosts from "../Component/MyPosts";
import Post from "../Component/Post";

const Profile = () => {
    return (
        <div>
            <UserCard/>
            <MyPosts/>
            <Post message='найс кок'/>
            <Post message='asd'/>
        </div>
    );
};

export default Profile;