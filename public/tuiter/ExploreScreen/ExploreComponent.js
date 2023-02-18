import PostSummaryList from "../PostSummaryList/index.js";

function ExploreComponent(){
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
                         <ul class="nav nav-tabs mt-1 mb-1">
                                                          <li class="nav-item">
                                                              <a class="nav-link active" href="#">
                                                                  For You
                                                              </a>
                                                          </li>
                                                          <li class="nav-item">
                                                              <a class="nav-link" href="#">
                                                                  Trending
                                                              </a>
                                                          </li>
                                                          <li class="nav-item">
                                                              <a class="nav-link" href="#">
                                                                  News
                                                              </a>
                                                          </li>
                                                          <li class="nav-item">
                                                              <a class="nav-link" href="#">
                                                                  Sports
                                                              </a>
                                                          </li>
                                                          <li class="nav-item">
                                                              <a class="nav-link" href="#">
                                                                  Entertainment
                                                              </a>
                                                          </li>
                         </ul>
                         <div class="position-relative">
                             <img src="../../images/starship.jpeg" width="100%">
                             <h1 class="position-absolute bottom-0 left-0 text-white"> SpaceX7s Starship </h1>
                         </div>
                         <ul class="list-group">
                            ${PostSummaryList()}
                         </ul>
    `
    )
}
export default ExploreComponent;
