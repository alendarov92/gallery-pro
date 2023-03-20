import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';


// const imgs = [
//   {
//     img: 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
//     categori: 'nature',
//   }, {
//     img: 'https://ichef.bbci.co.uk/images/ic/960x960/p0dldn2l.jpg',
//     categori: 'nature',

//   }, {
//     img: 'https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=812,457,x89,y103,safe&width=1200',
//     categori: 'automobile',

//   }, {
//     img: 'https://cdn.luxe.digital/media/20230105073805/fastest-cars-world-2023-list-ranking-luxe-digital.jpg',
//     categori: 'automobile',

//   }, {
//     img: 'https://cdn.theatlantic.com/thumbor/W544GIT4l3z8SG-FMUoaKpFLaxE=/0x131:2555x1568/1600x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg',
//     categori: 'animals',

//   }, {
//     img: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     categori: 'animals',

//   }
// ]
const Home = () => {
  const [photo, setPhoto] = useState([]);
  const photosCollectionRef = collection(db, "photo");

  useEffect(() => {
    const getPhotos = async () => {
      const data = await getDocs(photosCollectionRef);
      setPhoto(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      })));
    }
    getPhotos();
  },[])
  return (
    <div className='hero'>

      <div className="container">
        <div className="hero-container">
          <div className="hero-heading">
            <div>

            <h1 className='he1'>This is</h1>
            <h1 className='he2'>Youre</h1>
            <h1 className='he3'>View Point</h1>
            </div>
          </div>
        </div>
        <motion.div className='card'>
          <motion.h2>Categories</motion.h2>
          <motion.div>
            
          </motion.div>
        </motion.div>
        
      </div>


      {photo.map(x => <span>
        <Link to={`myPhotos/${doc.id}`}>
          <img className='hero-img' style={{'--i':1}} src={x.imgurl} alt="" />
        </Link>
        </span>)}
    </div>
  )
}

export default Home;

// initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{
  //             duration: 0.8,
  //             delay: 0.5,
  //             ease: [0, 0.71, 0.2, 1.01]
  //           }}
  {/* <span style={{'--i':1}}><Link to={'/#'}><img  src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="" /></Link></span>
  <span style={{'--i':2}}><Link to={'/#'}><img  src="https://ichef.bbci.co.uk/images/ic/960x960/p0dldn2l.jpg" alt="" /></Link></span>
  <span style={{'--i':3}}><Link to={'/#'}><img  src="https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=812,457,x89,y103,safe&width=1200" alt="" /></Link></span>
  <span style={{'--i':4}}><Link to={'/#'}><img  src="https://cdn.luxe.digital/media/20230105073805/fastest-cars-world-2023-list-ranking-luxe-digital.jpg" alt="" /></Link></span>
  <span style={{'--i':5}}><Link to={'/#'}><img  src="https://cdn.theatlantic.com/thumbor/W544GIT4l3z8SG-FMUoaKpFLaxE=/0x131:2555x1568/1600x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg" alt="" /></Link></span>
  <span style={{'--i':6}}><Link to={'/#'}><img  src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></Link></span> */}