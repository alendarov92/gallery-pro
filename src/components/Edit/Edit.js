import React from 'react'

const Edit = () => {
  return (
    <div className='create-pg'>
    <section id="create-page" className="create">
        <form id="create-form" action="" method="" >
            <fieldset>
                <legend className='legend'>Edit Photo</legend>
                <p className="field">
                    <label htmlFor="title">Title</label>
                    <span className="input">
                        <input type="text" name="title" id="title" placeholder="Title" />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description">Description</label>
                    <span className="input">
                        <textarea
                            name="description"
                            id="description"
                            placeholder="Description"
                            defaultValue={""}
                        />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image">Image</label>
                    <span className="input">
                        <input type="text" name="imageUrl" id="image" placeholder="Image" />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="type">Type</label>
                    <span className="input">
                        <select id="type" name="type">
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
  )
}

export default Edit