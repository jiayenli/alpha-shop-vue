<template>
  <div class="card list-container">
    <h4 class="shopping-car">購物籃</h4>
    <!--結帳主頁面-右側-購物清單-->
    <div class="shoppimg-list">
      <div class="item">
        <div class="item-img" id="item-1-img">
          <img src="https://i.ibb.co/vXLmvf0/1.jpg" />
        </div>
        <div class="count-panel">
          <div class="item-part">
            <p class="item-name">破洞補釘牛仔褲</p>
            <div class="count">
              <div class="reduce-circle"></div>
              <div class="item-num">1</div>
              <div class="add-circle"></div>
            </div>
          </div>
          <div class="item-cost">$3,999</div>
        </div>
      </div>

      <div class="item">
        <div class="item-img" id="item-2-img">
          <img src="https://i.ibb.co/qYnKGs7/2.jpg" />
        </div>
        <div class="count-panel">
          <div class="item-part">
            <p class="item-name">刷色直筒牛仔褲</p>
            <div class="count">
              <div class="reduce-circle"></div>
              <div class="item-num">1</div>
              <div class="add-circle"></div>
            </div>
          </div>
          <div class="item-cost">$1,299</div>
        </div>
      </div>
    </div>
    <!--結帳主頁面-右側-購物花費-->
    <div class="cal">
      <div class="fee">
        <span class="fee-title">運費</span>
        <span class="fee-cost">免費</span>
      </div>
      <div class="sum">
        <span class="sum-title">小計</span>
        <span class="sum-cost">5,298</span>
      </div>
    </div>
  </div>
</template>

