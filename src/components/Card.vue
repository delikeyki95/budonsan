<template>
  <div class="box-list">
    <div class="box">
      <img :src="oneRooms.image" class="room-img" />
      <h2 @click="$emit('openModal', oneRooms.id)">{{ oneRooms.id + 1 }}. {{ oneRooms.title }}</h2>
      <div>{{ (oneRooms.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }} 만원</div>
      <button @click="increase(i)" class="btn">허위매물 신고</button>
      <span>신고수 {{ reportsHere[i] }}</span>
    </div>
  </div>

    <!-- 
    1. 데이터 바인딩은 무조건 아래에 데이터가 있어야 한다. 따라서 데이터 정의는 가져다 써야함 : props문법 Modal.vue는 자식컴포넌트, App.vue는 부모컴포넌트 / 1.데이터전송 2.props에 등록 3. 사용 
    2. layer 데이타를 부모에서 사용하면 부모에서 정의하는 것이 필요
    3. props 데이터는 리드온니라서 수정이 안됨. => Custom Event를 사용하면 된다. 자식이 부모에게 메시지를 보낸다는 개념 $emit()
    -->
</template>

<script>
export default {
    name: "Card",
    data() {
        return {
            i: 0,
            reportsHere: [0,0,0,0,0,0],
        }
    },
    props : {
        oneRooms : Object,
        // layer: Boolean,  //props는 재할당이 안됨, Read-Only임
    },
    methods : {
        increase(prop) {
            this.reportsHere[prop]++; //this는 default 객체를 가르킴 
        }
    },
}
</script>

<style>
.box-list {
  display:flex;
  flex-wrap:wrap;
}

.box {
  width:100%;
  margin:10px auto;
  text-align:center;
}
</style>