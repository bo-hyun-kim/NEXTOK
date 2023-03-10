import { defineStore } from 'pinia';

export const useCounterStore = defineStore('chat', {
  state: () => ({
    lists: [
      {
        index: 1,
        personName: '김힘찬',
        person: '',
        time: '12:34',
        lastContent: '워크샵을 통하여 터득하여 보건의..',
        counter: '',
      },
      {
        index: 2,
        personName: '김길동',
        person: '',
        time: '12:34',
        lastContent: '좋은 아침입니다 굿모닝 하루하루..',
        counter: '',
      },
      {
        index: 3,
        personName: '상원의료재단',
        person: 9,
        time: '12:34',
        lastContent: '안녕하세요 감사합니다^^',
        counter: '',
      },
      {
        index: 4,
        personName: '의료행정부',
        person: 13,
        time: '12:34',
        lastContent: '아 그렇군요 어떠 내용이에요?',
        counter: 6,
      },
    ],
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
