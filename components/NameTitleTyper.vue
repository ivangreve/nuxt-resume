<template>
  <div>
    <h1 class="mb-0">
      <vue-typer
        :text="this.name"
        class="name"
        :repeat="0"
        :shuffle="false"
        initial-action="typing"
        :pre-type-delay="20"
        :type-delay="82"
        :erase-on-complete="false"
        caret-animation="blink"
      ></vue-typer>

      <vue-typer
        :text="this.lastName"
        class="lastname"
        style="color:'red' !important"
        :repeat="0"
        :shuffle="false"
        initial-action="typing"
        :pre-type-delay="1500"
        :type-delay="82"
        :pre-erase-delay="2000"
        :erase-delay="89"
        erase-style="backspace"
        :erase-on-complete="false"
        caret-animation="blink"
      ></vue-typer>
    </h1>
  </div>
</template>

<script>
export default {
  props:["name", "lastName"]
}
</script>
