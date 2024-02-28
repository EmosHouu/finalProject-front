<template>
    <div class="footer">
        <div class="option">
            <div
class="op"
@click="navigateToHome"
>首頁</div>
            <div
class="op"
@click="navigateToPlay"
>揪團玩</div>
            <div
class="op"
@click="navigateToDrive"
>揪團行</div>
            <div
class="op"
@click="navigateToBuy"
>揪團買</div>
            <div
class="op"
@click="navigateToHotel"
>揪團住</div>
        </div>
        <div class="copyright">Copyright © 2010-2024 JPGO Company S.L. All rights reserved.</div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const navigateToHome = () => {
  router.push('/') // 导航到首页
}
const navigateToPlay = () => {
  router.push('/play') // 导航到 PlayView
}
const navigateToDrive = () => {
  router.push('/drive') // 导航到 driveView
}
const navigateToBuy = () => {
  router.push('/buy') // 导航到 driveView
}
const navigateToHotel = () => {
  router.push('/hotel') // 导航到 driveView
}
</script>
<style scoped>
    .footer{
        width:100%;
        /* height:; */
        height:250px;
        background-image: url(../assets/footer.png);
        background-size: cover;
        background-color: #FFEFE8;
        position: relative;
        object-fit: cover;
    }
    .option{
        display: flex;
        justify-content: end;
        position: absolute;
        top:150px;
        right:10px;
    }
    .op{
        font-size: 16px;
        font-weight: bold;
        margin:10px;
        color:#5F231B;
    }
    .op:hover{
        cursor: pointer;
    }
    .copyright{
        position: absolute;
        top:200px;
        right:20px;
        font-size:12px;
    }
</style>
