<template>
  <div class="my-auto mx-auto">
    <span class="d-block d-lg-none text-center mb-5">
      <img
        class="img-fluid img-profile rounded-circle mx-auto mb-2"
        src="/profile.jpg"
        alt=""
      />
    </span>

    <h1 class="mb-2">
      {{ $t('personalInfo.name') }}
      <span class="text-primary">{{ $t('personalInfo.lastName') }}</span>
    </h1>

    <h3 class="mb-4">
      <vue-typer
        :text="$t('personalInfo.subHeadingText')"
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

    <div class="subheading mb-3">
      {{ $t('personalInfo.city') }} · {{ $t('personalInfo.phoneNumber') }} ·
      {{ $t('personalInfo.email') }}
    </div>
    <p class="mb-3">
      {{ $t('personalInfo.myDescription') }}
    </p>

    <div class="subheading mb-3">Find me on</div>
    <ul class="list-inline list-icons" style="text-align:left">
      <li class="list-inline-item">
        <a href="https://github.com/DeveloperThomas"><i class="devicon-github-original"></i></a>
      </li>
      <li class="list-inline-item">
        <a href="https://twitter.com/AussieUnderwood"><i class="devicon-twitter-plain"></i></a>
      </li>
      <li class="list-inline-item">
        <a href="https://www.linkedin.com/in/tomunderwood1/"><i class="devicon-linkedin-plain"></i></a>
      </li>
    </ul>

    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
