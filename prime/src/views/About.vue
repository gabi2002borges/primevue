<template>
  <div class="about">
    <div class="myform p-fluid">
      <h1>{{ $store.state.user.name }}</h1>
      <h2>{{ myname }}</h2>

      <span class="p-input-icon-right p-float-label">
        <i class="pi pi-apple" />
        <InputText type="text" id="username" v-model="myname" />
        <label for="username">Usuário</label>
      </span>

      <Password toggleMask></Password>

      <Button @click="saveName">Entrar</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data(){
    return {
      myname: "OK"
    }
  },
  methods:{
    saveName(){
      console.log("Save name:" + this.myname);
      this.$store.commit('registerUser', this.myname);
    }
  }
}
</script>


<style scoped lang="scss">
.about {
  background-color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.myform {
  width: 30%;
  height: 60%;
  background-color: black;
  border-radius: 25px;
  padding: 20px;
}
</style>