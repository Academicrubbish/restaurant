<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-active-icon"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path)
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 50px;
    font-size: 15px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 50px;
  }
</style>
