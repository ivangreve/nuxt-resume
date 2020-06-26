<template>
  <section id="page-top">
    <div class="container-fluid p-0">
      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <Presentation />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <Education />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <Experience />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <Skills />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <Interests />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
        <Projects />
      </section>
    </div>
  </section>
</template>

<script>
import jump from "jump.js";
import Logo from "../components/Logo.vue";
import Presentation from "../components/Sections/Presentation";
import Education from "../components/Sections/Education";
import Experience from "../components/Sections/Experience";
import Skills from "../components/Sections/Skills";
import Interests from "../components/Sections/Interests";
import Projects from "../components/Sections/Projects";

export default {
  components: {
    Logo,
    Presentation,
    Experience,
    Education,
    Skills,
    Interests,
    Projects
  },
  methods: {}
};
</script>

<style>
</style>
