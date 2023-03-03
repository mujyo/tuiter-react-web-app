import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import "./index.css";

const HomeTweetItem = (
 {
   homeTweet = {
     "userName": "SpaceX",
     "time": "2h",
     "content": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "spaceX.jpeg",
     "mainimage":"news1.jpeg",
     "commentNum":"198k",
     "repeatNum": "143k",
     "likedNum":"98k",
   }
 }
) => {
 return(
  <ul>
  <li className="list-group-item">
   <div className="row">
      <div className="col-2">
        <img width={70} className="float-end rounded-circle" src={`/images/${homeTweet.image}`}/>
     </div>

     <div className="col-10">
       <div> <span className="fw-bolder">{homeTweet.userName}</span> <FontAwesomeIcon className="blue-icon" icon={faCheckCircle}/> @{homeTweet.userName} {homeTweet.time}</div>
       <div className="mb-3">{homeTweet.content}<span className="blue-icon"><a>{homeTweet.link}</a></span></div>
       <div>
            <img className="w-100 rounded mb-3" src={`/images/${homeTweet.mainimage}`}/>
       </div>

       <div className="row">
            <div className="col-3">
                 <FontAwesomeIcon icon={faComment} /> {homeTweet.commentNum}
            </div>

            <div className="col-3">
                 <FontAwesomeIcon icon={faRepeat} /> {homeTweet.repeatNum}
            </div>

            <div className="col-3">
                 <FontAwesomeIcon icon={faHeart} /> {homeTweet.likedNum}
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
export default HomeTweetItem;