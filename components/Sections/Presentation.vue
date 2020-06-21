<template>
  <div class="my-auto">
    <h1 class="mb-0">
      {{ this.personalInfo.name }}
      <span class="text-primary">{{ this.personalInfo.lastName }}</span>
    </h1>

    <h3 class="mb-4">
      <vue-typer
        :text="personalInfo.subHeadingText"
        :repeat="Infinity"
        :shuffle="true"
        initial-action="typing"
        :pre-type-delay="100"
        :type-delay="82"
        :pre-erase-delay="2000"
        :erase-delay="30"
        erase-style="backspace"
        :erase-on-complete="false"
        caret-animation="blink"
      ></vue-typer>
    </h3>

    <div class="subheading mb-5">
      {{personalInfo.city}} · {{personalInfo.phoneNumber}} ·
      <a href="mailto:name@email.com">{{ personalInfo.email }}</a>
    </div>
    <p class="mb-5">
      {{ personalInfo.myDescription}}
    </p>
    <ul class="list-inline list-social-icons mb-0">
      <!-- <li class="list-inline-item">
        <a href="#">
          <span class="fa-stack fa-lg">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </li> -->

      <li class="list-inline-item">
        <a target="blank" href="https://www.linkedin.com/in/ivan-greve/">
          <span class="fa-stack fa-lg">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </li>
      <li class="list-inline-item">
        <a target="blank" href="https://github.com/ivangreve/">
          <span class="fa-stack fa-lg">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fab fa-github-alt fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personalInfo: {
        name: "Iván",
        lastName: "Greve",
        subHeadingText: [
                'Software Enginneer',
                'Full Stack Developer',
                'Code enthusiast!'
              ],
        city: "Buenos Aires, Argentina",
        phoneNumber: "+54 - 6766-9851",
        email:"ivangreve@gmail.com",
        myDescription: "Passionate web developer, making useful application using the latest technologies"
      }
    };
  }
};
</script>
