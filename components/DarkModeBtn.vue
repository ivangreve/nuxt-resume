<template>
  <div>
    <i v-if="!this.darkMode" style="font-size:35px; color:white;" class="fas fa-sun btn" @click="setDarkMode"></i>
    <i v-else style="font-size:35px;" class="fas fa-moon btn" @click="setLightMode"></i>
  </div>
</template>

<script>
export default {
  components: {},
  mounted(){
    this.setLightMode();
  },
  data() {
    return {
      darkMode: false,
      colorMode: "light"
      //colorMode: ["system", "light", "dark"]
    };
  },
  methods: {
    setDarkMode(){
      this.darkMode = true;
      this.colorMode = "dark";
      this.$colorMode.preference = this.colorMode;
    },
    setLightMode(){
      this.darkMode = false;
      this.colorMode = "light";
      this.$colorMode.preference = this.colorMode;
    }
  }
};
</script>