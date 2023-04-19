import React from 'react'
<div className="card">
    <img src="..." className="card-img-top" alt="..." />

    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
</div>
function LoadindDataAPI({ getData }) {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        getData.map(el => (
                            <div className='col-lg-3 g-5 col-md-6 col-sm-6 col-12'>
                                <div className="card">
                                    <img src={el.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{el.name}</h5>
                                        <p className="card-text fs-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className='card-text'>{el.updatedAt}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}
function PlaceHolder() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 g-5 col-md-6 col-sm-6 col-12'>
                        <div className="card" aria-hidden="true">
                            <img src="https://via.placeholder.com/640x360" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a class="btn btn-primary disabled placeholder col-6"></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 g-5 col-md-6 col-sm-6 col-12'>
                        <div className="card" aria-hidden="true">
                            <img src="https://via.placeholder.com/640x360" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a class="btn btn-primary disabled placeholder col-6"></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 g-5 col-md-6 col-sm-6 col-12'>
                        <div className="card" aria-hidden="true">
                            <img src="https://via.placeholder.com/640x360" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a class="btn btn-primary disabled placeholder col-6"></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 g-5 col-md-6 col-sm-6 col-12'>
                        <div className="card" aria-hidden="true">
                            <img src="https://via.placeholder.com/640x360" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a class="btn btn-primary disabled placeholder col-6"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
function Checked({ loadingdata, getapi }) {
    return loadingdata ? <PlaceHolder /> : <LoadindDataAPI getData={getapi} />
}
export default Checked