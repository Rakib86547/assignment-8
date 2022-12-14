import React from 'react';
import './Activities.css';
const Activities = (props) => {
    const  {handleAddToList, activity} = props;
    const { about, age, name, picture, time } = activity;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl border">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2>{name}</h2>
                    <p>{about.slice(0, 200)}</p>
                    <p>For Age: <strong>{age}</strong></p>
                    <p>Time required: <strong>{time} minuts</strong></p>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={() =>handleAddToList(activity)}>Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activities;