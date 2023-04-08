import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { motion } from 'framer-motion';
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const Home = () => {

    const [photo, setPhoto] = useState([]);

    const photosCollectionRef = collection(db, "photo");

    useEffect(() => {

        const getPhotos = async () => {
            const data = await getDocs(photosCollectionRef);

            setPhoto(data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            })))
        }

        getPhotos();

    }, []);


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

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className='card'>
                    
                    <motion.div className='photo-container'>
                        {photo.map(currPhoto =>
                            <Link to={`/currPhoto/${currPhoto.id}`} >
                                <motion.img whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.3 },
                                }} className='hero-img' key={currPhoto.id} src={currPhoto.imgurl} alt="" />
                            </Link>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;