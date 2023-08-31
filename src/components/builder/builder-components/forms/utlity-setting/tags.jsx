import { useEffect, useState } from 'react';

import { useUtilityStore } from '../../../../../store/utility-store';

const Tags = () => {
  const tagList = useUtilityStore((state) => state.tagList);

  const [selectedTags, setSelectedTags] = useState([]);

  // const onTagsChange = (value) => {
  //   useUtilityStore.getState().setTags(value);
  // };

  useEffect(() => {
    useUtilityStore.getState().setTags(selectedTags);
  }, [selectedTags]);

  const getTags = (event) => {
    let value = event.target.attributes['data-tagname']?.value;
    if (!selectedTags.includes(value)) {
      // Add the tag to the selectedTags list
      setSelectedTags((prevTags) => [...prevTags, value]);
    } else {
      // If the tag is already selected, remove it from the list
      setSelectedTags((prevTags) => prevTags.filter((tag) => tag !== value));
    }
  };

  return (
    <div className="rounded-md border border-gray-400 bg-white p-5 text-xs">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label>
            Tags{' '}
            <span className="block text-gray-500 mt-1">
              Makes your utility discoverable based on category
            </span>
          </label>
          <div className="mt-4 flex items-center gap-3" onClick={getTags}>
            {tagList.map((tag, index) => (
              <div
                key={index}
                data-tagname={tag}
                className={`cursor-pointer rounded border border-gray-400 px-3 py-1.5 ${
                  selectedTags.includes(tag) ? 'bg-indigo-700 text-white' : ''
                }`}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
