import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { collection, where, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';
import { motion } from 'framer-motion';

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
            <div className='create-btn-link'>
                <Link className='link-btn'  to={'/create'}>
                    <div className='create-btn'>
                        <span>+</span>
                    </div>
                </Link>
            </div>
            <div className='myPhoto-container'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className='my-photos'>
                    {photo.map(currPhoto =>
                        <Link to={`/currPhoto/${currPhoto.id}`}>
                            <motion.img whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 },
                            }} className='my-photos-img' src={currPhoto.imgurl} alt="" />
                        </Link>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default MyPhotos;