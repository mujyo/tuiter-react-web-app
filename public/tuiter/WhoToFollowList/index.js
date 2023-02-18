import whos from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
function WhoToFollowList () {
    return(
          `
                                <ul class="list-group">
                                     <li class="list-group-item fw-holder">
                                         Who to follow
                                     </li>
                                     ${
                                         whos.map(wh => WhoToFollowListItem(wh))
                                       }
                                 </ul>
          `
        )
}
export default WhoToFollowList;