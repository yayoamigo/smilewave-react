import "./post.css"
import { MoreVert } from "@mui/icons-material"

export default function Post(){
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/self.png" alt="" />
                        <span className="postUsername">yayo zambrano</span>
                        <span className="postDate"> 1 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Gente tamo en Japon</span>
                    <img className="postImg" src="assets/post.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like.png" alt="" />
                        <img className="likeIcon" src="assets/heart.png" alt="" />
                        <span className="postLikeCounter">2 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">5 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}