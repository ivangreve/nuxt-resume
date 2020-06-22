<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ $t('workExperiences.title') }}</h2>

    <div
      v-for="work in $t('workExperiences.works')"
      :key="work.title"
      class="resume-item d-flex flex-column flex-md-row mb-5"
    >
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ work.position }}</h3>
        <div class="subheading mb-3">{{ work.companie }}</div>
        <p
          v-for="responsabilitie in work.responsabilities"
          :key="responsabilitie"
        >
          - {{ responsabilitie }}
        </p>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ work.startEndDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { };
  }
};
</script>
