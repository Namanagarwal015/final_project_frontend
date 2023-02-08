import React from 'react';
import '../styles/card.css';
// import { Link } from 'react-router-dom';
// import one from '../assets/one.png';

const Card = ({ title, img, rating, id }) => {
  return (
    <div className='card'>
      {/* <Link to={`/${id}`}>
      <img className='moviePicture' src={img} alt={`${title} poster`} />
      </Link> */}
      
      <h2 className='movieTitle'></h2>
      <h3 className='movieRating'>Average Rating: 1</h3>
     
    </div>
  )
}

export default Card;