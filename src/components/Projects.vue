<template>
  <div class="min-h-screen flex flex-col justify-center items-center gap-5 py-20 bg-secondary">
    <h2 class="text-white font-bold text-4xl">Projects</h2>
    <p class="text-white text-center text-lg w-3/4 md:w-1/2">I love developing side-projects, it's one of the ways I can experience new technologies. Here you will find a list with my latest.</p>
    <div class="flex flex-wrap justify-center gap-5 w-2/3">
      <a class="relative h-84 w-96 overflow-hidden" v-for="project in projects" :href="project.href">
        <img class="object-cover min-h-full min-w-full rounded" :src="project.image" :alt="project.title" />
        <div class="absolute text-white flex flex-col justify-center gap-2 h-full w-full top-0 bottom-0 bg-gray-900 bg-opacity-80 rounded p-4 md:p-10 opacity-100 md:opacity-0 hover:opacity-100 transition-opacity">
            <h3 class="text-xl font-bold">{{project.title}}</h3>
            <p>{{project.description}}</p>
            <p>{{project.tech}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Dota2 API',
          description: 'Basic API created using scraping techniques on the liquipedia.net web.',
          tech: 'Node · Serverless · Scraping',
          href: 'https://github.com/iocodz/dota2-free-data-api',
          image: '/project/dota2api.png'
        },
        {
          title: 'Link Zone Desktop',
          description: 'Electron App to manage the Alcatel Link Zone using its API. Better UI/UX than default device management.',
          tech: 'Electron · Next.js · Tailwind CSS',
          href: 'https://github.com/iocodz/link-zone-desktop',
          image: '/project/linkzonedesktop.png'
        },
        {
          title: 'Task Time Tracker',
          description: 'Multiplatform desktop application. Keep track of the time you spend solving your tasks.',
          tech: 'Electron · Next.js · Tailwind CSS',
          href: 'https://github.com/iocodz/task-time-tracker',
          image: '/project/ttt.png'
        },
        {
          title: 'Serverless API Docs',
          description: 'Node Module to create the documentation of serverless apis "automatically". Great for Vercel and Netlify functions.',
          tech: 'Node · NPM',
          href: 'https://github.com/iocodz/serverless-functions-api-docs',
          image: '/project/serverless.png'
        },
        {
          title: 'Drunk Note',
          description: 'Web application to manage your account in bars and restaurants.',
          tech: 'Vue · Tailwind CSS',
          href: 'https://drunknote.xyz',
          image: '/project/drunknote.png'
        }
      ]
    }
  }
}
</script>