<template>

  <nav>
    <ul class="nav">
      <li v-for="(item, i) in menus" :key="i"><a href="#">{{i+1}}. {{item}}</a></li>
    </ul>
  </nav>

  <transition name="fade">
    <Discount />
  </transition>

  <button @click="priceLowSort" class="btn">가격 낮은순</button>
  <button @click="priceHighSort" class="btn">가격 높은순</button>
  <button @click="sortBack" class="btn">되돌리기</button>

  <Card @openModal="layer=true; clickRoomNo=$event" :oneRooms="oneRooms[i]" v-for="(item, i) in oneRooms" :key="i" />

  <!-- <div class="start" :class="{ end : layer }">
        </div> 조건부 클래스 부여 : layer가 true일 때 end 클래스 실행  -->
  <transition name="fade">
    <Modal @closeModal="myModalClose" :oneRooms="oneRooms" :clickRoomNo="clickRoomNo" :layer="layer" />
  </transition>

  <!--  1.props 전송 : :작명="데이터명" / 작명="문자자료" / :작명="숫자자료" -->
  <!--  2.custom event는 자식이 부모에게 메시지를 보내는 것. 부모가 받을때는 @작명="처리할 것 기술" 하거나, 메소드에서 함수로 만들어서 @받아온작명="함수명" 처리할 수도 있다 -->
</template>

<script>
import oneRoom from './assets/oneroom.js';
import Discount from './components/Discount.vue';  //컴포넌트 사용법 1.import 2. components에 등록 3. 사용
import Modal from './components/Modal.vue';
import Card from './components/Card.vue';


export default {
  //JS 이름설정
  name: 'App',

  //data 초기선언
  data() {
    return { //react에서는 state라고 불림
      
      menus: ['Home', 'Shop', 'About'],
      layer: false,
      oneRoomsOriginal : [...oneRoom],  //사본을 하나 만들어둠 
      oneRooms : oneRoom,
      clickRoomNo : 0,
    }
  },

  //함수선언
  methods: { 
    myModalClose() {
      this.layer = false
    },

    priceLowSort() {
      this.oneRooms.sort(function(a,b){
        return a.price - b.price
      })
    },

    priceHighSort() {
      this.oneRooms.sort(function(a,b){
        return b.price - a.price
      })
    },
    sortBack() {
      this.oneRooms = [...this.oneRoomsOriginal]
    },
    // plusSaleFunc() {
    //   console.log(this.salePercent)
    //   let interval = setInterval(()=>{ //안의 내용에서 this를 쓸 일이 있는 경우 arrow펑션을 써야 함
      
    //     this.salePercent--;
    //     if (this.salePercent == 0) {
    //       clearInterval(interval);
    //       this.showDiscount = false
    //     }
    //   }, 1000)
    // }
  },

  //lifecycle hook 방법, 서버에서 데이터 가져올때 
  created(){ 

  },
  
  //lifecycle hook 방법, mounted : html 랜더링이 마운트완료되었을 때 실행
  // mounted(){
  //   setTimeout(()=>{ //안의 내용에서 this를 쓸 일이 있는 경우 arrow펑션을 써야 함 
  //     this.plusSaleFunc()
  //   }, 2000)
  // },

  //lifecycle hook 방법, 데이터가 변경되어 재랜더링될 때, 다른페이지이동이나 컴포넌트삭제 시에는 unmount 단계 
  updated(){

  },

  // import해온 컴포넌트 선언 
  components: {
    Discount: Discount,  //왼쪽은 작명, 명칭이 같을 경우 Discount, 로만 써도 무방
    Modal: Modal, 
    Card: Card,
  }
}
</script>

<style lang="scss">
div {
  box-sizing: border-box;
}
.nav {
  display:flex;
  justify-content: center;
  padding:15px;
  background-color:$primary-background-color;
  border-radius:6px;

  li {
    list-style:none;

    a {
      padding:10px;
      text-decoration: none;
      color:$button-text-color;

      &:hover {
        text-decoration:underline
      }
    }
  }
}

.room-img {
  width:100%;
}

.start {
    opacity:0;
    transition: all 1s
}

.end {
    opacity:1
}

/* transition의 name을 앞에 붙여줌 */
.fade-enter-from {
  /* transform: translateY(-1000px) */
  opacity:0;
}

.fade-enter-active {
  transition: all 1s
}

.fade-enter-to {
  /* transform: translateY(0px) */
  opacity:1;
}

.fade-leave-from {
  opacity:1;
}

.fade-leave-active {
  transition: all 1s
}

.fade-leave-to {
  opacity:0;
}
</style>
