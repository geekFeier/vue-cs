
<template>
  <div class="hello">
     我是首页

  </div>
</template>

<script>

import { user } from '@api/user/index' 
export default {
  name: 'User', 
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
 