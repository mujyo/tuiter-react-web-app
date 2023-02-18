//import navigation from "./navigation.js";
import NavigationSidebar from "../NavigationSidebar/index.js";
//import mainContent from "./main-content.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js"
//import followBar from "./follow-bar.js"
import WhoToFollowList from "../WhoToFollowList/index.js";
//import PostSummaryList from "../PostSummaryList/index.js";

function exploreComponent(){
    $('#wd-explore').append(
        `
         <div class="container pt-1">
             <div class="row">
                 <div class="col-1 col-xl-2">
                    ${NavigationSidebar()}
                 </div>

                 <div class="col-10 col-lg-6">
                     ${ExploreComponent()}

                 </div>
                 <div class="col-0 col-md-4 d-none d-lg-block">
                     ${WhoToFollowList()}
                 </div>
             </div>

         </div>
        `
    )
}
$(exploreComponent);