import axios from 'axios';
import { toast } from 'react-hot-toast';

import User from '../../../database/Schema/User';

export const areFieldsFilled = (allFields) =>
  allFields.title !== '' &&
  allFields.description !== '' &&
  allFields.image !== '' &&
  allFields.confirmationTitle !== '' &&
  allFields.confirmationDescription !== '' &&
  allFields.nftCollectionAddress !== '' &&
  allFields.nftCollectionName !== '' &&
  allFields.selectedCollection !== '' &&
  allFields.startDate !== '' &&
  allFields.endDate !== '' &&
  allFields.claims !== '';

export const uploadImage = (image) =>
  new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('file', image);
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/utilities/upload-image`,
        formData,
        config
      )
      .then((res) => resolve(res.data.imageUrl))
      .catch((err) => reject(err));
  });

const createUtility = (allFields, imageUrl, creator, publishedStatus) =>
  new Promise((resolve, reject) => {
    const utilityData = {
      title: allFields.title,
      description: allFields.description,
      image: imageUrl,
      confirmationTitle: allFields.confirmationTitle,
      confirmationDescription: allFields.confirmationDescription,
      nftCollectionName: allFields.nftCollectionName,
      nftCollectionAddress: allFields.nftCollectionAddress,
      startDate: allFields.startDate,
      endDate: allFields.endDate,
      claims: {
        total: parseInt(allFields.claims.total),
        claimed: 0,
      },
      tags: allFields.tags,
      claimLink: allFields.claimLink,
      creator: creator,
      published: publishedStatus,
      creatorQuestions: allFields.creatorQuestions,
    };
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/utilities/create`,
        utilityData
      )
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

const updateUserObject = (params) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/add-utility`, params)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export async function createUtilityPromise(payload, publishedStatus, creator) {
  return new Promise(async (resolve, reject) => {
    try {
      if (!areFieldsFilled(payload)) {
        toast.error('Please fill all the fields');
        reject('Please fill all the fields');
      } else {
        try {
          const imageUrl = await uploadImage(payload.image);
          const createdUtility = await createUtility(
            payload,
            imageUrl,
            creator,
            publishedStatus
          );
          const utilityId = createdUtility?.data?.utility;
          // This passes userId and creatorId to the backend to update user object.
          await updateUserObject({ userId: creator, utilityId });
          resolve('Utility published successfully');
        } catch (err) {
          console.error(err);
          reject(err);
        }
      }
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}

export const generateUsername = async () => {
  // Define the characters that can be used in the username.
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789_.';

  // Generate a random username of length 12.
  let userName = '';
  for (let i = 0; i < 12; i++) {
    userName += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  const user = await User.findOne({ userName }).lean();
  // If the username does not exist, return it.
  if (!user?.userName) {
    return userName;
  }

  // Otherwise, generate a new username.
  return generateUsername();
};
