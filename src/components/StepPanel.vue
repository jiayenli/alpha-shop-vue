<template>
  <div id="step-control" class="stepper-panel">
    <h1>結帳</h1>
    <div class="container stepper-container">
      <!--步驟一-->
      <div
        class="step-part"
        :class="[
          formStep === 1 ? 'active' : '',
          formStep === 2 || formStep === 3 ? 'checked' : '',
        ]"
      >
        <div class="step">
          <div class="circle-container"></div>
          <div class="label-container">寄送地址</div>
        </div>
        <div class="connect-line"></div>
      </div>

      <!--步驟二-->
      <div
        class="step-part"
        :class="[
          formStep === 2 ? 'active' : '',
          formStep === 3 ? 'checked' : '',
        ]"
      >
        <div class="step">
          <div class="circle-container"></div>
          <div class="label-container">運送方式</div>
        </div>
        <div class="connect-line"></div>
      </div>

      <!--步驟三-->
      <div
        class="step-part"
        id="step-part-3"
        :class="formStep === 3 ? 'active' : ''"
      >
        <div class="step" id="step-third">
          <div class="circle-container"></div>
          <div class="label-container">付款資訊</div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  props: {
    formStep: {
      type: Number,
      required: true,
    },
  },
};
</script>