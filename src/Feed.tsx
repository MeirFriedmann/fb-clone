import React, { useEffect, useState } from "react";
import "./Feed.css";
// import Post from "./Post";
import MessageSender from "./MessageSender";
import CreatePostWindow from "./CreatePostWindow";
import Post from "./Post";
import profilePic from "./css assets/4043272_avatar_lazybones_sloth_sluggard_icon.png"
import Images from "./Images";


const Feed = (props: {
  username: {fName:string, lName:string};
  // posts:  {docsData: {date:Date}[]}
  posts:  {docsData: {id:string, images:string[],text:string, date:Date}[]}
}) => {

  type postData = {
    id: string;
    text: string;
    images: string[];
    date: Date
  }
  let initDocsData: postData =
  { id: '', text: '####', images: [''], date: new Date()}

let docs :{docsData: postData[];} =
{ docsData: [initDocsData] }

  const [postsList, setPostsList] = useState<postData[]>();
  // const [NEWpostsList, NEWsetPostsList] = useState(props.posts);
  const [isNewPostWindowVisible, setIsNewPostWindowVisible] = useState(false);
  const [isNewPostBeingComposed, setIsNewPostBeingComposed] = useState(false);
  const [globalTempNewPost, setGlobalTempNewPost] = useState(`What's on your mind, ${props.username.fName}?`);
  const [localTempNewPost, setLocalTempNewPost] = useState("");
  const [newImages, setNewImages] = useState<File[]>([new File([""], "")]);
  const [newImagesPath, setNewImagesPath] = useState(['']);


  const addPostToPosts = (input: string, images: string[], date:Date) => {
    // images.pop()
    let newPost :postData =  {id:(Math.floor(Math.random() * 100)).toString(), text:input,images:images, date:date}
    console.log("added", newPost);
    if (postsList) {
      setPostsList([newPost,...postsList]);
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
  // update: A->D && P->P input
  // update: A->D && P->I placeholder

  const onSubmit = () => {
    addPostToPosts(localTempNewPost, newImagesPath, new Date());
    setLocalTempNewPost("");
    setNewImagesPath([''])
    setIsNewPostBeingComposed(false);
    toggleWindow();
  }

  useEffect(() => {
    if (!isNewPostBeingComposed && !isNewPostWindowVisible)
      setGlobalTempNewPost(`What's on your mind, ${props.username.fName}?`);

  }, [globalTempNewPost, localTempNewPost]);

  // console.log("new images" ,newImagesPath)
  // console.log(posts.docsData[0].text.toString())
// console.log(NEWpostsList)

  return (
    <div className={
      // isNewPostWindowVisible ? "feed-no-scroll" : 
      "feed"}>
      {isNewPostWindowVisible && <div
        className="opacity-solid"
        onClick={() => {
          toggleWindow();
        }}
      ></div>}

        {/* <Images images={newImagesPath}/> */}
      <MessageSender
        toggleWindow={toggleWindow}
        isNewPostWindowVisible={isNewPostWindowVisible}
        globalTempNewPost={globalTempNewPost}
        isNewPostBeingComposed={isNewPostBeingComposed}
        profilePic={profilePic}
      />
      {/* <h1>{  NEWpostsList.docsData.map(post => (new Date(post.date).getHours())+',')}</h1>
      <h1>{  NEWpostsList.docsData.map(post => (post.text))  } </h1> */}

        {postsList?.map(post => 
          
          ( <>
            <Post
             username={props.username.fName+' '+props.username.lName}
             profilePic = {profilePic}
            text={post.text}
            images = {post.images}
            date = {post.date}
            />
          {/* <div className="feed__post_container">{post.date.toLocaleTimeString()}{post.text} <img src= {post.images&&post.images[1]} alt=""/></div>  */}
          </> ))} 
      
      {props.posts.docsData.sort((p1,p2)=>  parseInt(p2.date.toString())-parseInt(p1.date.toString())).map((post: any) => (
        <>
          {/* {post.text !== "" ?  <div className="feed__post_container"> <h1>{new Date( post.date).getDate()}/{new Date( post.date).getUTCMonth()+1} {new Date( post.date).getHours()}:{new Date( post.date).getMinutes()}</h1><h1>{post.text}</h1> <img src= {post.images&&post.images[0]} alt=""/></div> : <h1></h1>} */}
          <Post
             username={props.username.fName+' '+props.username.lName} //change!
             profilePic = {profilePic}
            text={post.text}
            images = {post.images}
            date = { new Date( post.date) }
            />
        </>
      ))}
      {
        isNewPostWindowVisible && (
          <div className="create_post_container">
            <CreatePostWindow
              // addPostToPosts={addPostToPosts}
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
            />
          </div>
        )
      }
      {/* <h1>{a()} dd</h1>
  <img src= {a()} alt="" /> */}
    </div>
  );
};

export default Feed;
