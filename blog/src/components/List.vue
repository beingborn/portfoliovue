// 링크를 연결했으니 
// 클릭한 요소의 index 번호의 
// 요소를 보여줄 수 있도록 해야함
<template>
  <div class="blog-archive" v-for="(blog,i) in blog" :key="i">
    <h4 @click="$router.go(-1)">gd</h4>

    <h5 @click="$router.push(`/detail/${i}`)">
        {{ blog.title }}
    </h5>
    <!-- <h5 @click="clicked = i;">
        <router-link :to="'/detail/' + i">
            {{blog.title}}
        </router-link>
    </h5>  -->
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