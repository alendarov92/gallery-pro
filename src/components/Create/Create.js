import React, { useContext, useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const Create = () => {
    const { currentUser } = useContext(AuthContext);
    
    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputImg, setInputImg] = useState('');
    const [inputType, setInputType] = useState('');

    const ownerId = currentUser.uid;

    const navigate = useNavigate();
    const userRef = collection(db, 'photo');
    const createHeandler = async (e) => {
        e.preventDefault();

        await addDoc(userRef, {
            title: inputTitle,
            description: inputDescription,
            imgurl: inputImg,
            type: inputType,
            ownerId: ownerId,
            completed: false,
        });
        navigate('/');

        // .collection("photo")
        // .orderBy("ownerId", "asc")
    };
    return (
        <div className='create-pg'>
            <section id="create-page" className="create">
                <form id="create-form" action="" method="" onSubmit={createHeandler}>
                    <fieldset>
                        <legend className='legend'>Add new Photo</legend>
                        <p className="field">
                            <label htmlFor="title">Title</label>
                            <span className="input">
                                <input type="text" name="title" id="title" placeholder="Title" onChange={(e) => setInputTitle(e.target.value)} />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="description">Description</label>
                            <span className="input" >
                                <textarea
                                    name="description"
                                    id="description"
                                    placeholder="Description"
                                    defaultValue={""}
                                    onChange={(e) => setInputDescription(e.target.value)}
                                />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="image">Image</label>
                            <span className="input">
                                <input type="text" name="imageUrl" id="image" placeholder="Image" onChange={(e) => setInputImg(e.target.value)} />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="type">Type</label>
                            <span className="input" >
                                <select id="type" name="type" onChange={(e) => setInputType(e.target.value)}>
                                    <option value="...">...</option>
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

export default Create;