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
            <li>Title: {props.selected.title} </li>
            <li>Description: {props.selected.description} </li>
            <li>Category: {props.selected.category} </li>
            <li>IsCompleted: {props.selected.iscompleted} </li>
            <li>TargetDate: {props.selected.targetdate} </li>
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