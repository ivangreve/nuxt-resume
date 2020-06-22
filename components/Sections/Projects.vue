<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ $t('projects.title') }}</h2>

    <CardProject :projectInfo="project" v-for="project in $t('projects.projectsInfo')" :key="project.name" class="mb-5"/>
  </div>
</template>

<script>
import CardProject from "@/components/Sections/CardProject";

export default {
  components: { CardProject },
  data() {
    return { };
  }
};
</script>
