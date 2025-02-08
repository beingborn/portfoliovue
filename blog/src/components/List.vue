// 링크를 연결했으니 
// 클릭한 요소의 index 번호의 
// 요소를 보여줄 수 있도록 해야함

<template>
  <!-- v-for="(blog, index) in blog" :key="index" -->
  <div class="blog-archive" v-for="(blog,i) in blog" :key="i">
    <h5 @click="clicked = i; console.log(clicked)">
        <router-link to='/detail'>
            {{blog.title}}
        </router-link>
    </h5> 
    <p>{{blog.date}}</p>
  </div>
</template>

<script>
export default {
    name : 'List',
    props: {
        blog : Array
    },
    data(){
        return {
            clicked : 0
        }
    }
}
</script>

<style>

</style>