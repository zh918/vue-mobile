<template>
    <div class="container">
        <div> 
            <router-view></router-view>            
        </div> 
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {}
        },
        created() {
            console.log('layout')
        },
        components: {}
    }
</script>

<style type="text/css" lang="less" scoped>

    /*页面公共layout(留出navbar位置)*/
    .container { 
        position: fixed;
        top: 4.4rem;
        bottom: 0;
        left: 0;
        right: 0;  
        width: 100%;
        margin: auto;

        > div {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: auto;
        }
    }

    /* .container { 
        position: absolute;
        top: 4.4rem;
        bottom: 0;
        left: 0;
        right: 0;   
    }*/
</style>