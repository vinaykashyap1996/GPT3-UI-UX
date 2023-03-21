import React from 'react';
import possibility from '../../assets/possibility.png';
import './Possibility.css'
const Possibility = () => {
  return (
    <div className='gpt3__possibilty section__padding'>
      <div className='gpt3__possibilty-image'>
        <img src={possibility} alt='possibility' />
      </div>
      <div className='gpt3__possibilty-container-content'>
        <h4>Request Early Access to Get Started</h4>

        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
