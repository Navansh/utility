import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { updateProfile } from '../../lib/update-profile/api';

const SettingsForm = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  const router = useRouter();

  const [userName, setUserName] = useState(data?.userName || '');
  const [userDescription, setUserDescription] = useState(
    data?.userDescription || ''
  );
  const [emailId, setEmailId] = useState(data?.emailId || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      userId: data._id,
      userName: userName,
      userDescription: userDescription,
      profilePhoto: selectedImage,
      emailId: emailId,
    };
    toast.promise(updateProfile(params), {
      loading: 'Updating your profile',
      success: () => {
        router.push(`/${userName}`);
        return 'Successfully updated your profile';
      },
      error: 'Something went wrong, please try again later',
    });
  };

  useEffect(() => {
    return () => {
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage);
      }
    };
  }, [selectedImage]);

  return (
    <div className="divide-y divide-white/5 h-full bg-gray-100">
      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 pt-16 sm:px-6 md:grid-cols-3 lg:px-8 bg-gray-100">
        <div>
          <h2 className="text-base font-semibold leading-7 ">
            Personal Information
          </h2>
        </div>

        <form className="md:col-span-2" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="col-span-full flex items-center gap-x-8">
              <img
                src={
                  selectedImage
                    ? URL.createObjectURL(selectedImage)
                    : data?.profilePhoto
                }
                alt="User Profile"
                className="h-24 w-24 flex-none rounded-lg bg-gray-100 object-cover"
              />
              <label
                htmlFor="pfp"
                className="rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-300"
              >
                Change avatar
                <input
                  type="file"
                  name="profile-photo"
                  id="pfp"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </label>
              <p className="mt-2 text-xs leading-5 text-gray-800">
                JPG, GIF or PNG. 1MB max.
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 "
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={emailId}
                  className="block w-full rounded-md border-0 bg-gray-300 py-1.5  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 "
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md bg-gray-300 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                  <span className="flex select-none items-center px-3 text-gray-700 sm:text-sm">
                    pointsix.com/
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="flex-1 border-0 bg-transparent py-1.5 pl-1  focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="navansh"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="timezone"
                className="block text-sm font-medium leading-6 "
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  type="description"
                  className="block w-full rounded-md border-0 bg-gray-300 py-1.5  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  rows={5}
                  value={userDescription}
                  onChange={(e) => setUserDescription(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex">
            <button
              type="submit"
              className="rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsForm;
