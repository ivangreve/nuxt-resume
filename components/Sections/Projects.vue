<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ projects.title }}</h2>

    <CardProject :projectInfo="project" v-for="project in projects.projectsInfo" :key="project.name" class="mb-5"/>
  </div>
</template>

<script>
import CardProject from "@/components/Sections/CardProject";

export default {
  components: { CardProject },
  data() {
    return {
      projects: {
        title: "Personal Projects 🦾🧠",
        projectsInfo: [
          {
            name: "Kelawar",
            description: "Kelawar is a Big Data + IoT project.",
            image: "/images/kelawar.jpg",
            siteUrl: "https://kelawar.com/"
          },
          {
            name: "DriveBox",
            description: "DriveBox is a power-up for google drive service.",
            image: "/images/drivebox.jpg",
            siteUrl: "https://www.google.com/"
          }
        ]
      }
    };
  }
};
</script>
