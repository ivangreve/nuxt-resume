<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ this.workExperiences.title }}</h2>

    <div
      v-for="work in workExperiences.works"
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
    return {
      workExperiences: {
        title: "Work Expecience 🔨",
        works: [
          {
            position: "Software Engineer / FullStack Developer",
            companie: "Axum - Smart Solutions",
            responsabilities: [
              "Responsible for designing, developing and maintaining a group of applications used by multinational companies as Pepsico, Unilever, Quilmes, etc.",
              "Web Team leader, I take technical decisions aboute which technologies use in each project and how the team will works.",
              "Backend Developer: .NET Core | .NET Framework | NodeJs | MSSQL | PostgreSQL | MongoDB.",
              "Frontend Developer: VueJs | ReactJs | Javascript | JQuery.",
              "Desktop Applications: .NET Windows Form Applications."
            ],
            startEndDate: "November 2017 - Present"
          },
          {
            position: "Technical Administrator",
            companie: "Metalurgica Vezeta",
            responsabilities: [
              "Responsible for web ecommerce designing and maintaining.",
              "Graphic design (Adobe Photoshop and Adobe Illustrator).",
              "Technical support.",
              "Improve business processes."
            ],
            startEndDate: "March 2014 - October 2017"
          }
        ]
      }
    };
  }
};
</script>
