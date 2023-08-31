import { useState } from 'react';

import { EmailComponent } from './email.component';

export const Email = ({ creatorQuestion, setFormData }) => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [email, setEmail] = useState('');
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (event) => {
    if (event) {
      const { name, value } = event.target;
      setEmail(event.target.value);
      if (validateEmail(event.target.value)) {
        setIsValidEmail(true);
        // TODO: execute only when typing has ended
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      } else {
        setIsValidEmail(false);
      }
    }
  };

  return (
    <EmailComponent
      creatorQuestion={creatorQuestion}
      email={email}
      isValidEmail={isValidEmail}
      handleChange={handleChange}
    />
  );
};
