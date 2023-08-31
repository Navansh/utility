import { CheckboxComponent } from './checkbox.component';

export const Checkbox = ({ creatorQuestion, setFormData }) => {
  const handleChange = (event, question) => {
    if (event) {
      const { value, checked } = event.target;
      setFormData((prevFormData) => {
        const updatedData = {
          ...prevFormData,
          [question]: prevFormData?.[question] || [],
        };
        if (checked) {
          updatedData[question] = [...updatedData[question], value];
        } else {
          updatedData[question] = updatedData[question].filter(
            (item) => item !== value
          );
        }
        return updatedData;
      });
    }
  };

  return (
    <CheckboxComponent
      creatorQuestion={creatorQuestion}
      handleChange={handleChange}
    />
  );
};
