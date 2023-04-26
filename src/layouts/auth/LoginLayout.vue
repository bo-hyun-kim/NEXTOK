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
    <q-btn class="q-pa-sm" @click="message()">메시지</q-btn>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { api } from 'boot/axios';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

// const cookieJar = new tough.CookieJar();
const router = useRouter();
const $q = useQuasar();

//로그인
const idText = ref();
const pwdText = ref();

function login() {
  const params = new URLSearchParams();
  params.append('userid', idText.value);
  params.append('password', pwdText.value);
  params.append('deviceid', '28b1df67-e053-37b6-a136-9af2051a45ed');
  params.append('forceLogout', 1);

  window.testChannel.test();
  // api
  //   .post('/auth/login', params, { withCredentials: true })
  //   .then(function (response) {
  //     console.log(response.data);
  //     if (response.data.returnCode == '200') {
  //       window.Session.setCookie('test');
  //       console.log('로그인 성공');
  //       //router.push('/');
  //       return;
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // api
  //   .post('/auth/login', params, { withCredentials: true, jar: cookieJar })
  //   .then(function (response) {
  //     cookieJar.getCookies('http://192.168.0.189:80', (err, cookies) => {
  //       cookies.forEach((cookie) => {
  //         const { name, value, domain } = cookie;
  //         session.defualtSession.cookies.set({
  //           url: 'https://${domain}',
  //           name: name,
  //           value: value,
  //         });
  //       });
  //     });
  //     console.log(response.data);
  //     if (response.data.returnCode == '200') {
  //       console.log('로그인 성공');
  //       //router.push('/');
  //       return;
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
}

function message() {
  api
    .post('/user/getall')
    .then(function (response) {
      console.log(response);
      if (response.data.returnCode == '200') {
        console.log('성공');
        // router.push('/');
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
