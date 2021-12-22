import { useEffect, useState } from "react";
import "./css/Feed.css";
import MessageSender from "./CreatePostButton";
import CreatePostWindow from "./CreatePostWindow";
import Post from "./Post";
import profilePic from "./assets/4043272_avatar_lazybones_sloth_sluggard_icon.png"


const Feed = (props: {
  username: { fName: string, lName: string };
  posts: { docsData: { id: string, images: string[], text: string, date: Date }[] }
}) => {

  type postData = {
    id: string;
    text: string;
    images: string[];
    date: Date
  }

  const [postsList, setPostsList] = useState<postData[]>();
  const [isNewPostWindowVisible, setIsNewPostWindowVisible] = useState(false);
  const [isNewPostBeingComposed, setIsNewPostBeingComposed] = useState(false);
  const [globalTempNewPost, setGlobalTempNewPost] = useState(`What's on your mind, ${props.username.fName}?`);
  const [localTempNewPost, setLocalTempNewPost] = useState("");
  const [newImages, setNewImages] = useState<File[]>([new File([""], "")]);
  const [newImagesPath, setNewImagesPath] = useState(['']);
  const [isAddPhotoGlobal, setIsAddPhotoGlobal] = useState(false);

  useEffect(() => {
    if (!isNewPostBeingComposed && !isNewPostWindowVisible)
      setGlobalTempNewPost(`What's on your mind, ${props.username.fName}?`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalTempNewPost, localTempNewPost]);


  const addPostToPosts = (input: string, images: string[], date: Date) => {
    let newPost: postData = { id: (Math.floor(Math.random() * 100)).toString(), text: input, images: images, date: date }
    if (postsList) {
      setPostsList([newPost, ...postsList]);
    }
    else setPostsList([newPost])
  };


  const toggleWindow = () => {
    if (isNewPostWindowVisible)
      document.body.style.overflow = "auto"
    else
      document.body.style.overflow = "hidden"
    if (isNewPostWindowVisible && isNewPostBeingComposed)
      setGlobalTempNewPost(localTempNewPost); //dispatch 'local' input from CreatePostWindow to MessageSenderPlaceholder
    setIsNewPostWindowVisible((isNewPostWindowVisible) => !isNewPostWindowVisible);
    if (!isNewPostBeingComposed)
      setGlobalTempNewPost(`What's on your mind, ${props.username.fName}?`);
  };


  const onSubmit = () => {
    setIsAddPhotoGlobal(false);
    addPostToPosts(localTempNewPost, newImagesPath, new Date());
    setLocalTempNewPost("");
    setNewImagesPath([''])
    setIsNewPostBeingComposed(false);
    toggleWindow();
  }

  const removeImages = () => {
    setIsAddPhotoGlobal(false);
  }

  return (
    <div className="feed">
      {isNewPostWindowVisible && <div
        className="opacity-solid"
        onClick={toggleWindow}
      ></div>}
      <div className="width-adjust"></div>
      {
        isNewPostWindowVisible && (
          <div className="create_post_container">
            <CreatePostWindow
              toggleWindow={toggleWindow}
              setLocalTempNewPost={setLocalTempNewPost}
              isNewPostBeingComposed={setIsNewPostBeingComposed}
              localTempNewPost={localTempNewPost}
              username={props.username.fName}
              onSubmit={onSubmit}
              newImages={newImages}
              setNewImages={setNewImages}
              newImagesPath={newImagesPath}
              setNewImagesPath={setNewImagesPath}
              isAddPhotoGlobal={isAddPhotoGlobal}
              removeImages={removeImages}
            />
          </div>
        )
      }
      <MessageSender
        toggleWindow={toggleWindow}
        isNewPostWindowVisible={isNewPostWindowVisible}
        globalTempNewPost={globalTempNewPost}
        isNewPostBeingComposed={isNewPostBeingComposed}
        profilePic={profilePic}
        setIsAddPhotoGlobal={setIsAddPhotoGlobal}
      />

      {postsList?.map((post, key) =>
      (
        <Post
          username={props.username.fName + ' ' + props.username.lName}
          profilePic={profilePic}
          text={post.text}
          images={post.images}
          date={post.date}
          key={key}

        />
      ))}

      {props.posts.docsData.sort((p1, p2) => parseInt(p2.date.toString()) - parseInt(p1.date.toString())).map((post: any, key) => (
        <Post
          username={props.username.fName + ' ' + props.username.lName}
          profilePic={profilePic}
          text={post.text}
          images={post.images}
          date={new Date(post.date)}
          key={key}
        />
      ))}
      

    </div>
  );
};

export default Feed;
