function PostItem (post) {
    return(`
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-2">
                                    <img class="float-end ms-0 rounded-circle" src=${post.image} height="50pt">
                                </div>
                                <div class="col-8">
                                    <div class="fw-holder">
                                        ${post.username}
                                        <span>
                                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                                        </span>
                                        <span class="text-secondary">
                                            @${post.handler}
                                        </span>
                                        <span class="text-secondary">
                                            -${post.hour} h
                                        </span>
                                    </div>
                                    <div class="">
                                        ${post.comment}
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <div class="position-relative">
                                            <img src=${post.mainimage} width="100%">
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div class="fw-bolder">
                                            ${post.title}
                                        </div>
                                        <div>
                                            ${post.content}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <i class="fa fa-reply" aria-hidden="true"></i>
                                    <span>${post.reply} k</span>
                                </div>
                                <div class="col-3">
                                    <i class="fa fa-retweet" aria-hidden="true"></i>
                                    <span>${post.retweet} k</span>
                                </div>
                                <div class="col-3">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                    <span>${post.heart} k</span>
                                </div>
                                <div class="col-3">
                                    <i class="fa fa-upload" aria-hidden="true"></i>
                                    <span>${post.upload} k</span>
                                </div>
                            </div>
                        </li>
    `)
}
export default PostItem;