import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { collection, where, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

const MyPhotos = () => {

    const { currentUser } = useContext(AuthContext);
    const [photo, setPhoto] = useState([]);

    const ownerId = currentUser.uid;

    const photosCollectionRef = query(collection(db, "photo"), where('ownerId', "==", ownerId));

    useEffect(() => {
        const getPhotos = async () => {
            const data = await getDocs(photosCollectionRef);
            setPhoto(data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            })));
        }
        getPhotos();
    }, []);

    return (
        <div className='create'>
            <Link className='create-btn-link' to={'/create'}>
                <h1 className='create-btn'>Create +</h1>
            </Link>
            <div>
                <div className='my-photos'>
                    {photo.map(currPhoto =>
                        <Link to={`/currPhoto/${currPhoto.id}`}>
                            <img className='hero-img' src={currPhoto.imgurl} alt="" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyPhotos;