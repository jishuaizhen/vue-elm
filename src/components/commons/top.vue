<template>
    <div class="top">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .top{
        height:90px;
        width:100%;
        background: #3190E8;
        position:fixed;
        left:0px;
        top:0px;
        z-index: 10;
    }
    .top .content{
        width: 95%;
        margin:0px auto;
        display:flex;
        flex-direction: row;
        justify-content:space-between;
        line-height: 90px;
        font-size: 30px;
        color:white;
    }
</style>
