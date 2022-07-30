<template>
  <div class="footer">
    <nav>
      <span>소개</span>
      <span>도움말</span>
      <span>홍보 센터</span>
      <span>API</span>
      <span>채용 정보</span>
      <span class="private">개인정보처리방침</span>
      <span>약관</span>
      <span>위치</span>
      <span>언어</span>
    </nav>
    <span class="copyright">ⓒ 2022 INSTAGRAM FROM META</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 320px;
  color: #C7C7C7;
  font-size: 12px;
  word-break: keep-all;
  nav{

    span:after{
      content: '\00B7';
      margin-left: 5px;
      margin-right: 5px;
    }
    span:last-child::after {
    content: "";
    margin: 0;
  }
  }

.copyright{
  margin-top: 20px;
}
}
</style>
