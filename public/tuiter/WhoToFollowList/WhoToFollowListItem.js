function WhoToFollowListItem (who) {
    return(`
    <li class="list-group-item">
                                         <div class="row">
                                             <div class="col-3">
                                                 <img class="float-end ms-0 rounded-circle" src=${who.avatarIcon} height="50pt">
                                             </div>
                                             <div class="col-3">
                                                 <div class="fw-holder">
                                                     ${who.userName}
                                                     <span>
                                                         <i class="fa fa-check-circle" aria-hidden="true"></i>
                                                     </span>
                                                 </div>
                                                 <div class="">
                                                     ${who.handle}
                                                 </div>
                                             </div>
                                             <div class="col-3">
                                             </div>
                                             <div class="col-1">
                                                 <button type="submit" class="btn btn-primary btn-round-left rounded-pill">follow</button>
                                             </div>
                                         </div>
                                     </li>
    `)
}
export default WhoToFollowListItem;