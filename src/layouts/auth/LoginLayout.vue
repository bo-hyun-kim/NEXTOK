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
  let params = {
    userid: idText.value,
    password: pwdText.value,
    deviceid: '28b1df67-e053-37b6-a136-9af2051a45ed',
  };

  api
    .post('/auth/login', {
      userid: params.userid,
      password: params.password,
      deviceid: params.deviceid,
    })
    .then(function (response) {
      console.log(response.data.returnCode + ': 로그인 성공');
      console.log(response);
      router.push('/');
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>
<style></style>
