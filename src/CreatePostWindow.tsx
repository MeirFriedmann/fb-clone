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
    props.isInProcess(false);
    props.ToggleWindow();
  };

  //   if (props.Temp.replace(/\s/g, "") !== ""){
  //     document.getElementsByClassName("create_post__button")[0].setAttribute('style', 'background-color:#2374E1; color:white; cursor:pointer' );
  //   }
  const button_styles = {
    backgroundColor: `${props.Temp.replace(/\s/g, "") !== "" ? "#2374E1" : "#505151" }`,
    cursor: `${props.Temp.replace(/\s/g, "") !== "" ? "pointer" : "not-allowed" }`,
    color: `${props.Temp.replace(/\s/g, "") !== "" ? "white" : "#8A8D91"}`,
  }; 
   const overlay_styles = {
    zIndex: parseInt(`${props.Temp.replace(/\s/g, "") !== "" ? "1" : "-1" }`)
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
        <div className="create_post__button">
          <button onClick={(e) => handleSubmit(e)}
           type="submit"
            style={button_styles}
            >
            Post
          </button>
          <button className="button_overlay" 
          onClick={(e) => handleSubmit(e)}
          type="submit"
          style={overlay_styles}
        >

          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePostWindow;
