import { useState } from 'react';
import ReflectionsForm from '../ReflectionsForm/ReflectionsForm';

const WishletForm = (props) => {
    const initialState = {
        wishletTitle: '',
        wishletDescription: '',
        wishletCategory: '',
        wishletIsCompleted: false,
        wishletTargetDate: '',
    };

    const [formData, setFormData] = useState(
        props.selected ? props.selected : initialState
    );

    const [showReflectionsForm, setShowReflectionsForm] = useState(false);

    const handleChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (props.selected && formData.wishletIsCompleted) {
            setShowReflectionsForm(true);
        } else if (props.selected) {
            props.handleUpdateWishlet(formData, props.selected._id);
        } else {
            props.handleAddWishlet(formData);
        }
    };

    const handleSaveReflection = (reflection) => {
        const dataWithReflection = { ...formData, reflection };
        props.handleUpdateWishlet(dataWithReflection, props.selected._id);
    };

    return (
        <div className="wishlet-form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="wishletTitle">Title</label>
                <input
                    id="wishletTitle"
                    type="text"
                    name="wishletTitle"
                    value={formData.wishletTitle}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="wishletDescription">Description</label>
                <textarea
                    id="wishletDescription"
                    type="text"
                    name="wishletDescription"
                    value={formData.wishletDescription}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="wishletCategory">Category</label>
                <select
                    id="wishletCategory"
                    name="wishletCategory"
                    value={formData.wishletCategory}
                    onChange={handleChange}
                    required
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
                <label htmlFor="wishletIsCompleted">Wish Completed?</label>
                <input
                    id="wishletIsCompleted"
                    type="checkbox"
                    name="wishletIsCompleted"
                    checked={formData.wishletIsCompleted}
                    onChange={(evt) =>
                        setFormData({
                            ...formData,
                            wishletIsCompleted: evt.target.checked,
                        })
                    }
                />
                <label htmlFor="wishletTargetDate">Target Date</label>
                <input
                    id="wishletTargetDate"
                    type="date"
                    name="wishletTargetDate"
                    value={formData.wishletTargetDate}
                    onChange={handleChange}
                />
                <button type="submit">
                    {props.selected ? 'Update Wish' : 'Add Wish'}
                </button>
            </form>
            {showReflectionsForm && (
                <ReflectionsForm
                    onSave={handleSaveReflection}
                    onClose={() => setShowReflectionsForm(false)}
                />
            )}
        </div>
    );
};

export default WishletForm;