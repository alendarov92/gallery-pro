import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { doc, onSnapshot, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';




const Details = () => {
    const { id } = useParams()
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [photoDetails, setPhotoDetails] = useState([]);
    const photosCollectionRef = doc(db, "photo", id);


    
    const deleteHeandler =  () => {
        const confirmation = window.confirm('Are you sure you want to delete this photo?');
        if (confirmation) {     
             deleteDoc(doc(db, 'photo', id))
            navigate('/')
        }
        
    }
    useEffect(() => {
        onSnapshot(photosCollectionRef, (doc) => {
            setPhotoDetails(doc.data())
        });
    }, [])

    return (
        <div className='details'>
            <div>
                <div className='details-card'>
                    <div className='my-photos'>
                        <img className='my-photo-img' src={photoDetails.imgurl} alt="" />
                    </div>
                    <div>
                        <h1>{photoDetails.title}</h1>
                        <p>{photoDetails.description}</p>
                        <p>{photoDetails.type}</p>
                    </div>
                </div>
                 <div className='card-btn'>
                        <Link className='edit-btn' to={`/currPhoto/${id}/edit`}>Edit</Link>
                        <button className='delete-btn' onClick={deleteHeandler}>Delete</button>
                    </div>
                       

            </div>
        </div>
    )
}

export default Details;