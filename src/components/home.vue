<template>
    <div>
        <h1>home</h1>
         <el-button type="info" @click='backOut'> 退出 </el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        backOut(){

            window.sessionStorage.removeItem('token')
             this.$router.push('/login')

        }
    }
};
</script>

<style scoped lang="less">

</style>
