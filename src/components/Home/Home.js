import React, { useEffect, useState } from 'react';
import logo from '../../image/logo.png';
import Activities from '../Activities/Activities';
import Details from '../Details/Details';
import Questions from '../Questions/Questions';
import './Home.css';
const Home = () => {
    const [activities, setActivities] = useState([])
    const [details, setDetail] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(rest => rest.json())
            .then(data => setActivities(data))
    }, [])

    const handleAddToList = (activities) => {
        // console.log('click', activities)
        setDetail([...details, activities]);
    }

    return (
        <div>
            <div className="parent-home-container">
                <div className="activity-container">

                    <div className="logo-section">
                        <img className='img' src={logo} alt="" />
                        <h1 className='heading'>One-Mind-Activity-Club</h1>
                    </div>

                    <div className='activates grid grid-cols-3'>
                        {
                            activities.map(activity => <Activities
                                key={activity.id}
                                activity={activity}
                                handleAddToList={handleAddToList}
                            ></Activities>)
                        }
                    </div>

                </div>

                <div className="details-container">
                    <Details
                        details={details}
                    ></Details>
                </div>
            </div>
            
            <div className="questions-container">
                <Questions></Questions>
            </div>
        </div>
    );
};

export default Home;