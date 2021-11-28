import React, { useEffect, useState } from "react";
import "./App.css";
import Contacts from "./Contacts";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import CreatePostWindow from "./CreatePostWindow";

function App() {
  let username = "Meir";


  
  const [postData, setPostData] = useState([""]);
  const addPost = (input: string) => {
    setPostData([input, ...postData]);
  };

  const [isNewPostWindowAlive, setWindowState] = useState(false);
  const toggleWindow = () => {
    if (isNewPostWindowAlive && isNewPostInProcess) setGlobalTemp(""); //dispach input from createPostWindow to MessageSenderPlaceholder
    console.log("clicked");
    setWindowState((isNewPostWindowAlive) => !isNewPostWindowAlive);
    if (!isNewPostInProcess) setGlobalTemp(`What's on your mind, ${username}?`);
  };
  // update: A->D && P->P input
  // update: A->D && P->I placeholder

  const [isNewPostInProcess, setNewPostInProcess] = useState(false);
  const newPostInProcess = (b: boolean) => {
    console.log(isNewPostWindowAlive);
    // if (!b && !isNewPostWindowAlive) setGlobalTemp(`What's onmindxxx, ${username}?`);
    // if (b) document.getElementsByClassName("create_post__button")[0].setAttribute('style', 'background-color:#2374E1; color:white; cursor:pointer' );
    // if (!b) document.getElementsByClassName("create_post__button")[0].removeAttribute('style');
    setNewPostInProcess(b);
  };

  const [globalTempNewPost, setGlobalTempNewPost] = useState(
    `What's on your mind, ${username}?`
  );

  const setGlobalTemp = async (input: string) => {
    if (input.replace(/\s/g, "") === "") setGlobalTempNewPost(localTempNewPost);
    else setGlobalTempNewPost(input);
  };

  const [localTempNewPost, setLocalTempNewPost] = useState("");
  const setLocalTemp = (input: string) => {
    setLocalTempNewPost(input);
  };

  
  useEffect(() => {
    if (!isNewPostInProcess && !isNewPostWindowAlive)
      setGlobalTemp(`What's on your mind, ${username}?`);
  });
  return (
    <div className="App">
      <div
        className="opacitySolid"
        onClick={() => {
          document
            .getElementsByClassName("opacitySolid")[0]
            .setAttribute("style", "display:none");
          document.body.style.overflow = "visible";
          toggleWindow();
        }}
      ></div>
      <div className="Header">
        <Header />
      </div>

      <div className="Container">
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="Feed">
          <Feed
            PostData={postData}
            ToggleWindow={toggleWindow}
            WindowState={isNewPostWindowAlive}
            TempNew={globalTempNewPost}
            IsNewPostInProcess={isNewPostInProcess}
          />
          {isNewPostWindowAlive && (
            <div className="create_post_container">
              <CreatePostWindow
                OnCreate={addPost}
                ToggleWindow={toggleWindow}
                SetTemp={setLocalTemp}
                isInProcess={newPostInProcess}
                Temp={localTempNewPost}
                Username={username}
              />
            </div>
          )}
        </div>
        <div className="Contacts">
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
