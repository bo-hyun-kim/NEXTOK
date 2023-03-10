import { defineStore } from 'pinia';

export const useCounterStore = defineStore('main', {
  state: () => ({
    personName: '의료행정부',
    person: 13,
    time: '12:34',
    lastContent: '아 그렇군요 어떠 내용이에요?',
    counter: 6,
  }),
});
