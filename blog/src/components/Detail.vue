<template>
    <!--
     클릭된 값 x $ROUTE
     $route.params.id
    -->
    <div>
        <h4>{{blog[$route.params.id].title}}</h4>
        <p>{{blog[$route.params.id].content}}</p>
        <p>{{blog[$route.params.id].date}}</p>
    </div>
</template>

<script>
export default {
    name : 'detail',
    props : {
        blog : Array
    },
}

</script>

<style>

</style>