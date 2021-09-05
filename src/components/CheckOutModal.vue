<template >
  <div class="checkout" index="5" role="dialog">
    <div class="modal">
      <div class="cancel" @click.stop.prevent="closeModal">
        <i class="fas fa-times-circle"></i>
      </div>
      <h3 class="mt-5">您好，{{ user.name }} {{ user.gender }}</h3>
      <div class="checkOutInfo mt-3">
        <p>以下是您的訂單資料:</p>
        <p>姓名：{{ user.name }}</p>
        <p>電話:{{ user.tel }}</p>
        <p>信箱:{{ user.email }}</p>
        <p>城市:{{ user.city }}</p>
        <p>地址:{{ user.address }}</p>
        <p>運費:{{ user.delivery }}</p>
        <p>付款人姓名:{{ user.payerName }}</p>
        <p>卡號:{{ user.cardNumber }}</p>
        <p>到期日:{{ user.goodThru }}</p>
        <p>CVC:{{ user.CVC }}</p>
      </div>
      <h2>總金額: {{user.totleCost}} 元</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkout {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 5;
  background-color: rgba(0,0,0,0.5);
  position: fixed;;
  .modal {
    border: white solid 3px;
    width: 30%;
    background-color: #2a2a2a;
    margin: auto;
    color: white;
    border-radius: 20px;
    padding: 10px;
    .cancel {
      cursor: pointer;
    }
    .checkOutInfo {
      margin: 10px 0;
    }
  }
}
</style>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("final-step-submit");
    },
  },
};
</script>