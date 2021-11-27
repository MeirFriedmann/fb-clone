import "./Post.css"

// interface PostData{
//     username : string;
//     message : string;
//     profilePic : string;
//     timestamp : string;
//     image: string
// }

function Post(props: { username: string, message: string }) {
    return <div className="post">
        {/* <div className="post__top">
        </div> */}
        <div className="post__topInfo" font-color="white"> 
            <h3>{props.username}</h3>
            <h3>{ props.message }</h3>
        </div>
    </div>

}


export default Post;