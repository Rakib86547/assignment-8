import React from 'react';
import './Questions.css';
const Questions = () => {
    return (
        <div>
            <div>
                <div className="question">
                <h3>How Does React Works?</h3>
                <p><strong>Ans: </strong> React.js is generally thought of as the view layer in an application. You might have used library like Handlebars, or jQuery in the past. Just as jQuery manipulates UI elements, or Handlebars templates are inserted onto the page, React components change what the user sees.
                This is literally all there is to React. We want to render this data to the UI, so we pass it to a React component which handles the job of getting the HTML into the page.
                You might be wondering what the big deal is. On the surface, React appears to be another rendering technology. But it’s much more than that. It can make application development incredibly simple. That’s why it’s become so popular.</p>
                </div>

                <div className="question">
                <h3>Difference Between props and State?</h3>
                <p><strong>props:</strong> Props are used to pass data from one component to another</p>

                <p><strong>state:</strong> the state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                </div>


                <div className="question">
                <h3>How Does React Works?</h3>
                <p><strong>useEffect: </strong> the useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component.</p>
                </div>
                

            </div>
        </div>
    );
};

export default Questions;