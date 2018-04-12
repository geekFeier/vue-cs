<template>
		<div class="login" id="Login">
			<h2 @click="loginBtn">点我登录</h2> 
		</div>
</template>
<style scoped>

</style>

<script>

	const TIME_COUNT = 60;
	export default {
		name: 'Login',
		data() {
			return {
				userName:'',     //登录输入用户名
				passWord:'',	 //登录输入密码
				//checked:false,	 //登录记住密码是否选中
				register:true,	 //登录和注册的切换
				oncePassWord:'', //注册设置第一遍密码
				phoneNumber:'',   //输入手机号
				yanzhengma:'',     //验证码
				show: true,
				count: '',
				timer: null,
				form:{},
				auth:{
			        key:"MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJRqAC45zJt7CFWUuRQgA+mm", //加密的key
			        randomKey:'' //生成签名的key
			    },
			    phonesend:{},
			    send:{},

			}
		},
		methods: {
			loginBtn(){
				this.$router.push({ name: 'user1'})
			},
			registerTab(){
				
			},
		},
		mounted: function() {
		
		},
		computed:{
			
		},
		watch:{
		
		}
	}
</script>