import { useState } from 'react';

const WishletForm = ({ props }) => {
    const initialState = {
        wishletTitle: '',
        wishletDescription: '',
        wishletCategory: '',
        wishletIsCompleted: false,
        wishletTargetDate: '',
    }

    const [formData, setFormData] = useState(
        props.selected ? props.selected : initialState
    )

    const handleChagne = (evt) => {
        setFormData({ ...formData, [evt.target.wishletDescription]: evt.target.value })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.handleAddWishlet(formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="wishletTitle">Title</label>
                <input
                    id="wishletTitle"
                    type="text"
                    name="wishletTitle"
                    value={formData.wishletTitle}
                    onChange={handleChange}
                />
                <label htmlFor="wishletDescription">Wishlet Description</label>
                <input
                    id="wishletDescription"
                    type="text"
                    name="wishletDescription"
                    value={formData.wishletDescription}
                    onChange={handleChange}
                />
                <label htmlFor="wishletCategory">Wishlet Category</label>
                <select
                    id="wishletCategory"
                    name="wishletCategory"
                    value={formData.wishletCategory}
                    onChange={handleChange}
                >
                    <option value="">Select a category</option>
                    <option value="Travel">Travel</option>
                    <option value="Growth">Growth</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Charity">Charity</option>
                    <option value="Culture">Culture</option>
                    <option value="Education">Education</option>
                    <option value="Family">Family</option>
                    <option value="Career">Career</option>
                    <option value="Personal">Personal</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
                <label htmlFor="wishletIsCompleted">Wishlet Completed?</label>
                <input
                    id="wishletIsCompleted"
                    type="checkbox"
                    name="wishletIsCompleted"
                    checked={formData.wishletIsCompleted}
                    onChange={(evt) => setFormData({ ...formData, wishletIsCompleted: evt.target.checked })}
                />
                <label htmlFor="wishletTargetDate">Target Date</label>
                <input
                    id="wishletTargetDate"
                    type="date"
                    name="wishletTargetDate"
                    value={formData.wishletTargetDate}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default WishletForm;