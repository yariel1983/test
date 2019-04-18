import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <div className="container-fluid">
                
                <nav className="navbar navbar-light bg-dark">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        
                    </form>
                </nav>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="http://www.fotolip.com/wp-content/uploads/2016/05/American-Flag-5.jpg" alt="First slide">
                            </img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="http://www.datapromiami.com/wp-content/uploads/2014/07/Venezuela-Flag-Wallpaper.jpg" alt="Second slide">
                            </img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/ExspEUkoliksz67w8/the-cuba-flag-waving_euk2lcvne__F0000.png" alt="Third slide">
                            </img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://i.ytimg.com/vi/LzSAjvDsMUE/maxresdefault.jpg" alt="Third slide">
                            </img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="http://www.flags.net/images/largeflags/HOND0007.GIF" alt="Third slide">
                            </img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            
            
            
        );
    }
}
