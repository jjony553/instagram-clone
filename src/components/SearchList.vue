<template>
  <div class="search-list">
    <h4>최근 검색 항목</h4>
    <div>
        <span>최근 검색 내역 없음.</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.search-list{
    position: absolute;
    left: -50px;
    top: 50px;
    width: 370px;
    height: 360px;
    background: #fff;
    z-index: 3;
    h4{
        color: #262626;
        font-size: 16px;
        display: flex;
        align-items: left;
        margin-left: 16px;
        margin-bottom: 0;
    }
    div{
        span{
            height: 322px;
            width: 100%;
            color:#8e8e8e;
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
    }
    }
}

</style>