import { Listbox, Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { HiCheck, HiChevronDown } from 'react-icons/hi/index';

import { useUtilityStore } from '../../../../store/utility-store';

const defaultLabelRenderer = (data) => {
  return <span>{typeof data === 'string' ? data : JSON.stringify(data)}</span>;
};

const defaultItemRenderer = (data) => JSON.stringify(data);

export const SelectComponent = ({
  dataSource,
  value,
  multiple,
  onChange,
  itemRenderer = defaultItemRenderer,
  labelRenderer = defaultLabelRenderer,
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

  const onSelectChange = (value) => {
    let _value = JSON.parse(value);
    setSelectedValue(_value);
    onChange && onChange(_value);
    useUtilityStore.getState().setCollection(_value);
  };

  useEffect(function renderOptionChildren() {
    if (fetchedDataSource && fetchedDataSource.length !== 0) {
      const items = fetchedDataSource
        .map((data, index) => {
          return [itemRenderer(data, index), data];
        })
        .map(([item, data], index) => {
          return (
            <Listbox.Option
              className={({ active }) =>
                `relative cursor-pointer select-none py-2 pl-10 pr-4  ${
                  active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                }`
              }
              key={index}
              as="div"
              value={JSON.stringify(data)}
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {item}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-500">
                      <HiCheck className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          );
        });

      setOptionChildren(items);
    }
  }, []);

  return (
    <Listbox
      value={JSON.stringify(selectedValue)}
      onChange={onSelectChange}
      multiple={multiple}
    >
      {/* NOTE: label support needs to add in future */}
      {/* <p className="mb-1">{label}</p> */}
      <Listbox.Button className="relative w-full cursor-default rounded border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:outline-none sm:text-sm">
        {labelRenderer(selectedValue)}

        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <HiChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </Listbox.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options className=" mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
          {optionChildren}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};
