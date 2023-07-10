import React from "react";

export default function HeroCarousel(){
    return(
        <div className="carousel slide carousel-dark carousel-fade" data-bs-ride="carousel" data-bs-interval="5000" id="carousel-1" style={{height: "784px"}} data-bs-spy="scroll" data-bs-target="#navcol-3">
            <div className="carousel-inner h-100">
                <div className="carousel-item active h-100"><img className="w-100 d-block position-absolute h-100 fit-cover" src="assets/img/heroFood.png" alt="Slide Image" style={{zIndex: "-1"}} />
                    <div className="container d-flex flex-column justify-content-center h-100">
                        <div className="row gx-2 d-xl-flex align-items-xl-start" style={{width: "1013px"}}>
                            <div className="col-md-6 col-xl-4 offset-md-2 flex-shrink-1" style={{width: "364.656px",  textAlign: "left"}}>
                                <div style={{maxWidth: "350px"}}>
                                    <h1 className="text-uppercase fw-bold">a small byte to enjoy minutes</h1>
                                    <p className="my-3" style={{fontSize: "20px"}}>B2M provides a efficient way of spending you simple moments in happy with low calorie chats&nbsp;</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Dine Now</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Menu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item h-100"><img className="w-100 d-block position-absolute h-100 fit-cover" src="assets/img/heroFranchise.png" alt="Slide Image" style={{zIndex: -1}} />
                    <div className="container d-flex flex-column justify-content-center h-100">
                        <div className="row gx-2 d-xl-flex align-items-xl-start" style={{width: "1013px"}}>
                            <div className="col-md-6 col-xl-4 offset-md-2 flex-shrink-1" style={{width: "364.656px", textAlign: "left"}}>
                                <div style={{maxWidth: "350px"}}>
                                    <h1 className="text-uppercase fw-bold">Want to be a part ?</h1>
                                    <p className="my-3" style={{fontSize: "20px"}}>We are in the track of visioning to be a largest fast-food chain of restaurant. Starts with just 1.5L</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Own</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Success</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item h-100"><img className="w-100 d-block position-absolute h-100 fit-cover" src="assets/img/heroEvent.png" alt="Slide Image" style={{zIndex: -1}} />
                    <div className="container d-flex flex-column justify-content-center h-100">
                        <div className="row gx-2 d-xl-flex align-items-xl-start" style={{width: "1013px"}}>
                            <div className="col-md-6 col-xl-4 offset-md-2 flex-shrink-1" style={{width: "364.656px",  textAlign: "left"}}>
                                <div style={{maxWidth: "350px"}}>
                                    <h1 className="text-uppercase fw-bold">What's new</h1>
                                    <p className="my-3" style={{fontSize: "20px"}}>Now, we are to provide to a large scale of orders and to assist them in all ways</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Get Assisted</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Prior</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a>
                <a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a>
            </div>
            <div className="carousel-indicators"><button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></button> <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"></button> <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"></button></div>
        </div>
    
    )
};