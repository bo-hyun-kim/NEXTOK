<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="291"
      class="q-pt-md bg-white text-white"
    >
      <q-tabs
        v-model="tab"
        dense
        class="text-black"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="personal" label="개인" />
        <q-tab name="group" label="소속" />
        <q-tab name="all" label="전체" />
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="tab">
        <q-tab-panel name="personal">
          <q-input
            label="사용자검색"
            ref="filterRef"
            v-model="filter"
            filled
            type="search"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
            <template v-slot:append>
              <q-icon
                v-if="filter !== ''"
                name="clear"
                class="cursor-pointer"
                @click="resetFilter"
              />
            </template>
          </q-input>
          <q-tree
            icon="play_circle"
            :nodes="simple"
            node-key="label"
            :filter="filter"
            no-connectors
            v-model:expanded="expanded"
          />
        </q-tab-panel>

        <q-tab-panel name="group">
          <q-input v-model="search" filled type="search">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-tab-panel>

        <q-tab-panel name="all">
          <q-input v-model="search" filled type="search">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-tab-panel>
      </q-tab-panels>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('personal');
const search = ref('');

const filter = ref('');
const filterRef = ref(null);

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

const expanded = ref(['인천힘찬종합병원', 'Good food (with icon)']);

const simple = [
  {
    label: '인천힘찬종합병원',
    children: [
      {
        label: '의료원장(병원장)',
        children: [{ label: 'Quality ingredients' }, { label: 'Good recipe' }],
      },
      {
        label: '진료원장',
        disabled: true,
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' },
        ],
      },
      {
        label: '의료행정본부장',
        disabled: true,
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' },
        ],
      },
      {
        label: '진료부원장',
        children: [
          {
            label: '소화기내과',
            children: [
              {
                label: '김소화',
                icon: 'account_circle',
              },
              {
                label: '이내과',
                icon: 'account_circle',
              },
            ],
          },
          { label: '신경내과' },
          { label: '홍길동', icon: 'account_circle' },
          { label: '김대장', icon: 'account_circle' },
          { label: '이협력', icon: 'account_circle' },
          { label: '박본부', icon: 'account_circle' },
        ],
      },
      {
        label: '응급의료센터',
        disabled: true,
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' },
        ],
      },
      {
        label: '간호과',
        disabled: true,
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' },
        ],
      },
      {
        label: '종합행정과',
        disabled: true,
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' },
        ],
      },
      {
        label: '원무과',
        disabled: true,
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' },
        ],
      },
    ],
  },
];

function resetFilter() {
  filter.value = '';
  filterRef.value.focus();
}
</script>
