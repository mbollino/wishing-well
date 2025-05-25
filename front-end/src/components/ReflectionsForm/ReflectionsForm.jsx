import { useState } from 'react';

const ReflectionsForm = ({ onSave, onClose }) => {
    const [notes, setNotes] = useState('');
    const [completedDate, setCompletedDate] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSave({
            notes,
            completedDate
        });
        onClose();
    };

    return (
        <div className="reflections-form-container">
            <h2>Reflection</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="notes">Notes</label>
                <textarea
                    id="notes"
                    name="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    required
                />
                <label htmlFor="completedDate">Completed Date</label>
                <input
                    id="completedDate"
                    type="date"
                    name="completedDate"
                    value={completedDate}
                    onChange={(e) => setCompletedDate(e.target.value)}
                />
                <button type="submit">Save Reflection</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default ReflectionsForm;