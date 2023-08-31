import { RadioComponent } from './radio.component';

export const RadioQuestion = ({ creatorQuestion, setFormData }) => {
  const handleChange = (event, question) => {
    if (event) {
      const { value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [question]: value,
      }));
    }
  };

  return (
    <RadioComponent
      creatorQuestion={creatorQuestion}
      handleChange={handleChange}
    />
  );
};
