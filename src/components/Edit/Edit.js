import React, { useEffect, useState } from 'react'
import { doc, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const [currentPhoto, setCurrentPhoto] = useState({});
    const photosCollectionRef = doc(db, "photo", id);
    const navigate = useNavigate()

    useEffect(() => {
        onSnapshot(photosCollectionRef, (doc) => {
            setCurrentPhoto(doc.data())
        });
    }, []);

    const edtitHeandler = (e) => {
        e.preventDefault()
        const photoData = Object.fromEntries(new FormData(e.target))
        
        updateDoc(photosCollectionRef, photoData)
        .then(photosCollectionRef => {
            navigate(`/currPhoto/${id}`)
        });
    };
    return (
        <div className='create-pg'>
            <section id="create-page" className="create">
                <form id="create-form" action="" method="" onSubmit={edtitHeandler}>
                    <fieldset>
                        <legend className='legend'>Edit Photo</legend>
                        <p className="field">
                            <label htmlFor="title">Title</label>
                            <span className="input">
                                <input type="text" name="title" id="title" placeholder="Title" defaultValue={currentPhoto.title} />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="description">Description</label>
                            <span className="input">
                                <textarea
                                    name="description"
                                    id="description"
                                    placeholder="Description"
                                    defaultValue={currentPhoto.description}
                                />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="image">Image</label>
                            <span className="input">
                                <input type="text" name="imgurl" id="image" placeholder="Image" defaultValue={currentPhoto.imgurl} />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="type">Type</label>
                            <span className="input">
                                <select id="type" name="type" defaultValue={currentPhoto.type}>
                                    <option value="Nature">Nature</option>
                                    <option value="Automobile">Automobile</option>
                                    <option value="Animals">Animals</option>

                                </select>
                            </span>
                        </p>
                        <input
                            className="button-submit"
                            type="submit"
                            defaultValue="Add Book"
                        />
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default Edit;