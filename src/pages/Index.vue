<template>
  <Layout>
    <h1>{{title}}</h1>
    <p>{{description}}</p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
    description: '@iocodz'
  },
  data() {
    return {
      title: 'Hello World!',
      description: '@iocodz'
    }
  }
}
</script>