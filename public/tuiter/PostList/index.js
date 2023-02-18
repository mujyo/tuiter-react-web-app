import posts from "./posts.js";
import PostItem from "./PostItem.js";

function PostList(){
    return(`
            <ul class="list-group">
                                        ${
                                            posts.map(ei => PostItem(ei))
                                         }
                                     </ul>
        `)
}
export default PostList;
