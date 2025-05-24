const WishletDetail = (props) => {

    if (!props.selected) {
        return (
            <div>
                <h1>No Details</h1>
            </div>
        )
    }

    const targetDate = props.selected.wishletTargetDate
        ? new Date(props.selected.wishletTargetDate)
        : null;

    const formattedTargetDate = targetDate
        ? `${String(targetDate.getUTCMonth() + 1).padStart(2, '0')}/` +
        `${String(targetDate.getUTCDate()).padStart(2, '0')}/` +
        `${targetDate.getUTCFullYear()}`
        : 'N/A';

    const completedDate = props.selected.completedDate
        ? new Date(props.selected.completedDate)
        : null;

    const formattedCompletedDate = completedDate
        ? `${String(completedDate.getUTCMonth() + 1).padStart(2, '0')}/` +
        `${String(completedDate.getUTCDate()).padStart(2, '0')}/` +
        `${completedDate.getUTCFullYear()}`
        : 'N/A';

    return (
        <>
            <h2>{props.selected.wishletTitle}</h2>
            <ul>
                <li>Description: {props.selected.wishletDescription} </li>
                <li>Category: {props.selected.wishletCategory} </li>
                <li>Completed: {props.selected.wishletIsCompleted ? 'Yes' : 'No'}</li>
                <li>Target Date: {formattedTargetDate || "N/A"}</li>
                {props.selected.reflection && (
                    <>
                        <li><strong>Reflection:</strong></li>
                        <li>Notes:{props.selected.notes}</li>
                        <li>
                            Completed On: {formattedCompletedDate}
                        </li>
                    </>
                )}
            </ul>
            <button onClick={() => props.handleFormView(props.selected)}>
                Edit Wish
            </button>
            <button onClick={() => props.handleDeleteWishlet(props.selected._id)}>
                Delete Wish
            </button>
        </>
    )
}

export default WishletDetail