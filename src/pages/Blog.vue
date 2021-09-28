<template>
    <Layout>
        <h1>Blog</h1>
        <article v-for="edge in $static.allPost.edges" :key="edge.node.id" style="margin-bottom: 2em;">
          <g-image :src="edge.node.cover_image" style="width:100%;"/>
          <h2>{{edge.node.title}}</h2>
          <p>{{edge.node.excerpt}}</p>
          <p>Posted {{edge.node.date}} - {{edge.node.timeToRead}} min read</p>
          <div>
            <g-link style="padding-right:.5em;" v-for="tag in edge.node.tags" :to="tag.path" :key="tag.id">#{{tag.id}}</g-link>
          </div>
          <g-link :to="edge.node.path">Read Post</g-link>
            <!-- <div v-html="edge.node.content"/> -->
        </article>
    </Layout>
</template>

<static-query>
{
  allPost {
    edges {
      node {
        id
        title
        excerpt
        date (format: "MMMM Do, YYYY")
        tags {
          id
          path
        }
        timeToRead
        path
        cover_image (width: 1000, height: 300, quality: 80, blur: 50)
      }
    }
  }
}
</static-query>