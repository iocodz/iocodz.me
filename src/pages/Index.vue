<template>
  <Layout>
    <Hero />
    <Projects />
  </Layout>
</template>

<script>
import Hero from '../components/Hero'
import Projects from '../components/Projects'
export default {
  components: { Hero, Projects },
  metaInfo: {
    title: 'Raúl C. Rivero',
    meta: [
      {
        name: 'author',
        content: 'Raúl C. Rivero | @iocodz'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Software Engineer with 5+ years background passionate about developing user-friendly software applications.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Software Engineer with 5+ years background passionate about developing user-friendly software applications.'
      },
      {
        key: 'og:url',
        name: 'og:url',
        content: 'https://iocodz.me/picture.jpg',
      }
    ],

  }
}
</script>