a
<template>
  <div>
    <q-input
      v-model="idText"
      class="q-pa-sm"
      square
      outlined
      label="아이디"
    ></q-input>
    <q-input
      v-model="pwdText"
      type="password"
      class="q-pa-sm"
      square
      outlined
      label="비밀번호"
    ></q-input>
    <q-btn class="q-pa-sm" @click="login()">로그인</q-btn>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { api } from 'boot/axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const idText = ref();
const pwdText = ref();

function login() {
  const params = new URLSearchParams();
  params.append('userid', idText.value);
  params.append('password', pwdText.value);
  params.append('deviceid', '28b1df67-e053-37b6-a136-9af2051a45ed');
  params.append('forceLogout', 1);

  api
    .post('/auth/login', params)
    .then(function (response) {
      if (response.data.returnCode === 200) {
        console.log('로그인 성공');
        router.push('/');
        return;
      }
      console.log('로그인 에러');
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>
<style></style>
