import Link from "next/link";
import React from "react";

const SingleBrand = ({ item }) => {
  return (
    <div className='singleBrand drop-shadow-xl'>
      <div className={`${item.bg} wrapper`}>
        <div className='inner__body'>
          <div>
            <h2>Brand: {item.name}</h2>
            <h4>Assemble: {item.assemble}</h4>
            <p>{item.stock} Stock</p>
            <Link href={"/"}>Vew More</Link>
          </div>
          <div>
            <img className='img-fluid drop-shadow-xl' src={item.img} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBrand;
