function highlightActiveLink(active) {
  // Remove the "active" class from all links
  $('.nav-link').removeClass('active');

  // Add the "active" class to the corresponding link
  if (active === 'home') {
    $('#home-link').addClass('active');
  } else if (active === 'explore') {
    $('#explore-link').addClass('active');
  } else if (active === 'profile') {
    $('#profile-link').addClass('active');
  }
}

function NavigationSidebar(){
    return(
      `
                            <div class="list-group">
                                 <a id="twitter-link" href="" class="list-group-item list-group-item-action nav-link">
                                     <i class="fab fa-twitter"></i>
                                 </a>
                                 <a id="home-link" href="../HomeScreen/index.html" class="list-group-item list-group-item-action d-flex align-items-center nav-link">
                                     <i class="fas fa-home"></i>
                                     <span class="d-none d-xl-block ps-1">
                                         Home
                                     </span>
                                 </a>
                                 <a id="explore-link" href="../explore/index.html" class="list-group-item list-group-item-action d-flex align-items-cente　nav-link">
                                     <i class="fas fa-compass"></i>
                                     <span class="d-none d-xl-block ps-1">
                                         Explore
                                     </span>
                                 </a>
                                 <a id="notification-link" href="" class="list-group-item list-group-item-action d-flex align-items-center　nav-link">
                                     <i class="fas fa-bell"></i>
                                     <span class="d-none d-xl-block ps-1">
                                         Notifications
                                     </span>
                                 </a>
                                 <a id="message-link" href="" class="list-group-item list-group-item-action d-flex align-items-center　nav-link">
                                     <i class="fas fa-envelope"></i>
                                     <span class="d-none d-xl-block ps-1">
                                         Messages
                                     </span>
                                 </a>
                                 <a id="bookmarks-link" href="" class="list-group-item list-group-item-action d-flex align-items-center　nav-link">
                                     <i class="fas fa-bookmark"></i>
                                     <span class="d-none d-xl-block ps-1">
                                         Bookmarks
                                     </span>
                                 </a>
                                 <a id="lists-link" href="" class="list-group-item list-group-item-action d-flex align-items-center　nav-link">
                                     <i class="fas fa-list"></i>
                                     <span class="d-none d-xl-block ps-1">
                                         Lists
                                     </span>
                                 </a>
                                 <a id="profile-link" href="" class="list-group-item list-group-item-action d-flex align-items-center　nav-link">
                                     <i class="fas fa-user"></i>
                                     <span class="d-none d-xl-block ps-1">
                                         Profile
                                     </span>
                                 </a>
                                 <a id="more-link" href="" class="list-group-item list-group-item-action d-flex align-items-center　nav-link">
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
export default NavigationSidebar;