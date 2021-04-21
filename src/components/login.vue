<template>
<div class="login_container">
    <div class="login_box">
        <div class="avater_box">
        <img src="../assets/logo.png" alt="">
    </div>
    <el-form ref="form" label-width="0px" :model="loginForm" :rules="rules">
        <!-- 用户名 -->
    <el-form-item label="" prop="username">
        <el-input v-model="loginForm.username"></el-input>
    </el-form-item>
    <!-- 密码 -->
    <el-form-item label="" prop="password" >
        <el-input v-model="loginForm.password" type='password'></el-input>
    </el-form-item>
    <!-- 按钮 -->

     <el-form-item label="" id='btns'>
          <el-button type="primary" @click='login'>登入</el-button>
            <el-button type="danger" @click='resetFrom'>预设</el-button>
     </el-form-item>


    </el-form>
    
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            //数据绑定
            loginForm:{ 
            username:'admin',
            password:'123456'
            },
            rules:{
                username: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
                ],
            }
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        resetFrom(){
            console.log(this);
            this.$refs.form.resetFields();
        },
        login(){
            // console.log( this.$refs.form);
            this.$refs.form.validate( async(valid)=>{
                // console.log(valid);
                if(!valid) return this.$message.error(`错误`);
                const {data:res} = await this.$http.post('login',this.loginForm)
                console.log(res);
                if(res.meta.status !==200) return this.$message.error(`请连线`);
                 this.$message.success(`OK`)
                 window.sessionStorage.setItem('token',res.data.token)
                 this.$router.push('/home')
            })
        }
    }
};
</script>

<style scoped lang="less" scoped>
    .login_container{
        height: 100%;
            background-color: teal;
            .login_box{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                width: 600px;
                height: 350px;
                background-color: #fff;
                .avater_box{
                    position: absolute;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    width: 200px;
                    height: 200px;
                    border: 20px solid #ccc ;
                    border-radius: 50%;
                    background-color: #fff;
                    overflow: hidden;
                }
            }
    }
    .el-form{
        position: absolute;
        left: 50%;
        bottom: 10%;
        width: 100%;
        transform: translate(-50%);
        padding: 0px 40px;
        box-sizing: border-box;
    }
    #btns{
        display: flex;
        justify-content: flex-end;
    }
</style>

