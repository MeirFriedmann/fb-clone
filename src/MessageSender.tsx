import React, { useEffect, useState } from "react";
import "./MessageSender.css"


function MessageSender(props: {
    OnAdd: any,
    ToggleWindow: () => void,
    WindowState: boolean,
    TempNew: string,
    IsNewPostInProcess: boolean
}) {


    const [text, setText] = useState('');
    useEffect(() => {
        setText(props.TempNew);
      });

    // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     props.OnAdd(input);
    //     setInput("");
    // }

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        document.body.style.overflow = "hidden"
        // document.getElementsByClassName("create_post_container")[0].setAttribute('style', 'z-index:1')
        document.getElementsByClassName("opacitySolid")[0].setAttribute('style', 'z-index:0');
        // setTimeout(() => { })
        // document.getElementsByName("postInput")[0].setAttribute('autoFocus', '{true}')

        // document.getElementsByName("postInput")[0].addEventListener('keydown', (e) => {
        //     console.log(e)
        // })

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
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <img src="" alt="3" />
                    <h3>Feeling Activity</h3>
                </div>
            </div>
        </div>

    )

}

export default MessageSender