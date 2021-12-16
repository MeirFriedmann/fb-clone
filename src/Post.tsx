import "./Post.css"
import Public from "@material-ui/icons/Public"
import Images from "./Images";


const Post = (props: { username: string, profilePic: string, text: string, images: string[], date: Date }) => {

    let timestamp: string =
        `${props.date.toLocaleString(undefined, { month: 'long', day: 'numeric' })}
    at ${props.date.toLocaleString(undefined, { hour: 'numeric', minute: '2-digit' })}`;
    const now: Date = new Date();

    const timeDiff = now.getTime() - props.date.getTime();

    if (timeDiff < 60000) { // one min recent
        timestamp = `Just now  · `
    }
    else if (timeDiff < 3600000) { // one hour recent
        timestamp = `${Math.floor((timeDiff) / 60000).toString()}m  · `
    }
    else if (timeDiff < 86400000) { // one day recent
        timestamp = `${Math.floor((timeDiff) / 3600000).toString()}h  · `
    }
    else if (timeDiff < 172800000 && props.date.getDay() === (eval((-1 + now.getDay()).toString()))) { // two days recent
        timestamp = `Yesterday at ${props.date.toLocaleString(undefined, { hour: 'numeric', minute: '2-digit' })}  · `;
    }
    else if (timeDiff < 604800000) { // one week recent
        timestamp = `${Math.floor((timeDiff) / 86400000).toString()}d  · `
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const fullTimestamp: string = `${days[props.date.getDay()]}, 
    ${props.date.toLocaleString(undefined, { month: 'long', day: 'numeric' })}, 
    ${props.date.toLocaleString(undefined, { year: 'numeric' })}
    at ${props.date.toLocaleString(undefined, { hour: 'numeric', minute: '2-digit' })}`;

    return <div className="post">
        <div className="post__top">
            <img src={props.profilePic} alt="" />
            <div className="post__topInfo">
                <div className="post__username"> {props.username}</div>
                <div className="post__date">
                    <div className="tooltip_container">
                        {timestamp}
                        <div className="tooltip">{fullTimestamp}</div>
                    </div>
                    <div className="public_icon"><Public /></div>
                </div>
            </div>
        </div>
        <div className="post_text">
            {props.text}
        </div>
        {props.images && 
        <Images
        images={props.images}
        />

        // <div className="post_images"> {props.images.map((image, i) => { return <img src={image} alt="" /> })}
        // </div>
        }
    </div>
}


export default Post;