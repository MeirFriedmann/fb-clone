import React, { useEffect, useState } from "react";
import "./MessageSender.css"


function MessageSender(props: {
    ToggleWindow: () => void,
    WindowState: boolean,
    TempNew: string,
    isNewPostBeingComposed: boolean
}) {


    const [text, setText] = useState('');
    useEffect(() => {
        setText(props.TempNew);
      });


    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        props.ToggleWindow();
    }
    return (
        <div className="messageSender">

            <div className="messageSender__top">
                <form>
                    <div
                        className="messageSender__input"
                        onClick={(e) => handleClick(e)}
                    >
                         <div className="messageSender__text">{text}</div> 
                    </div>
                    {/* <input placeholder = "image URL (Optional)" /> */}

                    
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <img src="" alt="1" />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <img src="" alt="2" />
                    <h3>Photo/video</h3>
                </div>

                <div className="messageSender__option">
                    <img src="" alt="3" />
                    <h3>Feeling/activity</h3>
                </div>
            </div>
        </div>

    )

}

export default MessageSender