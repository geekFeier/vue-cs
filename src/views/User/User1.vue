
<template>
  <div class="hello">
     我是user1  
  </div>
</template>

<script>

import {user} from '@api/user/index' 
export default {
  name: 'User1', 
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
 