import { defineStore } from 'pinia';

export const useCounterStore = defineStore('chat', {
  state: () => ({
    personName: '의료행정부',
    person: 13,
    time: '12:34',
    lastContent: '아 그렇군요 어떠 내용이에요?',
    counter: 6,
    messages: [
      {
        key: '8',
        name: '김보현8',
        text: 'Did it work?',
        stamp: '1 minutes ago',
      },
      {
        key: '8',
        name: '김보현8',
        text: 'Did it work?',
        stamp: '1 minutes ago',
      },
      {
        key: '8',
        name: '김보현8',
        text: 'Did it work?',
        stamp: '1 minutes ago',
      },
      {
        key: '8',
        name: '김보현8',
        text: 'Did it work?',
        stamp: '1 minutes ago',
      },
      {
        key: '8',
        name: '김보현8',
        text: 'Did it work?',
        stamp: '1 minutes ago',
      },
      {
        key: '8',
        name: '김보현8',
        text: 'Did it work?',
        stamp: '1 minutes ago',
      },
    ],
  }),
});
