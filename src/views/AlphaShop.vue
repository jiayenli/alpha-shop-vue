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
        <FormPanel />
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
import StepPanel from "../components/StepPanel.vue"
import FormPanel from "../components/FormPanel.vue"
import ShoppingCartPanel from "../components/ShoppingCartPanel.vue"
import Navbars from "./../components/Navbars.vue"
import Footer from "./../components/Footer.vue"

export default {
  components: {
    StepPanel,
    FormPanel,
    ShoppingCartPanel,
    Navbars,
    Footer
  }
  
}
</script>