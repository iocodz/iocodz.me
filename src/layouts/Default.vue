<template>
  <div class="bg-primary">
    <slot/>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  components: { Footer }
}
</script>