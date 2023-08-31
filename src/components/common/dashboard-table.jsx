import axios from 'axios';
import { useEffect, useState } from 'react';

import { useUtilityStore } from '../../store/utility-store';

const DashBoardTable = () => {
  const id = useUtilityStore((state) => state.dashboardClickedUtilityId);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    if (id !== '') {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/utilities/${id}/answers`)
        .then((data) => {
          setUserAnswers(data.data.userAnswers);
        });
    }
  }, [id]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Users
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            The responses to the questions asked before claiming the utility.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Export
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      User Addresses
                    </th>
                    {userAnswers.length !== 0 &&
                      userAnswers[0]?.value?.map((data, index) => {
                        return (
                          <th
                            key={index}
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 overflow-ellipsis"
                          >
                            {data?.question}
                          </th>
                        );
                      })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {userAnswers.map((answer) => {
                    return (
                      <tr key={answer.value._id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {answer?.userId && answer.userId}
                        </td>
                        {answer.value.length !== 0 &&
                          answer.value.map((data, index) => {
                            return (
                              <td
                                key={index}
                                className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                              >
                                {data?.answer && data.answer}
                              </td>
                            );
                          })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardTable;
