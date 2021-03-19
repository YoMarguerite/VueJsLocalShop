<template>
  <v-container>
    <v-switch
      v-model="darkMode"
      inset
      label="Dark mode"
      persistent-hint
      @change="changeDarkMode"
    ></v-switch>
  </v-container>
</template>

<script>
export default {
  name: "Parametre",
  data: () => ({
    darkMode: false
  }),
  mounted() {
    if (localStorage.darkMode) {
      this.darkMode = JSON.parse(localStorage.darkMode);
    }

    this.$vuetify.theme.dark = this.darkMode;
  },
  methods: {
    changeDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.darkMode = this.darkMode;
    }
  }
};
</script>
