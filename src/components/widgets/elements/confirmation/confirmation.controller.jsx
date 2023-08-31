import ConfirmationDialogComponent from './confirmation.component';

export const ConfirmationDialog = ({
  title,
  description,
  reward,
  resetState,
  callback,
}) => {
  return (
    <ConfirmationDialogComponent
      {...{ title, description, reward, resetState, callback }}
    />
  );
};
