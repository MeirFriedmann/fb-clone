import "./CreatePostWindow.css";
import React, { useState, Component } from "react";

function CreatePostWindow(props: {
  OnCreate: (_: string) => void;
  ToggleWindow: () => void;
  SetTemp: (_: string) => void;
  isInProcess: (_: boolean) => void;
  Temp: string;
  Username: string;
}) {
  //   const [input, setInput] = useState("");
  // if (input!==''||props.TempNew!==''){
  //     props.isInProcess(true)
  // }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.OnCreate(props.Temp);
    // setInput("");
    document
      .getElementsByClassName("opacitySolid")[0]
      .setAttribute("style", "display:none");
    // document.getElementsByClassName("create_post_container")[0].setAttribute('style', 'display:none')
    document.body.style.overflow = "visible";
    props.SetTemp("");
    props.ToggleWindow();
    props.isInProcess(false);
    // props.SetTemp("What's on your mind, ".concat(props.Username).concat("?"))
  };

  return (
    <div className="create_post">
        <div className="create_post__top">
            <h1>Create Post</h1>
            </div> 
      <form>
        <div className="create_post__input_box">
        <input
          value={
            //   input === "" ?
            props.Temp
            //   : input}
          }
          onChange={(e) => {
            // setInput(e.target.value);
            props.SetTemp(e.target.value);
            e.target.value.replace(/\s/g, "") === ""
              ? props.isInProcess(false)
              : props.isInProcess(true);
          }}
          placeholder={`What's on your mind, ${props.Username}?`}
          autoFocus={true}
        />
        </div>
        {/* <input placeholder = "image URL (Optional)" /> */}
        <button onClick={(e) => handleSubmit(e)} type="submit">
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePostWindow;
