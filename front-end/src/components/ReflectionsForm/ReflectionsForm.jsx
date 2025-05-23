import { useState } from 'react';

const ReflectionsForm = ({ props }) => {
    const [notes, setNotes] = useState('')

    const handleSubmit = (evt) => {
        e.preventDefault()
        onSave({
            notes,
            completedDate: newDate(),
        }),
            onClose()
    }

    return (
        <>
            <div>
                <h2>Reflection</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="notes">Notes</label>
                    <textarea
                        id="notes"
                        name="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}>
                    </textarea>
                    <button type="submit">Save Reflection</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </>
    )
}

export default ReflectionsForm