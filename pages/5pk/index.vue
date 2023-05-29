<template>
  <div>
    <div class="px-2 py-2" @click="GameStart">GameStart</div>
    <div class="flex flex-wrap justify-center">
      <img 
        v-for="selectedCard in selectedCards"
        :key="selectedCard.path"
        :src="selectedCard.path"
        @click="selectedChangeCard(selectedCard)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deck: [
        {
          suit: '♠',
          rank: 'A',
          point: 1,
          path: '/poker/Spades/1.jpg',
        },
        {
          suit: '♠',
          rank: '2',
          point: 2,
          path: '/poker/Spades/2.jpg',
        },
        {
          suit: '♠',
          rank: '3',
          point: 3,
          path: '/poker/Spades/3.jpg',
        },
        {
          suit: '♠',
          rank: '4',
          point: 4,
          path: '/poker/Spades/4.jpg',
        },
        {
          suit: '♠',
          rank: '5',
          point: 5,
          path: '/poker/Spades/5.jpg',
        },
        {
          suit: '♠',
          rank: '6',
          point: 6,
          path: '/poker/Spades/6.jpg',
        },
        {
          suit: '♠',
          rank: '7',
          point: 7,
          path: '/poker/Spades/7.jpg',
        },
        {
          suit: '♠',
          rank: '8',
          point: 8,
          path: '/poker/Spades/8.jpg',
        },
        {
          suit: '♠',
          rank: '9',
          point: 9,
          path: '/poker/Spades/9.jpg',
        },
        {
          suit: '♠',
          rank: '10',
          point: 10,
          path: '/poker/Spades/10.jpg',
        },
        {
          suit: '♠',
          rank: 'J',
          point: 11,
          path: '/poker/Spades/11.jpg',
        },
        {
          suit: '♠',
          rank: 'Q',
          point: 12,
          path: '/poker/Spades/12.jpg',
        },
        {
          suit: '♠',
          rank: 'K',
          point: 13,
          path: '/poker/Spades/13.jpg',
        },
        {
          suit: '♣',
          rank: 'A',
          point: 1,
          path: '/poker/Club/1.jpg',
        },
        {
          suit: '♣',
          rank: '2',
          point: 2,
          path: '/poker/Club/2.jpg',
        },
        {
          suit: '♣',
          rank: '3',
          point: 3,
          path: '/poker/Club/3.jpg',
        },
        {
          suit: '♣',
          rank: '4',
          point: 4,
          path: '/poker/Club/4.jpg',
        },
        {
          suit: '♣',
          rank: '5',
          point: 5,
          path: '/poker/Club/5.jpg',
        },
        {
          suit: '♣',
          rank: '6',
          point: 6,
          path: '/poker/Club/6.jpg',
        },
        {
          suit: '♣',
          rank: '7',
          point: 7,
          path: '/poker/Club/7.jpg',
        },
        {
          suit: '♣',
          rank: '8',
          point: 8,
          path: '/poker/Club/8.jpg',
        },
        {
          suit: '♣',
          rank: '9',
          point: 9,
          path: '/poker/Club/9.jpg',
        },
        {
          suit: '♣',
          rank: '10',
          point: 10,
          path: '/poker/Club/10.jpg',
        },
        {
          suit: '♣',
          rank: 'J',
          point: 11,
          path: '/poker/Club/11.jpg',
        },
        {
          suit: '♣',
          rank: 'Q',
          point: 12,
          path: '/poker/Club/12.jpg',
        },
        {
          suit: '♣',
          rank: 'K',
          point: 13,
          path: '/poker/Club/13.jpg',
        },
        {
          suit: '♥',
          rank: 'A',
          point: 1,
          path: '/poker/Heart/1.jpg',
        },
        {
          suit: '♥',
          rank: '2',
          point: 2,
          path: '/poker/Heart/2.jpg',
        },
        {
          suit: '♥',
          rank: '3',
          point: 3,
          path: '/poker/Heart/3.jpg',
        },
        {
          suit: '♥',
          rank: '4',
          point: 4,
          path: '/poker/Heart/4.jpg',
        },
        {
          suit: '♥',
          rank: '5',
          point: 5,
          path: '/poker/Heart/5.jpg',
        },
        {
          suit: '♥',
          rank: '6',
          point: 6,
          path: '/poker/Heart/6.jpg',
        },
        {
          suit: '♥',
          rank: '7',
          point: 7,
          path: '/poker/Heart/7.jpg',
        },
        {
          suit: '♥',
          rank: '8',
          point: 8,
          path: '/poker/Heart/8.jpg',
        },
        {
          suit: '♥',
          rank: '9',
          point: 9,
          path: '/poker/Heart/9.jpg',
        },
        {
          suit: '♥',
          rank: '10',
          point: 10,
          path: '/poker/Heart/10.jpg',
        },
        {
          suit: '♥',
          rank: 'J',
          point: 11,
          path: '/poker/Heart/11.jpg',
        },
        {
          suit: '♥',
          rank: 'Q',
          point: 12,
          path: '/poker/Heart/12.jpg',
        },
        {
          suit: '♥',
          rank: 'K',
          point: 13,
          path: '/poker/Heart/13.jpg',
        },
        {
          suit: '♦',
          rank: 'A',
          point: 1,
          path: '/poker/Square/1.jpg',
        },
        {
          suit: '♦',
          rank: '2',
          point: 2,
          path: '/poker/Square/2.jpg',
        },
        {
          suit: '♦',
          rank: '3',
          point: 3,
          path: '/poker/Square/3.jpg',
        },
        {
          suit: '♦',
          rank: '4',
          point: 4,
          path: '/poker/Square/4.jpg',
        },
        {
          suit: '♦',
          rank: '5',
          point: 5,
          path: '/poker/Square/5.jpg',
        },
        {
          suit: '♦',
          rank: '6',
          point: 6,
          path: '/poker/Square/6.jpg',
        },
        {
          suit: '♦',
          rank: '7',
          point: 7,
          path: '/poker/Square/7.jpg',
        },
        {
          suit: '♦',
          rank: '8',
          point: 8,
          path: '/poker/Square/8.jpg',
        },
        {
          suit: '♦',
          rank: '9',
          point: 9,
          path: '/poker/Square/9.jpg',
        },
        {
          suit: '♦',
          rank: '10',
          point: 10,
          path: '/poker/Square/10.jpg',
        },
        {
          suit: '♦',
          rank: 'J',
          point: 11,
          path: '/poker/Square/11.jpg',
        },
        {
          suit: '♦',
          rank: 'Q',
          point: 12,
          path: '/poker/Square/12.jpg',
        },
        {
          suit: '♦',
          rank: 'K',
          point: 13,
          path: '/poker/Square/13.jpg',
        },
      ],
      selectedCards: [],
    }
  },
  methods: {
    GameStart() {
      while (this.selectedCards.length < 5) {
        const randomIndex = Math.floor(Math.random() * this.deck.length) // 隨機生成索引值
        const card = this.deck[randomIndex] // 從 deck 陣列中取出對應索引的值
        console.log(randomIndex)
        console.log(card)

        // 確保選擇的值不重複
        if (!this.selectedCards.includes(card)) {
          this.selectedCards.push(card) // 將選擇的值添加到 selectedCards 陣列中
        }
      }
      console.log(this.selectedCards)
    },
    selectedChangeCard(selectedCard){
        console.log(selectedCard);
    }
  },
  created() {},
}
</script>