import { atom } from 'recoil';

export const valueModalState = atom({
  key: 'valueModalState',
  default: false,
});

export const valueModalData = atom({
  key: 'valueModalData',
  default: {
    valueName: 'SMS',
    preText: 'To Send SMS',
    postText: 'To Receive SMS',
    value: 'NGN 22.8800/sms',
    isTag: true,
    hasMore: true,
  },
});

export const preferenceModalState = atom({
  key: 'preferenceModalState',
  default: false,
});
