import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const MyPhotos = () => {
  const [photo, setPhoto] = useState([]);
  const photosCollectionRef = collection(db, "photo");
  useEffect(() => {
    const getPhotos = async () => {
      const data = await getDocs(photosCollectionRef);
      getDocs(data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      })));
    }
    getPhotos();
  },[])
  
  return (
    <div className='create'>
      <Link className='create-btn-link' to={'/create'}>
        <h1 className='create-btn'>Create +</h1>
      </Link>
      <div>
        <div className='my-photos'>
          <Link to={'/details'}>
          
          <img className='my-photo-img' src="https://ichef.bbci.co.uk/images/ic/960x960/p0dldn2l.jpg" alt="" />
          </Link>
        </div>
        </div>
    </div>
  )
}

export default MyPhotos;