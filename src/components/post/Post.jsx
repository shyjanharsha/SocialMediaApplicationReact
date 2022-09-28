import { MoreVert } from '@mui/icons-material'
import './post.css'
import {Users } from '../../dummyData'

export default function Post({post}) {
    // console.log('eachSinglePost :>> ', post);
    const user = Users.filter((u) => {
        return u.id === 1
    })

    console.log("filterUser", user)
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter((u)=> u.id === post.userId )[0].profilePicture} alt="" />
                    <span className="postUsername">{Users.filter((u)=> u.id === post.userId )[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="assets/like.png" alt="" className="likeIcon" />
                    <img src="assets/heart.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">{post.like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>

            </div>
        </div>
    </div>
  )
}
