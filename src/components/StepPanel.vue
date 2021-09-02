<template>
  <div id="step-control" class="stepper-panel">
    <h1>結帳</h1>
    <div class="container stepper-container">
      <div class="step-part active">
        <div class="step">
          <div class="circle-container"></div>
          <div class="label-container">寄送地址</div>
        </div>
        <div class="connect-line"></div>
      </div>

      <div class="step-part">
        <div class="step">
          <div class="circle-container"></div>
          <div class="label-container">運送方式</div>
        </div>
        <div class="connect-line"></div>
      </div>
      <div class="step-part" id="step-part-3">
        <div class="step" id="step-third">
          <div class="circle-container"></div>
          <div class="label-container">付款資訊</div>
        </div>
      </div>
    </div>
  </div>
</template>
