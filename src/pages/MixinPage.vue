<template>
    <div class="page">
  
        <!-- color mixin -->
        <ColorMixin />
  
    </div>
  </template>
  
  <script>
  import ColorMixin from '@/components/ColorMixin'
  
  export default {
    name: 'MixinPage',
    components: {
      ColorMixin
    }
  }
  </script>