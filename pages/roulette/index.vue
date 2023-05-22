<template>
  <div class="w-full bg-white h-screen">
    <div class="bg">
      <div class="roulette_outer">
        <div class="roulette_container">
          <img src="/roulette/pointer.png" class="pointer" alt="pointer" />
          <div class="wheelBody" />
          <img src="/roulette/btn.png" class="btn" alt="btn" @click="spin"/>
          <div class="contentCon"/>
        </div>
      </div>
    </div>
    <div class="flex justify-center text-[rgb(90,5,116)] text-[26px] mx-[17px] flex-col" >
      <p class="text-center mt-[12px] font-bold">獎項</p>
      <ul>
        <li v-for="(item,index) in award" :key="`index${index}`" class="flex justify-between items-center text-xl text-[rgb(35,35,35)] mt-3">
          <div class="flex justify-start items-center">
            <span class="w-[8px] h-[8px] bg-[rgb(145,68,169)] rounded-full mr-4" />
            <span>獎項</span>
          </div>
          <div class="flex justify-end items-center">
            <span class="mr-4">{{item.award}}</span>
            <span><img src="/roulette/coin.png" class="w-[50px] h-auto" /></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      segments:[
        {
          'text': '1',
          'icon': '',
          'num': 1
        },
        {
          'text': '2',
          'icon': '',
          'num': 1
        },
        {
          'text': '3',
          'icon': '',
          'num': 1
        },
        {
          'text': '4',
          'icon': '',
          'num': 1
        },
        {
          'text': '5',
          'icon': '',
          'num': 1
        },
        {
          'text': '6',
          'icon': '',
          'num': 1
        },
        {
          'text': '7',
          'icon': '',
          'num': 1
        },
        {
          'text': '8',
          'icon': '',
          'num': 1
        },
        {
          'text': '9',
          'icon': '',
          'num': 1
        },
        {
          'text': '10',
          'icon': '',
          'num': 1
        },
        {
          'text': '11',
          'icon': '',
          'num': 1
        },
        {
          'text': '12',
          'icon': '',
          'num': 1
        },
      ],
      timer : null,
      award:[],
      angel:0,
    };
  },
  computed:{

  },
  created(){
    
  },
};
</script>

<style scoped>
.bg{
  background-image: url('/roulette/lobby.png') ;
  @apply w-full bg-cover bg-bottom rounded-b-[40%]
}
.roulette_outer{
  background-image: url('/roulette/backgorund1.png');
  @apply relative pb-[90%] bg-cover bg-center overflow-hidden
}
.roulette_container {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[65%]
}

.wheelBody {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  -webkit-box-shadow:  0 0 0 8px #ffffaf;
  box-shadow:  0 0 0 8px #ffffaf;
  border-radius: 50%;
  overflow: hidden;
}

.contentCon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-bottom: 100%;
}

/deep/ .content{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

/deep/ .pattern {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
}

/deep/ .wheelBody .pattern:nth-child(2n) .inner {
  background-color: #f9be94;
}

/deep/ .inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #f35151;
  -webkit-transform-origin: right center;
  transform-origin: right center;
}

/deep/ .btn{
  @apply w-[100px] h-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]
}

/deep/ .pointer {
  top:-15%;
  @apply absolute h-[70px] left-1/2 -translate-x-1/2 z-[2]
}
</style>