import React from 'react'
import { Link } from 'react-router-dom';
export const Details = () => {
    return (
        <div className='details'>

            <div>
                <div className='details-card'>
                    <div className='my-photos'>
                        <img className='my-photo-img' src="https://ichef.bbci.co.uk/images/ic/960x960/p0dldn2l.jpg" alt="" />
                    </div>
                    <div>
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Nemo blanditiis molestias,
                            nisi veniam explicabo deserunt at odit sint quasi rerum architecto reiciendis iste et,
                            quod fuga ab officia voluptatum dolore.</p>
                        <p>category</p>
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
