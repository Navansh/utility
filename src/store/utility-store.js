import { toast } from 'react-hot-toast';
import { create } from 'zustand';

import { createUtilityPromise } from '../lib/upload-utility/helpers';

export const useUtilityStore = create((set, get) => ({
  isModalOpen: false,
  modalUtility: {
    title: '',
    description: '',
    image: '',
    creator: '',
    startDate: '',
    endDate: '',
    nftCollectionName: '',
  },
  dashboardClickedUtilityId: '',
  isModalForDashboardUtilityInfo: false,
  activeUser: '',
  allUtilities: [],
  title: 'AllowList',
  description: '',
  confirmationTitle: '',
  image: '',
  confirmationDescription: '',
  activeTokenGates: { id: 1, name: 'Multiple reveal' },
  selectedCollection: { id: 1, name: 'No Collection Found', address: null },
  selectedNft: {
    name: 'Select all NFTs',
    description: 'Every holder can claim once per NFT held',
  },
  startDate: '2023-07-07',
  endDate: '2024-07-07',
  claims: 200,
  claimLink: '',
  tags: [],
  token_types: [
    { id: 1, name: 'Multiple reveal' },
    { id: 2, name: 'Single reveal' },
  ],
  nft_types: [
    {
      name: 'Select all NFTs',
      description: 'Every holder can claim once per NFT held',
    },
  ],
  creatorQuestions: [
    {
      type: 'qna',
      question: 'What is your nationality?',
      options: [{ id: 0, value: '' }],
    },
  ],
  collection_list: [],
  tagList: ['Physical', 'Digital', 'Event', 'AllowList'],

  setAllUtilities(value) {
    set({ allUtilities: value });
  },
  setisModalOpen(value) {
    set({ isModalOpen: value });
  },
  setIsModalForDashboardUtilityInfo(value) {
    set({ isModalForDashboardUtilityInfo: value });
  },
  setDashboardClickedUtilityId(value) {
    set({ dashboardClickedUtilityId: value });
  },
  setModalUtility(value) {
    set({ modalUtility: value });
  },
  setActiveUser(value) {
    set({ activeUser: value });
  },
  setTitle(value) {
    set({ title: value });
  },
  setCollectionList(value) {
    set({ collection_list: value });
  },
  setDescription(value) {
    set({ description: value });
  },
  setConfirmationTitle(value) {
    set({ confirmationTitle: value });
  },
  setConfirmationDescription(value) {
    set({ confirmationDescription: value });
  },
  setActiveTokenGates(value) {
    set({ activeTokenGates: value });
  },
  setCollection(value) {
    set({ selectedCollection: value });
  },
  setSelectedNft(value) {
    set({ selectedNft: value });
  },
  setStartDate(value) {
    set({ startDate: value });
  },
  setEndDate(value) {
    set({ endDate: value });
  },
  setClaims(value) {
    set({ claims: value });
  },
  setTags(value) {
    set({ tags: value });
  },
  setCreatorQuestions(value) {
    set({ creatorQuestions: value });
  },
  setImage(value) {
    set({ image: value });
  },
  setClaimLink(value) {
    set({ claimLink: value });
  },
  setUtility(data) {
    set(data);
  },

  updateTemplate(data) {
    set({
      title: data.title,
      description: data?.description,
      confirmationTitle: data?.confirmationTitle,
      confirmationDescription: data?.confirmationDescription,
      claimLink: data?.claimLink,
      image: data.img,
      startDate: data?.startDate,
      endDate: data?.endDate,
      // creatorQuestions: data?.creatorQuestions,
      //claims: data?.claims,
      tags: data?.tags,
    });
  },

  saveDraft() {
    return new Promise(async (resolve, reject) => {
      let payload = {
        title: get().title,
        description: get().description,
        image: get().image,
        confirmationTitle: get().confirmationTitle,
        confirmationDescription: get().confirmationDescription,
        nftCollectionName: get().selectedCollection.name,
        nftCollectionAddress: get().selectedCollection.address,
        startDate: get().startDate,
        endDate: get().endDate,
        claims: get().claims,
        claimLink: get().claimLink,
        creatorQuestions: get().creatorQuestions,
        tags: get().tags,
      };
      const creator = get().activeUser;
      const publishedStatus = false;

      toast.promise(createUtilityPromise(payload, publishedStatus, creator), {
        loading: 'Publishing the Utility🚀',
        success: () => {
          resolve();
          return 'Successfully created the published the utility';
        },
        error: () => {
          reject();
          return 'There was an error creating the utility';
        },
      });
    });
  },

  publishUtility() {
    return new Promise(async (resolve, reject) => {
      let payload = {
        title: get().title,
        description: get().description,
        image: get().image,
        confirmationTitle: get().confirmationTitle,
        confirmationDescription: get().confirmationDescription,
        nftCollectionName: get().selectedCollection.name,
        nftCollectionAddress: get().selectedCollection.address,
        startDate: get().startDate,
        endDate: get().endDate,
        claims: get().claims,
        claimLink: get().claimLink,
        creatorQuestions: get().creatorQuestions,
        tags: get().tags,
      };
      const creator = get().activeUser;
      const publishedStatus = true;

      toast.promise(createUtilityPromise(payload, publishedStatus, creator), {
        loading: 'Publishing the Utility🚀',
        success: () => {
          resolve();
          return 'Successfully created the published the utility';
        },
        error: () => {
          reject();
          return 'There was an error creating the utility';
        },
      });
    });
  },
}));
