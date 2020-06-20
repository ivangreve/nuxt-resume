<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ projects.title }}</h2>
    <p>
      {{ projects.firstBlock }}
    </p>
    <p class="mb-0">
      {{ projects.secondBlock }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: {
        title: "Personal Projects 🦾🧠",
        firstBlock:
          "Apart from being a web developer, I enjoy most of my time listening and playing music. I enjoy playing the piano and singing in my spare time!. 🎹🎵",
        secondBlock:
          "I spend a large amount of my free time exploring the latest technolgy advancements in the frontend and backend web technology development world and coding in my personal projects! 🙌👨‍💻"
      }
    };
  }
};
</script>
