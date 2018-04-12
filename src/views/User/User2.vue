
<template>
  <div class="hello">
     我是user2
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>

  </div>
</template>

<script>

import {user} from '@api/user/index' 
export default {
  name: 'User2', 
  data () {
    return {
      radio: '选中且禁用'
    };
  },
  mounted(){
     user.userf()
  } 
}
</script>
 