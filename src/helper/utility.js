import axios from 'axios';

export const getUtilityById = async (id, userId) => {
  const data = {
    userId,
  };
  try {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/utilities/${id}?userId=${userId}`
    );
    return result['data'];
  } catch (error) {
    console.error(error);
  }
};

export const claimUtility = async (id, userId, answers) => {
  const data = {
    userId,
    answers,
  };
  try {
    const result = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/utilities/${id}/claim`,
      data
    );
    return result['data'];
  } catch (error) {
    console.error(error);
  }
};
