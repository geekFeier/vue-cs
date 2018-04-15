
<template>
  <el-container>
     <!-- 导航 -->
      <el-aside :style="{width:num+'px',transition:'.2s'}">
        <!-- <div class="logo">
            
        </div>  -->
        <el-row class="nav-main">
          <el-col>
            <el-menu :default-active="setMenuActive($route.path)" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#35384C" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">

              
              <el-submenu index="1" class="logo">
                <template slot="title">
                  <i class="el-icon-circle-close toggle-icon" @click="toggleBar"></i>
                  <img src="static/images/logo.png" class="logo-img" />
                </template>
              </el-submenu>

              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>货币信息管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/user1">user1</el-menu-item>
                  <el-menu-item index="/user2">user2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            
               
             

              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>注册会员管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>推荐会员管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>委托交易管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>交易所台账管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>充值提现管理（法币）</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="8">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>充值提现管理（货币）</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="9">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>组织机构管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="10">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>系统运营管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="11">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>咨询文章管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="12">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>站内信息管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="13">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>系统管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="14">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>c2c</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="15">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>杠杆</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>

    <el-container> 

      <!-- 头部 -->
      <el-header>
        <Header /> 
      </el-header>

      <!-- 中间内容 -->
      <el-main :style="{'paddingLeft':num+'px',transition:'.2s'}">
        <router-view/>
      </el-main>

      <!-- 底部 -->
      <el-footer>
        footer
      </el-footer>
    </el-container>
  </el-container>

</template>
 <style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 229px;
    min-height: 400px;
  }
</style>
<script>
import Header from "@components/Header";
import "@css/tab.scss";
export default {
    name: "Tab",
    data() {
        return {
            isCollapse: false,
            num:229
        };
    },
    components: {
        Header
    },
    created(){
      if(window.innerWidth < 800) this.toggleBar();//判断浏览器宽度，用来隐藏左部导航
    },
    methods: {
        //设置菜单栏选中
        setMenuActive(path) {
            return path;
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        toggleBar() {
            this.isCollapse = !this.isCollapse;
            
            this.num = this.num == 229 ? 65 : 229;
        }
    }
};
</script>
 