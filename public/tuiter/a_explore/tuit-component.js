function tuitComponent(tuit) {
    return(`
                                                                <li class="list-group-item">
                                                                         <div class="row">
                                                                             <div class="col-8">
                                                                                 <div class="text-secondary">
                                                                                     ${tuit.title}
                                                                                 </div>
                                                                                 <div class="fw-bolder">
                                                                                     ${tuit.topic}
                                                                                     <span>
                                                                                         <i class="fa fa-check-circle" aria-hidden="true"></i>
                                                                                     </span>
                                                                                     <span class="text-secondary"> - 2h</span>
                                                                                 </div>
                                                                                 <div class="fw-bolder">
                                                                                     ${tuit.tuit}
                                                                                 </div>

                                                                             </div>
                                                                             <div class="col-4">
                                                                                 <img class="float-end" src="../../images/React-icon.png" height="100pt">
                                                                             </div>
                                                                         </div>
                                                                    </li>
    `)
}
export default tuitComponent;