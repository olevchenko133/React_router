import React, { Component } from 'react';
import './DogList.css';
import {Link} from 'react-router-dom';


class DogList extends Component {
    render() {
        return (
            <div className="DogList-wrapper">

                <h2 className="h2 text-center mb-4 mt-4">Adorable dogs</h2>
                <div className="container">
                    <div className="row">

                        {this.props.dogs.map(d => (<div className="col-12 col-md-4 text-center" key={d.name}> 

                        <div className=" card ">
                            <img className="DogList-img card-img-top" src={d.src} alt={d.name} />

                            <div className=" card-body ">

                            <h4 className="card-title">
                                <Link className="card-subtitle text-muted" to={`/dogs/${d.name}`}>
                                {d.name}
                                </Link>
                                
                                </h4>
               

                            </div>
                            </div>

                        </div>))}

                    </div>

                </div>
            </div>
        )
    }
}

export default DogList;