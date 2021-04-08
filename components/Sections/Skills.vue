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
    <ul class="fa-ul mb-3">
      <li v-for="item in  $t('skills.itemList')" :key="item">
        <i class="fa-li fa fa-check"></i>
        {{item}}
      </li>
    </ul>
    
    <div class="subheading mb-3">{{ $t('skills.portfolio') }}</div>
    <ul class="fa-ul mb-3">
      <li><a href='https://travel.taiwanme.com/'>TaiwanMe</a></li>
      <li><a href='https://travel.taiwanme.com/guguan-hot-springs-boai-village/'>TaiwanMe writing example</a></li>
      <li><a href='https://drive.google.com/open?id=1VYjxvo1pt9Se5IJoAyWcneNn9FGd1JWw'>LocalCoinSwap ICO fact sheet</a></li>
      <li><a href='https://static.localcoinswap.com/exchange/assets/docs/LocalCoinSwap_whitepaper_v1.0.pdf'>LocalCoinSwap White Paper writing</a></li>
      <li><a href='https://drive.google.com/open?id=174OcmS_pb2QJkNtKhhcPhz2hcpUSFwWcf'>Infinitus Press Release</a></li>
      <li><a href='https://www.prop2morrow.com/2017/04/29/beatniq-sukhumvits-inner-city-sanctuary/'>Sukhumvit’s Inner City Sanctuary - BEATNIQ</a></li>
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
