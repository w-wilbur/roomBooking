<template>
	<div>
		<el-container>
			<el-main>
				<div class='pannel'>
					<p style="font-size:20px;">Mobile Now meeting room</p>
					<el-tabs type="border-card">
  						<el-tab-pane label="登录">
  							<el-form ref='form'>
  								<el-form-item>
  									<el-input type="text" v-model='form.name' placeholder="请输入用户名"></el-input>
  								</el-form-item>
  								<el-form-item>
  									<el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
  								</el-form-item>
  								<el-form-item style="margin-bottom:10px;">
  									<el-button type="primary" @click="signIn" style="width:100%;">登录</el-button>
  								</el-form-item>
  							</el-form>
  						</el-tab-pane>
  						<el-tab-pane label="注册">
  							<el-form ref='form'>
  								<el-form-item>
  									<el-input type="text" v-model='form.name' placeholder="请输入用户名"></el-input>
  								</el-form-item>
  								<el-form-item>
  									<el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
  								</el-form-item>
  								<el-form-item>
  									<el-input type="password" v-model="form.repassword" placeholder="请再次输入密码"></el-input>
  								</el-form-item>
  								<el-form-item style="margin-bottom:10px;">
  									<el-button type="primary" @click="register" style="width:100%;">注册</el-button>
  								</el-form-item>
  							</el-form>
  						</el-tab-pane>
					</el-tabs>
				</div>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					password: '',
					repassword: ''
				}
			}
		},
		methods: {
			signIn() {
				console.log(this.form.name);
			},
			register() {
				console.log("注册成功！");
			}
		}
	}
</script>
<style scoped>

	.pannel{
		/*width: 400px;
		margin: 0 auto;
		padding: 20px;
		border: 1px solid #409EFF;*/
		width: 500px;
		margin: 0 auto;
		margin-top: 60px;
	}
</style>