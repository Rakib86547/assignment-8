
import antor from '../../image/antor.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Details.css';
import { useState } from 'react';
const Details = (props) => {
    const [breaks, setBreaks] = useState(10)
    const {details} = props;
    let time = 0;
    for(const detail of details){
        time = time + detail.time;
    }
   const handleBreakBtn = () => {
       setBreaks(breaks)
       console.log('click', breaks)
   }
    const activeButtonHandle = () => {
        toast("Complete Your Activity")
    }
    return (
        <div>
            <div className="about-me">
                <img src={antor} alt="" />
                <div className="name">
                    <h3>MD. Rakib Khan</h3>
                    <p>Bogra, Bangladesh</p>
                </div>
            </div>

            <div className="body-detai">
                <h3>55kg <br /><small>Weight</small></h3>
                <h3>6.7 <br /><small>Height</small></h3>
                <h3>22yrs <br /><small>age</small></h3>
            </div>

            <div className="break-section">
                <h3>Add a Break</h3>
                <div className="break-btn">
                    <button onClick={(e) =>handleBreakBtn(e.target.value)}>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                </div>
            </div>

            <div className="exercise-details">
                <h5>Exercise Time: {time} minutes</h5>
                <h5>Break Time: {breaks} s</h5>
                <div>
                <button className='activity-btn' onClick={activeButtonHandle}>Activity Complete</button>
                <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
                </div>
                
            </div>
        </div>
    );
};

export default Details;