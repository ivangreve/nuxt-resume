<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ projects.title }}</h2>

    <CardProject v-for="project in projects.projectsInfo" :key="project.name" class="mb-5"/>
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
            description: "Kelawar Description",
            siteUrl: "https://kelawar.com/"
          },
          {
            name: "Kelawar",
            description: "Kelawar Description",
            siteUrl: "https://kelawar.com/"
          }
        ]
      }
    };
  }
};
</script>
