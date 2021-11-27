import React, { useState } from "react";
import "./Feed.css";
import Post from "./Post"
import Posts from "./Posts"
import MessageSender from "./MessageSender";



const Feed = (props: {
    PostData: string[],
    ToggleWindow: () => void,
    WindowState: boolean,
    TempNew: string,
    IsNewPostInProcess: boolean
}
) => {
    const [postData, setPostData] = useState([""]);
    const addPost = (input: string) => {
        setPostData([input, ...postData]);

    }

    const username: string = "Meir";
    return (
        <div className="feed">
            {/* <div onClick={(e: any) => { console.log("clicked") }}></div> */}
            <MessageSender
                OnAdd={addPost}
                ToggleWindow={props.ToggleWindow}
                WindowState={props.WindowState}
                TempNew={props.TempNew}
                IsNewPostInProcess = {props.IsNewPostInProcess}
                />
            {props.PostData.map((post: any) => (<>{post? <h2>{username}</h2>: <h1></h1> } <h1>{post}</h1></>))
            }
        </div>
    )

}


export default Feed