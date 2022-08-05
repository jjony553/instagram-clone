<template>
    <ul class="menu">
        <li>프로필</li>
        <li>저장됨</li>
        <li>설정</li>
        <div class="divider"></div>
        <li>로그아웃</li>
    </ul>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.menu{
    position: absolute;
    right: 5px;
    top: 25px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    list-style: none;
    margin: 0;
    border-radius: 5px;
    li{ 
        display: flex;
        justify-content: start;
        align-items: center;
        width: 180px;
        height: 37px;
        color: #262626;
        font-size: 14px;
        font-weight: 600;
        margin-left: 16px;
    }
    .divider{
        width: 100%;
        background: #bdbdbd;
        height: 1px;
        margin:  0px 0px 0 0px;
    }
}
</style>