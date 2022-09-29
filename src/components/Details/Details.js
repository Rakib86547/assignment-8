
import antor from '../../image/antor.jpg';
import './Details.css';
const Details = (props) => {
    const {details} = props;
    let time = 0;
    for(const detail of details){
        time = time + detail.time;
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
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                </div>
            </div>

            <div className="exercise-details">
                <h5>Exercise Time: {time} minuts</h5>
                <h5>Break Time: </h5>
                <button className='activity-btn'>Activity Complete</button>
            </div>
        </div>
    );
};

export default Details;