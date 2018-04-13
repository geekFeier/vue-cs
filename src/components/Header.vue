<template>
  <div class="header">

    <div class="header-nav">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-submenu index="1">
          <template slot="title">更多应用</template>
          <el-menu-item index="2-1">  <i class="fa fa-user-circle" aria-hidden="true"></i> 数字货币业务 </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><img src="../../static/images/user.jpg" class="admin-img"/> admin</template>
          <el-menu-item index="2-1">  <i class="fa fa-user-circle" aria-hidden="true"></i> 个人中心 </el-menu-item>
          <el-menu-item index="2-1">  <i class="fa fa-user-circle" aria-hidden="true"></i> 设置 </el-menu-item>
          <el-menu-item index="2-1">  <i class="fa fa-user-circle" aria-hidden="true"></i> 退出 </el-menu-item>
        </el-submenu> 
      </el-menu> 
    </div>

  </div>
</template>

<script>
import "@css/font-awesome-4.7.0/css/font-awesome.min.css";
import "@css/header.scss"
export default {
    name: "Header",
    data() {
        return {};
    },
    methods: {}
};
</script>
 