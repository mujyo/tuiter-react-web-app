function navigation(){
    return(
      `
        <div class="list-group">
                                 <a href="" class="list-group-item list-group-item-action">
                                     <i class="fab fa-twitter"></i>
                                 </a>
                                 <a href="" class="list-group-item list-group-item-action d-flex align-items-center">
                                     <i class="fas fa-home"></i>
                                     <span class="d-none d-xl-block ps-1">
                                         Home
                                     </span>
                                 </a>
                                 <a href="" class="list-group-item list-group-item-action active d-flex align-items-center">
                                     <i class="fas fa-compass"></i>
                                     <span class="d-none d-xl-block ps-1">
                                         Explore
                                     </span>
                                 </a>
                                 <a href="" class="list-group-item list-group-item-action d-flex align-items-center">
                                     <i class="fas fa-bell"></i>
                                     <span class="d-none d-xl-block ps-1">
                                         Notifications
                                     </span>
                                 </a>
                                 <a href="" class="list-group-item list-group-item-action d-flex align-items-center">
                                     <i class="fas fa-envelope"></i>
                                     <span class="d-none d-xl-block ps-1">
                                         Messages
                                     </span>
                                 </a>
                                 <a href="" class="list-group-item list-group-item-action d-flex align-items-center">
                                     <i class="fas fa-bookmark"></i>
                                     <span class="d-none d-xl-block ps-1">
                                         Bookmarks
                                     </span>
                                 </a>
                                 <a href="" class="list-group-item list-group-item-action d-flex align-items-center">
                                     <i class="fas fa-list"></i>
                                     <span class="d-none d-xl-block ps-1">
                                         Lists
                                     </span>
                                 </a>
                                 <a href="" class="list-group-item list-group-item-action d-flex align-items-center">
                                     <i class="fas fa-user"></i>
                                     <span class="d-none d-xl-block ps-1">
                                         Profile
                                     </span>
                                 </a>
                                 <a href="" class="list-group-item list-group-item-action d-flex align-items-center">
                                     <i class="fas fa-ellipsis-h"></i>
                                     <span class="d-none d-xl-block ps-1">
                                         More
                                     </span>
                                 </a>
                                 <button class="btn btn-primary w-100 mt-1 rounded-pill">
                                    Tweet
                                 </button>
                             </div>
      `
    )
}
export default navigation;