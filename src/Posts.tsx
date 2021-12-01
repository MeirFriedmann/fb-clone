import Post from './Post';

const Posts = (props: {username: string, message: string}) => {

    const posts: string[] = [ "start" ];
    posts.push(props.message);
    return <div>
        
        { posts.map((post: any) => (<h1> { post } </h1> ))
         }
        <h1>I'm Posts</h1>
    </div>
}

export default Posts;