<template>
  <div class="flex-start-center gap-1 max-lg:justify-start">
    <ShareNetwork
      v-for="network in networks"
      :key="network.id"
      tag="button"
      :network="network.id"
      :url="url"
      :title="title"
      :description="description"
      class="flex-center-center group pointer-events-auto h-12 w-12 rounded-full bg-white transition-colors duration-500"
      :class="network.color"
      @click="handleClick(network)"
    >
      <Icon
        class="text-black transition-colors duration-500 group-hover:text-white"
        size="20"
        :name="network.icon"
      />
    </ShareNetwork>
  </div>
</template>

<script setup>
import ShareNetwork from 'vue-social-sharing/src/share-network'
const networks = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: 'uil:facebook-f',
    color: 'hover:bg-[#3b5998]',
  },
  {
    id: 'messenger',
    name: 'Messenger',
    icon: 'uil:facebook-messenger',
    color: 'hover:bg-[#1877f2]',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: 'uil:whatsapp',
    color: 'hover:bg-[#25d366]',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: 'ri:twitter-x-fill',
    color: 'hover:bg-[#000]',
  },
]

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const { appHost } = useUnanimConfig()
const route = useRoute()
const url = `${appHost}${route.fullPath}`

const handleClick = (network) => {
  pushEvent('share', {
    content_name: props.title,
    content_category: network.name,
  })
}
</script>
