import React, { Component } from 'react';
import './DogList.css';
import {Link} from 'react-router-dom';

class DogDetails extends Component {
    render() {

        let { dog } = this.props;

        return (

            <div className="DogDetails container">
                <div className="DogDetails row">
                    <div className="col-11 col-lg-5 mx-auto mt-5">
                        <div className="DogDetails-card card ">
                            <img className="DogDetails-img card-img-top" src={dog.src} />
<div className="card-body">
<h3 className="card-title">{dog.name}</h3>

        <h4 className="card-subtitle text-muted">{dog.age} years old</h4>


</div>
                      <ul className="list-group list-group-flush">
                          {dog.facts.map((fact, i) => (
                          <li className="list-group-item" key={i}>{fact}</li>
                          ))}
                      </ul> 
                      <div className="card-body">
                         <Link to='/dogs' className="btn btn-info">  Go Back </Link>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DogDetails;