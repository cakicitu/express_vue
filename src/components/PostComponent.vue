<template>
  <div>
    <p v-if="error">{{error}}</p>
    <p>Posts</p>
    <div style="padding: 10px; border: 1px solid grey;" v-for="post in posts" :key="post.id">{{post.text}} {{post._id}}<button @click="deletePost(post)">delete</button></div>

    <input type="text" v-model="text">
    <button @click="createPost()">Send</button>
  </div>
</template>

<script>
import PostService from '@/PostService';

export default {
  name: 'PostComponent',
  data(){
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created(){
    try{
        this.posts = await PostService.getPosts()
    } catch(error){
        this.error = error.message
    }
  },
  methods: {
    async createPost(){
      await PostService.insertPost(this.text)
      this.posts = await PostService.getPosts()
      this.text = ""
    },
    async deletePost(post){
      await PostService.deletePost(post._id)
      this.posts = await PostService.getPosts()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
