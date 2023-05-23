<template>
  <div class="w-full bg-white h-screen">
    <div class="bg">
      <div class="roulette_outer">
        <div class="roulette_container">
          <img src="/roulette/pointer.png" class="pointer" alt="pointer" />
          <div class="wheelBody" />
          <img src="/roulette/btn.png" class="btn" alt="btn" @click="spin()" />
          <div class="contentCon" />
        </div>
      </div>
    </div>
    <div
      class="flex justify-center text-[rgb(90,5,116)] text-[26px] mx-[17px] flex-col"
    >
      <p class="text-center mt-[12px] font-bold">獎項</p>
      <ul>
        <li
          v-for="(item, index) in award"
          :key="`index${index}`"
          class="flex justify-between items-center text-xl text-[rgb(35,35,35)] mt-3"
        >
          <div class="flex justify-start items-center">
            <span
              class="w-[8px] h-[8px] bg-[rgb(145,68,169)] rounded-full mr-4"
            />
            <span>獎項</span>
          </div>
          <div class="flex justify-end items-center">
            <span class="mr-4">{{ item.award }}</span>
            <span
              ><img src="/roulette/coin.png" class="w-[50px] h-auto"
            /></span>
          </div>
        </li>
      </ul>
      <span v-if="target">您即將抽到{{ target }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      award: [{ award: 1 }, { award: 2 }, { award: 3 }, { award: 4 }],
      angel: 0,
      arr: [1, 4, 3, 2],
      target: null,
    }
  },
  methods: {
    spin() {
      const target = Math.floor(Math.random() * 4) + 1
      console.log('target：', target)
      this.target = target
      const steps = 360 / this.arr.length
      const targetIndex = this.arr.indexOf(target)

      const rotationAngle = steps * targetIndex + 720
      const rotatedArr = [
        ...this.arr.slice(targetIndex),
        ...this.arr.slice(0, targetIndex),
      ]

      this.angel = this.angel + rotationAngle
      this.arr = rotatedArr

      const wheelBody = document.querySelector('.wheelBody')
      wheelBody.style.transition = 'transform 3s ease'
      wheelBody.style.transform = `rotate(${this.angel}deg)`

      const contentCon = document.querySelector('.contentCon')
      contentCon.style.transition = 'transform 3s ease'
      contentCon.style.transform = `rotate(${this.angel}deg)`
      return target
    },
  },
  computed: {},
  mounted() {
    const perAngel = 360 / this.award.length
    const contentCon = document.querySelector('.contentCon')

    this.award.forEach((item, index) => {
      const newChild = document.createElement('div')
      newChild.classList.add('content')
      newChild.style.transform = `rotate(${perAngel * index}deg)`
      const newSpan = document.createElement('span')
      newSpan.textContent = item.award
      newSpan.style.padding = `20px`
      newSpan.style.color = `#fffc6a`
      newChild.appendChild(newSpan)
      contentCon.appendChild(newChild)
    })

    const wheel = document.querySelector('.wheelBody')
    this.award.forEach((item, index) => {
      const patternAngle = perAngel / -2 + index * perAngel
      const newPattern = document.createElement('div')
      newPattern.classList.add('pattern')
      newPattern.style.transform = `rotate(${patternAngle}deg)`

      const newInner = document.createElement('div')
      newInner.classList.add('inner')
      newInner.style.transform = `rotate(${perAngel}deg)`
      newPattern.appendChild(newInner)
      wheel.appendChild(newPattern)
    })
  },
}
</script>

<style scoped>
.bg {
  background-image: url('/roulette/lobby.png');
  @apply w-full bg-cover bg-bottom rounded-b-[40%];
}
.roulette_outer {
  background-image: url('/roulette/backgorund1.png');
  @apply relative pb-[90%] bg-cover bg-center overflow-hidden;
}
.roulette_container {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[65%];
}

.wheelBody {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  -webkit-box-shadow: 0 0 0 8px #ffffaf;
  box-shadow: 0 0 0 8px #ffffaf;
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

/deep/ .content {
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

/deep/ .btn {
  @apply w-[100px] h-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2];
}

/deep/ .pointer {
  top: -15%;
  @apply absolute h-[70px] left-1/2 -translate-x-1/2 z-[2];
}
</style>