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
    description: '@iocodz'
  }
}
</script>