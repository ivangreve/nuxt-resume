<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ $t('skills.title') }}</h2>

    <div class="subheading mb-3">{{ $t('skills.iconsTitle') }}</div>
    <ul class="list-inline list-icons" style="text-align:center">
      <li v-for="icon in $t('skills.devIcons')" :key="icon" class="list-inline-item">
        <i :class="icon"></i>
      </li>
    </ul>

    <div class="subheading mb-3">{{ $t('skills.workflow') }}</div>
    <ul class="fa-ul mb-0">
      <li v-for="item in  $t('skills.itemList')" :key="item">
        <i class="fa-li fa fa-check"></i>
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { };
  }
};
</script>
