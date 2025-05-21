const wishingWell = ({ wishlets }) => {

    if (!wishlets.lenghth) {
        return (
            <div>
                <h1>No wishes yet!</h1>
            </div>
        )
    }
    return (
        <>
            <div>
                <h1>Wishing Well</h1>
                <div>
                    <ul>
                        {props.wishlets.map((wishlet) => (
                            <li key={wishlet.id}>{wishlet.wishletTitle}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default wishingWell