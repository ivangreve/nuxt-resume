<template>
  <div class="my-auto">
    <h2 class="mb-5">{{skills.title}}</h2>

    <div class="subheading mb-3">{{skills.iconsTitle}}</div>
    <ul class="list-inline list-icons" style="text-align:center">
      <li v-for="icon in skills.devIcons" :key="icon" class="list-inline-item">
        <i :class="icon"></i>
      </li>
    </ul>

    <div class="subheading mb-3">Workflow</div>
    <ul class="fa-ul mb-0">
      <li v-for="item in skills.itemList" :key="item">
        <i class="fa-li fa fa-check"></i>
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: {
        title: "Skills 🎯",
        iconsTitle: "Programming Languages & Tools",
        devIcons: [
        "devicon-csharp-plain",
        "devicon-javascript-plain", 
        "devicon-html5-plain-wordmark", 
        "devicon-css3-plain-wordmark", 
        "devicon-git-plain",
        "devicon-nodejs-plain",
        "devicon-bootstrap-plain",
        "devicon-github-original",
        "devicon-bitbucket-original-wordmark",
        "devicon-dot-net-original-wordmark",
        "devicon-jquery-plain-wordmark",
        "devicon-linux-plain",
        "devicon-windows8-original",
        "devicon-illustrator-plain",
        "devicon-photoshop-plain",
        "devicon-react-original",
        "devicon-visualstudio-plain",
        "devicon-dot-net-plain",
        "devicon-vuejs-plain",
        "devicon-postgresql-plain",
        ],
        itemList: [
          "Responsive Design & UX",
          "Cross Browser or Platform Testing & Debugging",
          "REST API building",
          "Agile Development & Scrum",
          "Team working",
          "Design Patterns"
        ]
      }
    };
  }
};
</script>
