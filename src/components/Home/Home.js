
import React, { useEffect, useState } from 'react';
import logo from '../../image/logo.png';
import './Home.css';
const Home = () => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(rest => rest.json())
        .then(data => setActivities(data))
    }, [])
    return (
        <div className='parent-home-conainer'>
            <div className="activity-container">
                <img src={logo} alt="" />
                <h1>Antor Feetnes Club</h1>
                {
                    activities.map(activity => console.log(activity))
                }
            </div>

            <div className="details-container"></div>
        </div>
    );
};

export default Home;