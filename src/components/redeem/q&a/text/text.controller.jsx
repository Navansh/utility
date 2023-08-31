import { TextComponent } from './text.component';

export const TextQuestion = ({ creatorQuestion, setFormData }) => {
  const handleChange = (event, question) => {
    if (event) {
      const { value } = event.target;
      // TODO: set only when typing ends
      setFormData((prevFormData) => ({
        ...prevFormData,
        [question]: value,
      }));
    }
  };

  return (
    <TextComponent
      creatorQuestion={creatorQuestion}
      handleChange={handleChange}
    />
  );
};
