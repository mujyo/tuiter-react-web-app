import exploreItems from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

function PostSummaryList () {
    return(`
        <ul class="list-group">
                                    ${
                                        exploreItems.map(ei => PostSummaryItem(ei))
                                     }
                                 </ul>
    `)
}
export default PostSummaryList;