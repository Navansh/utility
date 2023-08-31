import { useState } from 'react';
import { AiOutlineCloseCircle, AiOutlineEnter } from 'react-icons/ai';

import { useUtilityStore } from '../../../../../store/utility-store';
import { Input } from '../../../../widgets/primitives';

const CreatorsQuestions = () => {
  const creatorQuestions = useUtilityStore((state) => state.creatorQuestions);
  // const [questions, setQuestions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const addQuestion = (event) => {
    event.preventDefault();
    const question = { type: 'text', question: inputValue };

    useUtilityStore
      .getState()
      .setCreatorQuestions([...creatorQuestions, question]);
    setInputValue('');
  };

  const removeQuestion = (questionToRemove) => {
    // setQuestions(questions.filter((question) => question !== questionToRemove));
    useUtilityStore
      .getState()
      .setCreatorQuestions(
        creatorQuestions.filter(
          (creatorQuestion) => creatorQuestion?.question !== questionToRemove
        )
      );
  };

  return (
    <div className="rounded-md border border-gray-400 bg-white p-5 text-xs">
      <span>Creator Questions</span>
      <span className="block">
        Any question you would like to add the claimee.
      </span>
      <form onSubmit={addQuestion} className="mt-7">
        <div className="relative">
          <Input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter the question here"
          />
          <AiOutlineEnter
            className="absolute text-gray-400 right-4 top-4 scale-150"
            height={10}
            width={10}
          />
        </div>
      </form>
      <div className="mt-6 flex flex-col flex-wrap gap-3">
        {creatorQuestions?.map((creatorQuestion, index) => (
          <div
            className="relative rounded border border-gray-400 px-3 py-3 break-words"
            key={index}
          >
            {creatorQuestion?.question}
            <AiOutlineCloseCircle
              onClick={() => removeQuestion(creatorQuestion?.question)}
              className="absolute right-4 top-3.5 scale-150 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorsQuestions;
