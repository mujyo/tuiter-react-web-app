import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import "./index.css";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import { deleteTuit } from "../../tuits/home-tuits-reducer";


const TuitItem = (
 {

   homeTweet = {
                  "_id": 234,
                  "topic": "Space",
                  "userName": "SpaceX",
                  "time": "2h",
                  "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
                  "image": "spaceX.jpeg",
                  "liked": true,
                  "replies": 123,
                  "retuits": 432,
                  "likes": 2345,
                  "handle": "@spacex",
                  "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
                }
 }
) => {
 const [isLiked, setIsLiked] = useState(homeTweet.liked);
 const [likesCount, setLikesCount] = useState(homeTweet.likes);
 const like = () => {
     if (isLiked) {
       setIsLiked(false);
       setLikesCount(likesCount - 1);
     } else {
       setIsLiked(true);
       setLikesCount(likesCount + 1);
     }
   };

 const dispatch = useDispatch();

 const deleteTuitHandler = (id) => {
   dispatch(deleteTuitThunk(id));
 }
 return(
  <ul>
  <li className="list-group-item">
   <div className="row">
      <div className="col-2">
        <img width={70} className="float-end rounded-circle" src={`/images/${homeTweet.image}`}/>
     </div>

     <div className="col-10">
       <div>
            <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(homeTweet._id)}></i>
            <span className="fw-bolder">{homeTweet.userName}</span>
            <FontAwesomeIcon className="blue-icon" icon={faCheckCircle}/>
            {homeTweet.handle} - {homeTweet.time}
       </div>
       <div className="mb-3">{homeTweet.tuit}<span className="blue-icon"></span></div>


       <div className="row">
            <div className="col-3">
                 <FontAwesomeIcon icon={faComment} /> {homeTweet.replies}
            </div>

            <div className="col-3">
                 <FontAwesomeIcon icon={faRepeat} /> {homeTweet.retuits}
            </div>

            <div className="col-3">
                 <FontAwesomeIcon
                 onClick={like}
                 icon={faHeart}
                 style={{ color: isLiked ? 'red' : 'inherit' }}
                 />
                 {likesCount}
            </div>

            <div className="col-3">
                 <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </div>

       </div>
     </div>
   </div>
  </li>
  </ul>
 );
};
export default TuitItem;