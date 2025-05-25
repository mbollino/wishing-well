import { useState } from 'react';
import ReflectionsForm from '../ReflectionsForm/ReflectionsForm';

const WishletDetail = (props) => {
  const [isReflecting, setIsReflecting] = useState(false);

  if (!props.selected) {
    return (
      <div className="wishlet-detail-container">
        <h1>No Details</h1>
      </div>
    );
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
        props.handleSaveReflection(reflectionData);
        setIsReflecting(false);
      }}
      onClose={() => setIsReflecting(false)}
    />
  ) : (
    <div className="wishlet-detail-container">
      <h2>{props.selected.wishletTitle}</h2>
      <ul>
        <li>Description: {props.selected.wishletDescription}</li>
        <li>Category: {props.selected.wishletCategory}</li>
        <li>Completed: {props.selected.wishletIsCompleted ? 'Yes' : 'No'}</li>
        <li>Target Date: {formattedTargetDate || 'N/A'}</li>
        {props.selected.reflection && (
          <>
            <li>
              <strong>Reflection:</strong>
            </li>
            <li>Notes: {props.selected.reflection.notes}</li>
            <li>Completed On: {formattedCompletedDate}</li>
          </>
        )}
      </ul>
      <div className="wishlet-detail-buttons">
        <button className="edit" onClick={() => props.handleFormView(props.selected)}>
          Edit Wish
        </button>
        <button className="delete" onClick={() => props.handleDeleteWishlet(props.selected._id)}>
          Delete Wish
        </button>
        {!props.selected.reflection && (
          <button className="reflection" onClick={() => setIsReflecting(true)}>
            Add Reflection
          </button>
        )}
        <button className="close" onClick={props.handleCloseDetail}>
          Close Wish
        </button>
      </div>
    </div>
  );
};

export default WishletDetail;