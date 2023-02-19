//import navigation from "./navigation.js";
import NavigationSidebar from "../NavigationSidebar/index.js";
//import mainContent from "./main-content.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js"
//import followBar from "./follow-bar.js"
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js"
function exploreComponent(){
    $('#wd-explore').append(
        `
         <div class="container pt-1">
             <div class="row">
                 <div class="col-1 col-xl-2">
                    ${NavigationSidebar()}
                 </div>

                 <div class="col-10 col-lg-6">
                     ${PostList()}
                 </div>
                 <div class="col-0 col-md-4 d-none d-lg-block">
                     ${PostSummaryList()}
                 </div>
             </div>

         </div>
        `
    )

    $('#home').addClass('active');

    $('#home').on('click', function (active){
            active.preventDefault();
            $('.active').removeClass('active');
            $(this).addClass('active');
            window.location.href = "../HomeScreen/index.html";
    });
    $('#explore').on('click', function (active){
            active.preventDefault();
            $('.active').removeClass('active');
            $(this).addClass('active');
            window.location.href = "../explore/index.html";
    });
    $('#notification').on('click', function (active){
            active.preventDefault();
            $('.active').removeClass('active');
            $(this).addClass('active');
    });
    $('#message').on('click', function (active){
            active.preventDefault();
            $('.active').removeClass('active');
            $(this).addClass('active');
    });
    $('#bookmarks').on('click', function (active){
            active.preventDefault();
            $('.active').removeClass('active');
            $(this).addClass('active');
    });
    $('#lists').on('click', function (active){
            active.preventDefault();
            $('.active').removeClass('active');
            $(this).addClass('active');
    });
    $('#profile').on('click', function (active){
             active.preventDefault();
             $('.active').removeClass('active');
             $(this).addClass('active');
    });
    $('#more').on('click', function (active){
             active.preventDefault();
             $('.active').removeClass('active');
             $(this).addClass('active');
    });
}
$(exploreComponent);