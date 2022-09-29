import React, { useEffect, useState } from 'react';
import logo from '../../image/logo.png';
import Activities from '../Activities/Activities';
import './Home.css';
const Home = () => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(rest => rest.json())
        .then(data => setActivities(data))
    }, [])
    return (
        <div className='parent-home-container'>
            <div className="activity-container">

                <div className="logo-section">
                <img className='img' src={logo} alt="" />
                <h1>Antor Feetnes Club</h1>
                </div>
               
                <div className='activates grid grid-cols-3'>
                {
                    activities.map(activity => <Activities
                    key={activity.id}
                    activity={activity}
                    ></Activities>)
                }
                </div>
               
            </div>

            <div className="details-container">
                <h1>this is details</h1>
            </div>
        </div>
    );
};

export default Home;