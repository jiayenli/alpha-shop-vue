<template>
  <main id="main-content">
    <!--導覽列-->
    <Navbars />
    <div class="container main-container">
      <div class="main-grid">
        <!--結帳主頁面-左側-->
        <div class="left-content">
          <!--步驟控制-->
          <StepPanel />

          <!--表單內容-->
          <FormPanelStep1
            v-if="user.formStep === 1"
            :initialUser="user"
            @step-after-submit="stepAfterSubmit"
          />
          <FormPanelStep2
            v-if="user.formStep === 2"
            :initialUser="user"
            @step-after-submit="stepAfterSubmit"
            @step-before-submit="stepBeforeSubmit"
          />
          <FormPanelStep3
            v-if="user.formStep === 3"
            :initialUser="user"
            @step-after-submit="stepAfterSubmit"
            @step-before-submit="stepBeforeSubmit"
          />
        </div>
        <!--結帳主頁面-右側-->
        <div class="right-content">
          <ShoppingCartPanel />
        </div>
      </div>
    </div>
    <!--FOOTER-->
    <Footer />
  </main>
</template>

<script>
import StepPanel from "../components/StepPanel.vue";
import FormPanelStep1 from "../components/FormPanelStep1.vue";
import FormPanelStep2 from "../components/FormPanelStep2.vue";
import FormPanelStep3 from "../components/FormPanelStep3.vue";
import ShoppingCartPanel from "../components/ShoppingCartPanel.vue";
import Navbars from "./../components/Navbars.vue";
import Footer from "./../components/Footer.vue";

export default {
  components: {
    StepPanel,
    FormPanelStep1,
    FormPanelStep2,
    FormPanelStep3,
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
        formStep: 1,
      },
    };
  },

  methods: {
    stepAfterSubmit(payload) {
      const { formData} = payload;
      console.log(formData);

      this.user = {
        ...this.user,
        ...formData,
      };
    },
    stepBeforeSubmit() {
      this.user.formStep -= 1;
    },
  },
};
</script>