
function Movie(props) {
    return (
        <div className=" col-sm-6">
            <div className="card m-3">
                <div>
                    <img src={"https://picsum.photos/200/300"} className="card-img-top" alt="img"/>
                </div>


                <div className="avatar">
                    <img src={"logo192.png"} className="card-img-top bg-light" alt="img"/>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
                <div className="bg-light">
                    <ul className="list-group list-group-horizontal bg-light">
                        <li className="col-4 list-group-item">
                            <span className="text-lg">2006</span>
                            <p className="text-muted text-uppercase">
                                <small>Year</small>
                            </p>
                        </li>
                        <li className="col-4 list-group-item">
                            <span className="text-lg">7,3</span>
                            <p className="text-muted text-uppercase">
                                <small>Metascore</small>
                            </p>
                        </li>
                        <li className="col-4 list-group-item">
                            <span className="text-lg">8,1</span>
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