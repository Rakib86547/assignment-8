import React from 'react';
import './Activities.css';
const Activities = (props) => {
    const { about, age, name, picture, time } = props.activity
    console.log(props)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl border">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{about}</p>
                    <p>{age}</p>
                    <p>{time}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;