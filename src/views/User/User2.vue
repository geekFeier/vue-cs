
<template>
  <div class="hello">
     我是user2 

  </div>
</template>

<script>

import {user} from '@api/user/index' 
export default {
  name: 'User2', 
  data () {
    return {
    
    };
  },
  mounted(){
     user.userf()
  } 
}
</script>
 