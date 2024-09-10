<template>
  <div :class="classes" v-html="text" />
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  inverted: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => ['ui-text', { inverted: props.inverted }])
</script>

<style lang="postcss">
.ui-text {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply mb-[0.5em] font-title font-regular uppercase leading-none text-pretty;
  }
  h1 {
    @apply text-5xl;
  }
  h2 {
    @apply text-4xl;
  }
  h3 {
    @apply text-3xl;
  }
  h4 {
    @apply text-2xl;
  }
  h5 {
    @apply text-xl;
  }
  h6 {
    @apply text-lg;
  }

  p + h1,
  p + h2,
  p + h3,
  p + h4,
  p + h5,
  p + h6,
  ul,
  ol {
    @apply mt-8;
  }

  ul,
  ol {
    @apply mb-4;
  }

  p + ul,
  p + ol,
  p + p {
    @apply mt-4;
  }

  li + li {
    @apply mt-2;
  }

  li {
    @apply relative pl-8 text-pretty;

    &::before {
      @apply absolute left-0 top-[0.45em] block h-2 w-2 rounded-full bg-gold-500 content-[''];
    }
  }

  a {
    @apply cursor-pointer underline;
  }

  strong {
    @apply font-bold;
  }

  blockquote {
    @apply mt-24 mb-8 font-text font-400 text-5xl leading-tight relative text-pretty;

    &:before {
      @apply content-['“'] absolute top-0 -left-8  text-5xl text-gold;
    }

    &:after {
      @apply content-['”'] absolute -bottom-14 right-0 text-5xl text-gold;
    }
  }

  blockquote + p {
    @apply font-title font-regular text-xs flex justify-start items-start flex-col uppercase leading-none m-0 mb-24;
  }

  cite {
    @apply font-title font-regular text-xs not-italic uppercase leading-none text-gold;
  }

  p,
  li {
    @apply text-white leading-normal font-text font-200 text-lg;
  }

  p {
    @apply text-justify;
  }

  &.inverted p,
  &.inverted li {
    @apply text-black;
  }
}
</style>
