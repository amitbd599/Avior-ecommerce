import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const SingleProductCard = ({ item }) => {
  return (
    <div className='singleProductCard'>
      <div className='wrapper drop-shadow-xl'>
        <div className='imgFile'>
          <img className='img-fluid' src={item.img} alt='' />
        </div>
        <div className='textFile'>
          <div>
            <Link href={"/"} className='title'>
              {item.name}
            </Link>
            <h4>${item.price}.00</h4>
          </div>
          <div className='review '>
            <span>
              <FaStar />
            </span>
            <span className='mt--5 ml--6'>{`5.0 (${item.review} Reviews)`}</span>
          </div>
          <div className='mt--12 mb--8 d-flex justify-content-around'>
            <Link href={"/"}>
              <button className='cartBtn'>Add To Cart</button>
            </Link>
            <Link href={"/"}>
              <button className='cartBtn'>Add To Wishlist</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
