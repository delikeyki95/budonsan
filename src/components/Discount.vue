<template>
    <div class="discount" v-if="showDiscount == true">
     <h3>지금 결제하면 {{ salePercent }}% 할인</h3>
    </div>
</template>

<script>
export default {
    name: 'Discount',
    data(){
        return {
            showDiscount : true,
            salePercent: 30,
        }
    },
    
    methods: {
        plusSaleFunc() {
            let interval = setInterval(()=>{ //안의 내용에서 this를 쓸 일이 있는 경우 arrow펑션을 써야 함
                this.salePercent-= 10;
                if (this.salePercent == 0) {
                    clearInterval(interval);
                    this.showDiscount = false
                }
            }, 1000)
        }
    },

    mounted(){
        setTimeout(()=>{ //안의 내용에서 this를 쓸 일이 있는 경우 arrow펑션을 써야 함 
            this.plusSaleFunc()
        }, 2000)
    },
}
</script>

<style>
.discount {
    margin:10px 0;
  padding:10px;
  text-align:center;
  border-radius:6px;
  background-color:aquamarine;
  color:blueviolet;
  font-weight:900;
}
</style>