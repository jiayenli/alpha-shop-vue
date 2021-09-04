<template>
  <main id="main-content">
    <!--導覽列-->
    <Navbars />
    <div class="container main-container">
      <!--Modal-->
      <CheckOutModal
        v-if="finishedCheckOut"
        :user="user"
        @final-step-submit="finalStepSubmit"
      />
      <div class="main-grid">
        <!--結帳主頁面-左側-->
        <div class="left-content">
          <!--步驟控制-->
          <StepPanel :formStep="user.formStep" />

          <!--表單內容-->
          <router-view
            :initial-user="user"
            @step-after-submit="stepAfterSubmit"
            @step-before-submit="stepBeforeSubmit"
            @final-step-submit="finalStepSubmit"
          />
        </div>
        <!--結帳主頁面-右側-->
        <div class="right-content">
          <ShoppingCartPanel
            :initial-items="items"
            :delivery="user.delivery"
            :initialTotleCost="user.totleCost"
            @totle-Cost-Update="totleCostUpdate"
          />
        </div>
      </div>
    </div>

    <!--FOOTER-->
    <Footer />
  </main>
</template>



<script>
import StepPanel from "../components/StepPanel.vue";
import ShoppingCartPanel from "../components/ShoppingCartPanel.vue";
import Navbars from "../components/Navbars.vue";
import Footer from "../components/Footer.vue";
import CheckOutModal from "../components/CheckOutModal.vue";

const STORAGE_KEY = "alpha-store-vue";

export default {
  components: {
    StepPanel,
    ShoppingCartPanel,
    Navbars,
    Footer,
    CheckOutModal,
  },

  data() {
    return {
      user: {
        gender: "",
        name: "",
        tel: "",
        email: "",
        city: "",
        address: "",
        id: -1,
        delivery: 0,
        payerName: "",
        cardNumber: "",
        goodThru: "",
        CVC: "",
        formStep: "",
        totleCost: 0,
      },
      items: [
        {
          name: "破洞補釘牛仔褲",
          img: "https://i.ibb.co/vXLmvf0/1.jpg",
          amount: 1,
          price: 3999,
          id: 1,
        },
        {
          name: "刷色直筒牛仔褲",
          img: "https://i.ibb.co/qYnKGs7/2.jpg",
          amount: 1,
          price: 1299,
          id: 2,
        },
      ],
      finishedCheckOut: false,
    };
  },

  methods: {
    startFormStep() {
      if (this.$route.name === "address") {
        this.user.formStep = 1;
      } else if (this.$route.name === "delivery") {
        this.user.formStep = 2;
      } else if (this.$route.name === "payment") {
        this.user.formStep = 3;
      }
    },

    stepAfterSubmit() {
      this.user.formStep += 1;
    },

    stepBeforeSubmit() {
      this.user.formStep -= 1;
    },

    totleCostUpdate(payment) {
      this.user.totleCost = payment.newtotleCost;
    },

    finalStepSubmit() {
      console.log(this.user);
      this.finishedCheckOut = !this.finishedCheckOut;
    },

    createStorageData() {
       this.user= {
        ...this.user,
        ...JSON.parse(localStorage.getItem(STORAGE_KEY))

      }
    },

    saveStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.user));
    },
  },

  created() {
    this.createStorageData()
    this.startFormStep();
  },
  watch: {
    user: {
      handler: function () {
        this.saveStorage();
      },
      deep: true,
    },
  },
};
</script>