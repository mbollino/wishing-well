const WishingWell = (props) => {

    return (
        <>
            <div>
                <h1>Wishing Well</h1>
                <div>
                    {!props.wishlets.length ? (
                        <h2>No wishes yet!</h2>
                    ) : (
                        <>
                            <p>Your Wishes</p>
                            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                {props.wishlets.map((wishlet) =>
                                    <li
                                        key={wishlet._id}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => props.handleSelect(wishlet)}
                                    >
                                        {wishlet.wishletTitle}
                                    </li>
                                )}
                            </ul>
                        </>
                    )}
                </div>
                <button onClick={props.handleFormView}>
                    {props.isFormOpen ? 'Close Form' : 'Make a New Wish'}
                </button>
            </div>
        </>
    )
}

export default WishingWell