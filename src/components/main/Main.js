import "./main.scss"

function Main(){
    return(
        <main>
            <div className="row">
                <div className="card m-3">
                    <div>
                        <img src={"https://picsum.photos/200/300"} className="card-img-top" alt="img"/>
                    </div>

                    <div className="avatar">
                        <img src={"logo192.png"} className="card-img-top bg-light" alt="img"/>
                    </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text.</p>
                        </div>
                    <div className="bg-light">
                        <ul className="list-group list-group-horizontal bg-light">
                            <li className="col-4 list-group-item">
                                <span className="text-lg">1,345</span>
                                <p className="text-muted text-uppercase">
                                    <small>Following</small>
                                </p>
                            </li>
                            <li className="col-4 list-group-item">
                                <span className="text-lg">23,456</span>
                                <p className="text-muted text-uppercase">
                                    <small>Followers</small>
                                </p>
                            </li>
                            <li className="col-4 list-group-item">
                                <span className="text-lg">52,678</span>
                                <p className="text-muted text-uppercase">
                                    <small>Likes</small>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;