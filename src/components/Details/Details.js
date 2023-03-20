import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';



export const Details = () => {
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
        <div className='details'>
            <div>
                <div className='details-card'>
                    <div className='my-photos'>
                        <img className='my-photo-img' src={photo.imgurl} alt="" />
                    </div>
                    <div>
                        <h1>{photo.title}</h1>
                        <p>{photo.descriptoin}</p>
                        <p>{photo.type}</p>
                    </div>
                </div>
                <div className='card-btn'>
                    <Link className='edit-btn' to={'/edit'}>Edit</Link>
                    <button className='delete-btn'>Delete</button>

                </div>
            </div>
        </div>
    )
}
