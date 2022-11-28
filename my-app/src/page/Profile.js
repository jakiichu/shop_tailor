import React from 'react';
import UserCard from "../Component/profile/UserCard";
import MyPosts from "../Component/profile/MyPosts";
import Post from "../Component/profile/Post";







const Profile = (props) => {


    let postElemets = props.state.posts.map(p => <Post key={p.id} message={p.message} id={p.id}/>)
    return (
        <div>
            <UserCard/>
            <MyPosts state={props.state} addPost={props.addPost} updateTextarea={props.updateTextarea}/>
            {postElemets}
        </div>
    );
};

export default Profile;