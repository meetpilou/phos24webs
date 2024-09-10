<template>
  <UiBlock class="section-gallery relative">
    <div ref="container" class="col-span-10 md:col-span-8 md:col-start-2 lg:col-span-12 lg:col-start-3 antialiasing">
      <swiper-container ref="swiper" init="false" class="overflow-hidden">
        <swiper-slide v-for="(image, i) in content.images" :key="i" class="overflow-hidden">
          <UiImage :image="image" class="antialiasing" data-swiper-parallax="-15%" />
        </swiper-slide>
      </swiper-container>
      <nav class="absolute bottom-0 left-0 right-0 flex-between-center p-1 z-10">
        <button ref="prev" :class="buttonClasses">
          <Icon
            class="group-hover:-translate-x-1"
            :class="iconClasses"
            name="material-symbols:arrow-left-alt-rounded"
          />
        </button>
        <button ref="next" :class="buttonClasses">
          <Icon
            :class="iconClasses"
            class="group-hover:translate-x-1"
            name="material-symbols:arrow-right-alt-rounded"
          />
        </button>
      </nav>
    </div>
    <div ref="overlay" class="bg-white fit z-20 antialiasing" />
  </UiBlock>
</template>

<script setup>
import { Autoplay, Mousewheel, EffectCreative } from 'swiper/modules'
import useScrollClipAnimation from '~/composables/useScrollClipAnimation'
const { targetElement: container, animatedElement: overlay } = useScrollClipAnimation()

const swiper = ref(null)
const prev = ref(null)
const next = ref(null)
const scrollbar = ref(null)

const buttonClasses = [
  'w-20',
  'h-20',
  'group',
  'text-black',
  'bg-white',
  'flex-center-center',
  'hover:scale-95',
  'duration-300',
  'transition-transform',
]

const iconClasses = ['group-hover:text-3xl', 'text-2xl', 'transition-all', 'duration-300']

const props = defineProps({
  content: {
    type: Object,
    required: true,
    default: {
      type: 'landscape', // landscape | portrait
      images: [],
      text: '',
    },
  },
})

onMounted(async () => {
  const params = {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    centeredSlides: true,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
    cssMode: false,
    direction: 'horizontal',
    draggable: true,
    easing: 'ease-in-out',
    effect: 'creative',
    lazy: true,
    loop: true,
    focusableElements: false,
    init: false,
    grabCursor: true,
    modules: [Autoplay, Mousewheel, EffectCreative],
    mousewheel: {
      enabled: true,
      forceToAxis: true,
    },
    navigation: {
      prevEl: useElement(prev),
      nextEl: useElement(next),
      disabledClass: '!text-black/10',
    },
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // spaceBetween: '25%',
    speed: 800,
    threshold: 0.3,
    touchRatio: 1,
    watchOverflow: true,
    injectStyles: [
      `
      .swiper {
        overflow: hidden;
      }
    `,
    ],
  }

  Object.assign(swiper.value, params)
  swiper.value.initialize()
})

// const innerClasses = computed(() => {
//   const classes = []

//   if (props.content.type === 'landscape') {
//     classes.push('container-center-14')
//   }

//   if (props.content.type === 'portrait') {
//     classes.push('container-center-6')
//   }
//   return classes
// })

// const textClasses = computed(() => {
//   const classes = ['pt-7']

//   if (props.content.type === 'landscape') {
//     classes.push('lg:w-[70%]')
//   }

//   if (props.content.type === 'portrait') {
//     classes.push('lg:w-[100%]')
//   }

//   return classes
// })
</script>
