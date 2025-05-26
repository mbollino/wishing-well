import { useState } from 'react'
import ReflectionsForm from '../ReflectionsForm/ReflectionsForm';
import { UserContext } from "../../contexts/UserContext"
import { useContext } from 'react'

const WishletDetail = (props) => {
  const [isReflecting, setIsReflecting] = useState(false)
  const { user } = useContext(UserContext)

  if (user && !props.selected) {
    return (
      <div>
        <p>No Details</p>
      </div>
    )
  }

  if(!props.selected) {
    return null
  }

  const targetDate = props.selected.wishletTargetDate
    ? new Date(props.selected.wishletTargetDate)
    : null;

  const formattedTargetDate = targetDate
    ? `${String(targetDate.getUTCMonth() + 1).padStart(2, '0')}/` +
    `${String(targetDate.getUTCDate()).padStart(2, '0')}/` +
    `${targetDate.getUTCFullYear()}`
    : 'N/A';

  const completedDate = props.selected.reflection?.completedDate
    ? new Date(props.selected.reflection.completedDate)
    : null;

  const formattedCompletedDate = completedDate
    ? `${String(completedDate.getUTCMonth() + 1).padStart(2, '0')}/` +
    `${String(completedDate.getUTCDate()).padStart(2, '0')}/` +
    `${completedDate.getUTCFullYear()}`
    : 'N/A';

  return isReflecting ? (
    <ReflectionsForm
      onSave={(reflectionData) => {
        props.handleSaveReflection(reflectionData)
        setIsReflection(false)
      }}
      onClose={() => setIsReflecting(false)}
    />
  ) : (
    <>
      <h2>{props.selected.wishletTitle}</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li>Description: {props.selected.wishletDescription} </li>
        <li>Category: {props.selected.wishletCategory} </li>
        <li>Completed: {props.selected.wishletIsCompleted ? 'Yes' : 'No'}</li>
        <li>Target Date: {formattedTargetDate || "N/A"}</li>
        {props.selected.reflection && (
          <>
            <li><strong>Reflection:</strong></li>
            <li>Notes:{props.selected.reflection.notes}</li>
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
      {!props.selected.reflection && (
        <button onClick={() => setIsReflection(true)}>
          Add Reflection
        </button>
      )}
      <button onClick={props.handleCloseDetail}>
        Close Wish
      </button>
    </>
  )
}

export default WishletDetail