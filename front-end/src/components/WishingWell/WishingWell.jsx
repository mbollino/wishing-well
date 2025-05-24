const wishingWell = ( props ) => {

    return (
        <>
            <div>
                <h1>Wishing Well</h1>
                <p>{props.userName}'s Wishes</p>
                <div>
                    {!props.wishlets.length ? (
                        <h2>No wishes yet!</h2>
                    ) : (
                        <ul>
                            {props.wishlets.map((wishlet) =>
                                <li key={wishlet._id}
                                    style={{ cursor: 'pointer', color: '#232326' }}
                                    onClick={() => props.handeSelect(wishlet)}
                                >
                                    {wishlet.wishletTitle}
                                </li>
                            )}
                        </ul>
                    )}
                </div>
                <button onClick={props.handleFormView}>
                    {props.isFormOpen ? 'Close Form' : 'Make a New Wishlet'}
                </button>
            </div>
        </>
    )
}

export default wishingWell