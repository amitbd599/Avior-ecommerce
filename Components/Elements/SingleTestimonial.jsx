import React from "react";

const SingleTestimonial = ({ item }) => {
  return (
    <div className='singleTestimonial'>
      <div className='wrapper'>
        <div className='d-flex align-items-center'>
          <div className='imgFile'>
            <img src={item.img} alt='' />
          </div>
          <div className='textFile'>
            <h3>{item.name}</h3>
            <p>{item.position}</p>
          </div>
        </div>
        <div className='des'>
          <p>{item.des}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
