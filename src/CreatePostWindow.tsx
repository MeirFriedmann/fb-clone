import "./CreatePostWindow.css";
// import React, { useState } from "react";

const CreatePostWindow = (props: {
  onCreate: (_: string) => void;
  toggleWindow: () => void;
  setTemp: (_: string) => void;
  isNewPostBeingComposed: (_: boolean) => void;
  tempNewPost: string;
  username: string;
  onSubmit: () => void;
}) => {

  const isBlank = (s: string) => {
    if (s.replace(/\s/g, "") === "") {
      return true;
    }
    return false;
  };

  const handleExit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.toggleWindow();
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isBlank(props.tempNewPost)) return;

    // props.onCreate(props.tempNewPost);
    // props.setTemp("");
    // props.isNewPostBeingComposed(false);
    // props.toggleWindow();
    props.onSubmit();
  };

  const button_styles = {
    backgroundColor: `${!isBlank(props.tempNewPost) ? "#2374E1" : "#505151"}`,
    cursor: `${!isBlank(props.tempNewPost) ? "pointer" : "not-allowed"}`,
    color: `${!isBlank(props.tempNewPost) ? "white" : "#8A8D91"}`,
  };
  const overlay_styles = {
    zIndex: parseInt(`${!isBlank(props.tempNewPost) ? "1" : "-1"}`),
  };

  return (
    <div className="create_post">
      <div className="create_post__top">
        <span>Create post</span>
        <button className="exit_window" onClick={(e) => handleExit(e)}>
          <div className="exit_window_symbol"></div>
        </button>
        <button
          className="exit_window_overlay"
          onClick={(e) => handleExit(e)}
        ></button>
      </div>
      <form>
        <div className="create_post__input_box">
          <input
            value={
              //   input === "" ?
              props.tempNewPost
              //   : input}
            }
            onChange={(e) => {
              // setInput(e.target.value);
              //   setInput(e.target.value);
              props.setTemp(e.target.value);
              e.target.value.replace(/\s/g, "") === ""
                ? props.isNewPostBeingComposed(false)
                : props.isNewPostBeingComposed(true);
            }}
            placeholder={`What's on your mind, ${props.username}?`}
            autoFocus={true}
          />
        </div>
        {/* <input placeholder = "image URL (Optional)" /> */}
        <div className="create_post__button">
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            style={button_styles}
          >
            Post
          </button>
          <button
            className="button_overlay"
            onClick={(e) => handleSubmit(e)}
            type="submit"
            style={overlay_styles}
          ></button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostWindow;
