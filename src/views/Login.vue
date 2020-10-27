<template>
  <div class="home">
    <div class="login-box">
      <div class="logo"></div>
      <div class="content">
        <van-button class="btn" @click="login" size="large" round type="info"
          >登录</van-button
        >
        <van-button class="btn" @click="sign" size="large" round type="primary"
          >注册</van-button
        >
      </div>
    </div>
    <van-dialog :showConfirmButton="false" v-model="show" title="标题">
      <div class="x" @click="hiddenmodel">X</div>
      <van-form>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" @click="submitLogin">
            登录
          </van-button>
        </div>
      </van-form>
    </van-dialog>
    <van-dialog :showConfirmButton="false" v-model="show2" title="标题">
      <div class="x" @click="hiddenmodel">X</div>
      <van-form>
        <van-field
          v-model="signusername"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="signpassword"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
         <van-field
          v-model="signpassword2"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请确认密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" @click="submitsign">
            注册
          </van-button>
        </div>
      </van-form>
    </van-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      show2:false,
      password: "",
      username: "",
      signusername:"",
      signpassword:"",
      signpassword2:"",

    };
  },
  methods: {
    hiddenmodel() {
      this.show = false;
      this.show2=false;
    },
    login() {
      this.show = true;
    },
    sign() {
        this.show2=true
    },
    submitLogin() {},
    submitsign() {}
  },
};
</script>
<style scoped>
.x {
  font-size: 15px;
  font-weight: 900;
  position: absolute;
  top: 10px;
  right: 15px;
}
.logo {
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("/logo.svg");
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -90%);
}
.btn {
  margin: 5px;
}
.content {
  transform: scale(0.9);
  width: 100%;
  position: absolute;
  bottom: 10px;
}
.login-box {
  width: 300px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 3px 3px rgba(105, 105, 105, 0.7);
}
.home {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
}
</style>
