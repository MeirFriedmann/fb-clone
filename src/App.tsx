import React, { useEffect, useState } from "react";
import "./App.css";
import Contacts from "./Contacts";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import CreatePostWindow from "./CreatePostWindow";

function App() {
  let username = "Meir";

  // const [postsList, setPostsList] = useState([""]);
  // const [isNewPostWindowVisible, setWindowState] = useState(false);
  // const [isNewPostBeingComposed, setIsNewPostBeingComposed] = useState(false);
  // const [globalTempNewPost, setGlobalTempNewPost] = useState(`What's on your mind, ${username}?`);
  // const [localTempNewPost, setLocalTempNewPost] = useState("");

  // const addPostToList = (input: string) => {
  //   setPostsList([input, ...postsList]);
  // };

  // const toggleWindow = () => {
  //   if (isNewPostWindowVisible && isNewPostBeingComposed) 
  //     setGlobalTempNewPost(localTempNewPost); //dispatch 'local' input from createPostWindow to MessageSenderPlaceholder
  //   setWindowState((isNewPostWindowVisible) => !isNewPostWindowVisible);
  //   if (!isNewPostBeingComposed) 
  //     setGlobalTempNewPost(`What's on your mind, ${username}?`);
  // };
  // // update: A->D && P->P input
  // // update: A->D && P->I placeholder

  // const onSubmit = () => {
  //   // if (isBlank(localTempNewPost)) return;
  //   addPostToList(localTempNewPost);
  //   setLocalTempNewPost("");
  //   setIsNewPostBeingComposed(false);
  //   toggleWindow();

  // }

  // // const setGlobalTemp = (input: string) => {
  // //   if (input.replace(/\s/g, "") === "") setGlobalTempNewPost(localTempNewPost);
  // //   else setGlobalTempNewPost(input);
  // // };

  
  // useEffect(() => {
  //   if (!isNewPostBeingComposed && !isNewPostWindowVisible)
  //     setGlobalTempNewPost(`What's on your mind, ${username}?`);
  // },[globalTempNewPost, localTempNewPost]);


  return (
    <div className="App">
    {/* <div className={isNewPostWindowVisible ? "App-no-scroll" : "App"}>
      {isNewPostWindowVisible&&<div
        className="opacity-solid"
        onClick={() => {
          toggleWindow();
        }}
      ></div>} */}
      <Header />

      <div className="Container">
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="Feed">
          <Feed
          username = {username}
            // PostData={postsList}
            // ToggleWindow={toggleWindow}
            // WindowState={isNewPostWindowVisible}
            // TempNew={globalTempNewPost}
            // isNewPostBeingComposed={isNewPostBeingComposed}
          />
          {/* {isNewPostWindowVisible && (
            <div className="create_post_container">
              <CreatePostWindow
                onCreate={addPostToList}
                toggleWindow={toggleWindow}
                setTemp={setLocalTempNewPost}
                isNewPostBeingComposed={setIsNewPostBeingComposed}
                tempNewPost={localTempNewPost}
                username={username}
                onSubmit = {onSubmit}
              />
            </div>
          )} */}
        </div>
        <div className="Contacts">
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
