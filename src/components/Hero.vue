<template>
  <div class="min-h-screen flex flex-col justify-center items-center gap-5">
    <img class="rounded-full shadow-xl" src="/picture.jpg" width="200px"/>
    <h1 class="text-white font-bold text-4xl">Raúl C. Rivero <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">@iocodz</span></h1>
    <p class="text-white text-center text-lg w-3/4 md:w-1/2">Software Engineer with 5+ years' background passionate about developing user-friendly software applications. Excellent problem-solving skills and ability to perform well in a team.</p>
    <div class="flex gap-5">
      <a v-for="link in socialLinks" :href="link.href">
        <img :src="link.icon" width="30px" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          href: '/linkedin',
          icon: '/linkedin.svg'
        },
        {
          href: '/github',
          icon: '/github.svg'
        },
        {
          href: '/stackoverflow',
          icon: '/stackoverflow.svg'
        },
        {
          href: '/cv',
          icon: '/cv.svg'
        }
      ]
    }
  }
}
</script>