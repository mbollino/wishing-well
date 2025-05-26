const WishingWell = (props) => {
    return (
        <div className="wishing-well-container">
            <h1>Wishing Well</h1>
            <div className="wish-list">
                {!props.wishlets.length ? (
                    <h2>No wishes yet!</h2>
                ) : (
                    <>
                        <p>Your Wishes</p>
                        <ul>
                            {props.wishlets.map((wishlet) => (
                                <li key={wishlet._id} onClick={() => props.handleSelect(wishlet)}>
                                    {wishlet.wishletTitle}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
            <button onClick={props.handleFormView}>
                {props.isFormOpen ? 'Close Form' : 'Make a New Wish'}
            </button>
        </div>
    );
}

export default WishingWell



















