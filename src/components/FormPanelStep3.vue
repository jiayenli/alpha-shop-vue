<template>
  <div class="form-panel">
    <div class="container form-container">
      <form id="a-form">
        <div class="form-content">
          <!--結帳主頁面-左側-步驟三-->
          <div class="part">
            <h2>付款資訊</h2>
            <!--持卡人姓名-->
            <div class="form-row card-name">
              <label for="">持卡人姓名</label>
              <input id="name" type="text" placeholder="John Doe" v-model="user.payerName" />
            </div>
            <!--卡號-->
            <div class="form-row card-number">
              <label for="">卡號</label>
              <input
                id="name"
                type="number"
                placeholder="1111 2222 3333 4444"
                v-model="user.cardNumber"
              />
            </div>
            <div class="date-cvc">
              <!--有效日期-->
              <div class="form-row date">
                <label for="">有效日期</label>
                <input id="name" type="number" placeholder="MM/YY" v-model="user.goodThru"/>
              </div>
              <!--CVC/CCV-->
              <div class="form-row CVC">
                <label for="">CVC/CCV</label>
                <input id="name" type="number" placeholder="123" v-model="user.CVC" />
              </div>
            </div>
          </div>
        </div>
        <!--按鈕-->
        <div id="btn-control" class="control-panel">
          <button class="btn btn-outline"  @click.stop.prevent="ReturnStep">上一步</button>
          <button class="btn btn-primary ml-4" @click.stop.prevent="NextStep">下一步</button>
        </div>
      </form>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "./../assets/scss/formpanel.scss";
</style>


<script>
import Swal from "sweetalert2";
export default {
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        payerName: "",
        cardNumber: "",
        goodThru: "",
        CVC: "",
      }),
    },
  },

  data() {
    return {
      user: this.initialUser
    };
  },

  methods: {
    NextStep() {
      //console.log(this.receiverInfo)
      const { payerName, cardNumber, goodThru, CVC } = this.user;
      if (!payerName || !cardNumber || !goodThru || !CVC ) {
        Swal.fire("注意！", "請確認所有欄位皆已填寫", "warning");
        return;
      }
      this.$emit("step-after-submit");
    },
    ReturnStep() {
      this.$emit("step-before-submit")
      this.$router.push({ name: 'delivery'})

    }
  },
};
</script>