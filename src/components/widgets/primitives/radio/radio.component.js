import { RadioGroup } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { BsCircle, BsRecordCircle } from 'react-icons/bs';

const defaultItemRenderer = (data) => JSON.stringify(data);

// TODO: give support for disable and lebel description

export const Radio = ({
  dataSource,
  value,
  onChange,
  itemRenderer = defaultItemRenderer,
}) => {
  const [fetchedDataSource, setFetchedDataSource] = useState(dataSource || []);
  const [selectedValue, setSelectedValue] = useState(value || undefined);
  const [optionChildren, setOptionChildren] = useState([]);

  useEffect(
    function updateDataSource() {
      // TODO: check datasource is array or not
      setFetchedDataSource(dataSource);
    },
    [dataSource]
  );

  useEffect(function renderOptionChildren() {
    if (fetchedDataSource && fetchedDataSource.length !== 0) {
      const items = fetchedDataSource
        .map((data, index) => {
          return [itemRenderer(data, index), data];
        })
        .map(([item, data], index) => {
          return (
            <RadioGroup.Option
              key={index}
              value={JSON.stringify(data)}
              className={() =>
                `relative flex cursor-pointer bg-white rounded-md px-3 py-1.5 mb-3.5 border border-gray-300 focus:outline-none`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div>
                        <RadioGroup.Label
                          as="p"
                          className={`text-sm font-medium`}
                        >
                          {item}
                        </RadioGroup.Label>
                        {/* <RadioGroup.Description as="span" className={`inline`}>
                          <span className="text-xs font-normal">{type.description}</span>
                        </RadioGroup.Description> */}
                      </div>
                    </div>
                    <></>
                    {checked ? (
                      <div className="shrink-0 text-indigo-500">
                        <BsRecordCircle className="h-6 w-6" />
                      </div>
                    ) : (
                      <div className="shrink-0">
                        <BsCircle className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          );
        });

      setOptionChildren(items);
    }
  }, []);

  const onRadioChange = (value) => {
    let _value = JSON.parse(value);
    setSelectedValue(_value);
    onChange && onChange(_value);
  };

  return (
    <RadioGroup value={JSON.stringify(selectedValue)} onChange={onRadioChange}>
      {optionChildren}
    </RadioGroup>
  );
};
