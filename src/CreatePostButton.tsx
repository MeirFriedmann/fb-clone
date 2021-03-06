import React, { useEffect, useState } from "react";
import "./css/CreatePostButton.css";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"

function MessageSender(props: {
  toggleWindow: () => void;
  isNewPostWindowVisible: boolean;
  globalTempNewPost: string;
  isNewPostBeingComposed: boolean;
  profilePic: string;
  setIsAddPhotoGlobal: (_:boolean) => void;
}) {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(props.globalTempNewPost);
  },[props.globalTempNewPost]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    props.toggleWindow();
  };

  const handleAddPhotoClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    props.setIsAddPhotoGlobal(true);
    props.toggleWindow();
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top_container">
        <div className="messageSender__top">
          <div className="messageSender__profile_pic"><img src={props.profilePic} alt=""/></div>
          <form>
            <div className="messageSender__input" onClick={(e) => handleClick(e)}>
              {text}
            </div>
          </form>
        </div>
      </div>
      <div className="messageSender__bottom">

        <div className="messageSender__option">
          <button onClick={(e) => handleAddPhotoClick(e)}>
          <div className="messageSender__option_icon"><PhotoLibraryIcon  /></div>
          <h3>Photo/video</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
