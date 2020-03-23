<template>
  <div class="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="selectMenu"
      :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">作业系统</span>
        </template>
        <el-menu-item index="/home">情报处理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">情报系统</span>
        </template>
        <el-menu-item index="info-center">情报中心</el-menu-item>
        <el-menu-item index="info-mine">我的情报</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">任务系统</span>
        </template>
        <el-menu-item index="3-1">任务中心</el-menu-item>
        <el-menu-item index="3-2">我的任务</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">分发系统</span>
        </template>
        <el-menu-item index="4-1">分发中心</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      isCollapse: false
    };
  },
  created() {
  },
  computed: {

  },
  watch: {
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    selectMenu(index, indexPath) {
      console.log(index, indexPath);
      console.log(indexPath, '<---indexPath');
      this.$router.push(`${index}`);
    }
  }
};
</script>

<style lang="stylus" scoped>
.nav
  width 2.5rem
  background yellow

</style>
