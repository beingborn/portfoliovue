<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">HTML</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
    </nav>

    <div class="container mt-4">
        <h5>프론트엔드 vue 시작하기</h5>
        <p>Vue.js</p>
    </div>
    <router-link to="/list">리스트 페이지</router-link>
    <router-link to="/blogmain">블로그 메인</router-link>
    <router-view :blog="blog"></router-view>
    

    <PageFooter/>
</template>

<script>

import blog from './assets/blog'
import PageFooter from '@/components/PageFooter'
// import List from './components/List.vue'

export default {
  name: 'App',
  data(){
    return {
      blog : blog
    }
  },
  components: {
    PageFooter : PageFooter
    // List: List
  }
}
</script>

<style>
  :is(html, body) {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none!important;
  }

  body {
    font-family: "KoPubDotum", sans-serif!important;
  }
  
  @font-face {
    font-family: KoPubDotum;
    font-weight: 300;
    src: url("./assets/fonts/KoPubWorld-Dotum-Light.woff") format("woff")
  }
    @font-face {
    font-family: KoPubDotum;
    font-weight: 500;
    src: url("./assets/fonts/KoPubWorld-Dotum-Medium.woff") format("woff")
  }
  @font-face {
  font-family: KoPubDotum;
  font-weight: 700;
    src: 
      url("./assets/fonts/KoPubWorld-Dotum-Bold.woff") format("woff"),
  }

</style>
