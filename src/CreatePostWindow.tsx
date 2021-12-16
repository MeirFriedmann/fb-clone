import React, { useEffect, useState } from "react";
import "./CreatePostWindow.css";
import { app } from "./firebase/firebase.utils";
import Images from "./Images";

const CreatePostWindow = (props: {
  // addPostToPosts: (_: string) => void;
  toggleWindow: () => void;
  setLocalTempNewPost: (_: string) => void;
  isNewPostBeingComposed: (_: boolean) => void;
  localTempNewPost: string;
  username: string;
  onSubmit: () => void;
  newImages: File[],
  setNewImages: (_: File[]) => void;
  newImagesPath: string[];
  setNewImagesPath: (_: string[]) => void;

}) => {
  const [newImages, setNewImages] = useState<File[]>([new File([""], "")]);



  const uploadPostData = () => {
    if (props.newImages.length == 1) {
      putPostInDB(props.localTempNewPost, ['']);
      return;
    }
    let urls: string[] = []
    for (let i = 1; i < props.newImages.length; i++) {
      const storageRef = app.storage().ref();
      if (props.newImages[i] != null) {
        const pathReference = storageRef.child("images/" + props.newImages[i].name);
        pathReference.put(props.newImages[i]).then(data => {
          data.ref.getDownloadURL().then((url: Promise<string>) => {
            console.log(url);
            urls.push(url.toString());
            return new Promise<string[]>((resolve) => { if (urls.length === props.newImages.length - 1) resolve(urls) })
          }).then(
            (urls) => {
              putPostInDB(props.localTempNewPost, urls);
            }

          );
        });
      }
    }
  };

  const putPostInDB = (postText: string, imagesURL: string[]) => {
    const db = app.firestore();
    db.collection("PostData")
      .add({
        text: postText,
        images: imagesURL,
        date: Date.now()
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        props.setNewImages([...props.newImages, ...e.target.files]);
        const paths = [...e.target.files].map(obj => URL.createObjectURL(obj))
        props.setNewImagesPath(
          [...props.newImagesPath, ...paths]
        );
      }
    }
  };

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
    if (isBlank(props.localTempNewPost)) return;
    uploadPostData();
    props.onSubmit();
  };

  const button_styles = {
    backgroundColor: `${!isBlank(props.localTempNewPost) ? "#2374E1" : "#505151"
      }`,
    cursor: `${!isBlank(props.localTempNewPost) ? "pointer" : "not-allowed"}`,
    color: `${!isBlank(props.localTempNewPost) ? "white" : "#8A8D91"}`,
  };
  const overlay_styles = {
    zIndex: parseInt(`${!isBlank(props.localTempNewPost) ? "1" : "-1"}`),
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
            value={props.localTempNewPost}
            onChange={(e) => {
              props.setLocalTempNewPost(e.target.value);
              isBlank(e.target.value)
                ? props.isNewPostBeingComposed(false)
                : props.isNewPostBeingComposed(true);
            }}
            placeholder={`What's on your mind, ${props.username}?`}
            autoFocus={true}
          />
        </div>
        {props.newImagesPath.length>1 && <div className="create_post__images">
          <Images
            images={props.newImagesPath} />

          {/* <div className="create_post__new_images">
          {props.newImagesPath.map(
            (path) => (path !== '') && <img src={path} alt="" />
          )}
        </div> */}

        </div>
}


        <div className="create_post__buttons">

          <div className="create_post__add_image">
            <label>
              Add Image
              <input
                type="file"
                multiple
                accept="image/x-png,image/gif,image/jpeg"
                onChange={handleChange}
              />
            </label>
          </div>
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
        </div>
      </form>
    </div>
  );
};

export default CreatePostWindow;
