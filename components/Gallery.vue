<template>
    <nuxt-link :to="'/gallery/' + id">
        <article class="gallery">
            <div class="thumbnail" :style="{backgroundImage: 'url('+ thumbnail +')'}"></div>
            <h1>{{ title }}</h1>
            <p>{{ previewText}}</p>
        </article>
    </nuxt-link>
    
</template>

<script>
export default {
    props: ['id', 'thumbnail', 'title', 'previewText']
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}
h1 {
    font-size: 3rem;
    line-height: 5.5rem;
  }
.gallery{
    box-sizing: border-box;
    width: 280px;
    padding: 8px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #aaa;
    margin: 10px;
    text-align: center;
}
.thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 200px;
}
</style>

