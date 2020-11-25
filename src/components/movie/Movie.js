
function Movie(props) {
    return (
        <div className=" ">
            <div className="card m-3">
                <div>
                    <img src={props.img} className="card-img-top" alt="img"/>
                </div>

                <div className="avatar">
                    <img src={"movie.png"} className="card-img-top bg-light" alt="img"/>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
                <div className="bg-light">
                    <ul className="list-group list-group-horizontal bg-light">
                        <li className="col-4 list-group-item">
                            <span className="text-lg">{props.year}</span>
                            <p className="text-muted text-uppercase">
                                <small>Year</small>
                            </p>
                        </li>
                        <li className="col-4 list-group-item">
                            <span className="text-lg">{props.metascore}</span>
                            <p className="text-muted text-uppercase">
                                <small>Metascore</small>
                            </p>
                        </li>
                        <li className="col-4 list-group-item">
                            <span className="text-lg">{props.imdb}</span>
                            <p className="text-muted text-uppercase">
                                <small>Imdb</small>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>









    );

}

export default Movie;