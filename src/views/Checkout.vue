<template>
  <main id="main-content">
    <!--導覽列-->
    <Navbars />
    <div class="container main-container">
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
          />
        </div>
        <!--結帳主頁面-右側-->
        <div class="right-content">
          <ShoppingCartPanel 
          :initial-items="items"
          :delivery="user.delivery" />
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

export default {
  components: {
    StepPanel,
    ShoppingCartPanel,
    Navbars,
    Footer,
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
        delivery: "",
        payerName: "",
        cardNumber: "",
        goodThru: "",
        CVC: "",
        formStep: "",
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
    };
  },

  methods: {
    startFormStep() {
      if (this.$route.name === 'address') {
        this.user.formStep = 1
      } else if (this.$route.name === 'delivery') {
        this.user.formStep = 2
      } else if (this.$route.name === 'payment') {
        this.user.formStep = 3
      }
    },

    stepAfterSubmit() {
     this.user.formStep += 1
    },

    stepBeforeSubmit() {
      this.user.formStep -= 1;
    },
  },

  created() {
    this.startFormStep();
  },
};
</script>