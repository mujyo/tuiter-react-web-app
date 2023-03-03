import tuits from "./tuits.js";
import tuitComponent from "./tuit-component.js";
import tabs from "./tabs.js";

function mainContent(){
    return(
    `
                        <div class="position-relative">
                             <div class="row">
                                 <div class="col-9">
                                     <input class="ps-5 form-control rounded-pill" style="width:380pt"  placeholder="Search Tuiter">
                                     <i class="fa fa-search position-absolute wd-search-tuiter" aria-hidden="true"></i>
                                 </div>
                                 <div class="col-1" style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
                                     <i class="fa fa-cog" style="padding-left:40pt;text-align: center;" aria-hidden="true"></i>
                                 </div>
                             </div>

                         </div>
                         ${tabs()}
                         <div class="position-relative">
                             <img src="../../images/starship.jpeg" width="100%">
                             <h1 class="position-absolute bottom-0 left-0 text-white"> SpaceX7s Starship </h1>
                         </div>
                         <ul class="list-group">
                            ${
                                tuits.map(tuit => tuitComponent(tuit))
                             }
                         </ul>
    `
    )
}
export default mainContent;