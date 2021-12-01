import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import Posts from "./Posts";
import MessageSender from "./MessageSender";
import CreatePostWindow from "./CreatePostWindow";



const Feed = (props: {
    username: string;
//   PostData: string[];
//   ToggleWindow: () => void;
//   WindowState: boolean;
//   TempNew: string;
//   isNewPostBeingComposed: boolean;
}) => {


    const [postsList, setPostsList] = useState([""]);
    const [isNewPostWindowVisible, setWindowState] = useState(false);
    const [isNewPostBeingComposed, setIsNewPostBeingComposed] = useState(false);
    const [globalTempNewPost, setGlobalTempNewPost] = useState(`What's on your mind, ${props.username}?`);
    const [localTempNewPost, setLocalTempNewPost] = useState("");
  
    const addPostToList = (input: string) => {
      setPostsList([input, ...postsList]);
    };
  
    const toggleWindow = () => {
      if (isNewPostWindowVisible && isNewPostBeingComposed) 
        setGlobalTempNewPost(localTempNewPost); //dispatch 'local' input from createPostWindow to MessageSenderPlaceholder
      setWindowState((isNewPostWindowVisible) => !isNewPostWindowVisible);
      if (!isNewPostBeingComposed) 
        setGlobalTempNewPost(`What's on your mind, ${props.username}?`);
    };
    // update: A->D && P->P input
    // update: A->D && P->I placeholder
  
    const onSubmit = () => {
      // if (isBlank(localTempNewPost)) return;
      addPostToList(localTempNewPost);
      setLocalTempNewPost("");
      setIsNewPostBeingComposed(false);
      toggleWindow();
  
    }
  
    // const setGlobalTemp = (input: string) => {
    //   if (input.replace(/\s/g, "") === "") setGlobalTempNewPost(localTempNewPost);
    //   else setGlobalTempNewPost(input);
    // };
  
    
    useEffect(() => {
      if (!isNewPostBeingComposed && !isNewPostWindowVisible)
        setGlobalTempNewPost(`What's on your mind, ${props.username}?`);
    },[globalTempNewPost, localTempNewPost]);
  
  


  return (
    <div className={
        // isNewPostWindowVisible ? "feed-no-scroll" : 
        "feed"}>
      {isNewPostWindowVisible&&<div
        className="opacity-solid"
        onClick={() => {
          toggleWindow();
        }}
      ></div>}


      <MessageSender
        ToggleWindow={toggleWindow}
        WindowState={isNewPostWindowVisible}
        TempNew={globalTempNewPost}
        isNewPostBeingComposed={isNewPostBeingComposed}
      />
      {postsList.map((post: any) => (
        <>
          {post ? <h2>{props.username}</h2> : <h1></h1>} <h1>{post}</h1>
        </>
      ))}
    



  
  {
    isNewPostWindowVisible && (
      <div className="create_post_container">
        <CreatePostWindow
          onCreate={addPostToList}
          toggleWindow={toggleWindow}
          setTemp={setLocalTempNewPost}
          isNewPostBeingComposed={setIsNewPostBeingComposed}
          tempNewPost={localTempNewPost}
          username={props.username}
          onSubmit={onSubmit}
        />
      </div>
    )
  }
  </div>
  );
};

export default Feed;
