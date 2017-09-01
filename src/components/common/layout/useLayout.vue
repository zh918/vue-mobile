<template>
    <div class="container">
        <router-view></router-view>
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

    .container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>