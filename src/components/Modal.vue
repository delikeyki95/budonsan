<template>
<!-- modal -->
  <div class="black-bg" v-if="layer == true">
    <div class="white-bg">
      <img :src="oneRooms[clickRoomNo].image" class="room-img" /> <!-- 데이터 바인딩은 무조건 아래에 데이터가 있어야 한다. 따라서 데이터 정의는 가져다 써야함 : props문법 Modal.vue는 자식컴포넌트, App.vue는 부모컴포넌트 / 1.데이터전송 2.등록 3. 사용 -->
      <h3>{{ oneRooms[clickRoomNo].title }}</h3>
      <p>{{ oneRooms[clickRoomNo].content }}</p>
      <!-- <input @input="month = $event.target.value" /> 이벤트리스너 달기, 아래와 같이 v-model로 사용하면 된다 -->
      <input v-model.number="month" />
      <!-- <select v-model.number="month">
        <option>1</option>
        <option>3</option>
        <option>6</option>
        <option>12</option>
      </select> -->
      <div>{{ month }}개월 선택 :  {{ (oneRooms[clickRoomNo].price * month).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }} 원</div>
      <button type="button" @click="$emit('closeModal')">Close</button> 
    </div>
  </div>
</template>

<script>
export default {
    name: "Modal",
    data() {
        return {
            month: 1,
        }
    },
    watch : { //자동 감시
        month(a){ //함수명과 자료명을 동일하게 함, (변경 후 데이터, 변경 전 데이터)
            if(typeof a == 'string') {
                alert("숫자만 입력하세요.");
                // this.month = 0
            } else if ( a >= 13) {
                alert("최대 12개월입니다.")
                this.month = 12
            }
        }
    },
    props : {
        oneRooms : Array, //받아온 데이터의 형식을 정의
        clickRoomNo : Number,
        layer: Boolean,  //props는 재할당이 안됨, Read-Only임
    },
    beforeUpdate() {
      if(this.month == 2) {
        alert("2개월은 판매하지 않습니다.")
        this.month = 1
      }
    },
}
</script>

<style>
.black-bg {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.5);
  padding:20px;
}

.white-bg {
  width:100%;
  padding:20px;
  background:#fff;
  border-radius:10px;
  text-align:center;
}
</style>