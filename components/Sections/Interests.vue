<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ interests.title }}</h2>
    <p>
      {{ interests.firstBlock }}
    </p>
    <p class="mb-0">
      {{ interests.secondBlock }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interests: {
        title: "Interests 😄",
        firstBlock:
          "Apart from being a web developer, I enjoy most of my time listening and playing music. I enjoy playing the piano and singing in my spare time!. 🎹🎵",
        secondBlock:
          "I spend a large amount of my free time exploring the latest technolgy advancements in the frontend and backend web technology development world and coding in my personal projects! 🙌👨‍💻"
      }
    };
  }
};
</script>
