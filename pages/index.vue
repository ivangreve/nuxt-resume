<template>
  <section>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Resume Iván</span>
        <span class="d-none d-lg-block">
          <img
            class="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="/profile.jpg"
            alt=""
          />
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#about')"
              href="#"
              >{{ $t('links.about') }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#education')"
              href="#"
              >{{ $t('links.education') }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#experience')"
              href="#"
              >{{ $t('links.experience') }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#skills')"
              href="#"
              >{{ $t('links.skills') }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#interests')"
              href="#"
              >{{ $t('links.interests') }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#projects')"
              href="#"
              >{{ $t('links.projects') }}</a
            >
          </li>
          <li class="nav-item">
            <div style="position:fixed; bottom:10px; left:10px; z-index:1000;">
              <DarkModeBtn />
            </div>
          </li>
          <li class="nav-item">
            <div style="position:fixed; bottom:10px; right: 10px;z-index:1000;">
              <nuxt-link class="btn btn-light" :to="switchLocalePath('en')"
                >EN</nuxt-link
              >
              <nuxt-link class="btn btn-light" :to="switchLocalePath('es')"
                >ES</nuxt-link
              >
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div class="resume">
      <Resume />
    </div>
  </section>
</template>

<script>
import Resume from "@/components/Resume";
import DarkModeBtn from "@/components/DarkModeBtn";
import jump from "jump.js";

export default {
  components: {
    Resume,
    DarkModeBtn
  },
  head() {
    return {
      title: "Iván Greve"
    };
  },
  methods: {
    jumpTo(element) {
      jump(element);
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
  line-height: 5.5rem;
}
@media (min-width: 992px) {
  .resume {
    padding-top: 0;
    padding-left: 17rem;
  }
}
</style>
