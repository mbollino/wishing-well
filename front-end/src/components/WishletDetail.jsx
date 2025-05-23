const WishletDetail = (props) => {

    if (!props.selected) {
        return (
            <div>
                <h1>No Details</h1>
            </div>
        )
    }

    return (
        <>
        <h2>Wishlet Details</h2>
        <ul> 
            <li>wishletTitle: {props.selected.wishletTitle} </li>
            <li>wishletDescription: {props.selected.wishletDescription} </li>
            <li>wishletCategory: {props.selected.wishletCategory} </li>
            <li>wishletIsCompleted: {props.selected.wishletIsCompleted} </li>
            <li>wishletTargetDate: {props.selected.wishletTargetDate} </li>
        </ul>
        <button onClick={() => props.handleFormView(props.selected)}> 
        Edit Wishlet    
        </button>
        <button onClick={() => props.handleDeleteWishlet(props.selected._id)}>
        Delete Wishlet
        </button>
        </>
    )
}

export default WishletDetail