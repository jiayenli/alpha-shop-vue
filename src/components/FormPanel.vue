<template>
  <div class="form-panel">
            <div class="container form-container">
              <form id="a-form">
                <div class="form-content">
                  <!--結帳主頁面-左側-步驟一-->
                  <div class="part">
                    <h2>寄送地址</h2>
                    <div class="full-name">
                      <!--稱謂-->
                      <div class="form-row gender">
                        <label>稱謂</label>
                        <div class="select-wrapper">
                          <select name="a-type" id="a-type" required>
                            <option value="man">先生
                            </option>
                            <option value="woman">女士
                            </option>
                            <option value="all">不拘
                            </option>
                          </select>
                        </div>
                      </div>
                      <!--姓名-->
                      <div class="form-row name">
                        <label for="">姓名</label>
                        <input id="name" type="text" placeholder="請輸入姓名">
                      </div>
                    </div>
                    <div class="cotact-info">
                      <!--電話-->
                      <div class="form-row phone">
                        <label for="">電話</label>
                        <input id="phone" type="tel" placeholder="請輸入行動電話">
                      </div>
                      <!--email-->
                      <div class="form-row email">
                        <label for="">Email</label>
                        <input id="email" type="email" placeholder="請輸入電子郵件">
                      </div>
                    </div>
                    <div class="location-name">
                      <!--縣市-->
                      <div class="form-row city">
                        <label>縣市</label>
                        <div class="select-wrapper">
                          <select name="a-type" id="a-type" required>
                            <option value="man" disabled selected>請選擇縣市
                            </option>
                            <option value="">基隆市
                            </option>
                            <option value="">台北市
                            </option>
                            <option value="">新北市
                            </option>
                            <option value="">桃園市
                            </option>
                            <option value="">新竹市
                            </option>
                            <option value="">新竹縣
                            </option>
                            <option value="">苗栗市
                            </option>
                            <option value="">台中縣
                            </option>
                            <option value="">彰化縣
                            </option>
                            <option value="">南投縣
                            </option>
                            <option value="">雲林縣
                            </option>
                            <option value="">嘉義市
                            </option>
                            <option value="">嘉義縣
                            </option>
                            <option value="">台南市
                            </option>
                            <option value="">高雄市
                            </option>
                            <option value="">屏東縣
                            </option>
                            <option value="">台東縣
                            </option>
                            <option value="">花蓮縣
                            </option>
                            <option value="">宜蘭縣
                            </option>
                            <option value="">澎湖縣
                            </option>
                            <option value="">金門縣
                            </option>
                            <option value="">連江縣
                            </option>
                          </select>
                        </div>
                      </div>
                      <!--地址-->
                      <div class="form-row address">
                        <label for="">地址</label>
                        <input id="name" type="text" placeholder="請輸入地址">
                        <div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <!--結帳主頁面-左側-步驟二-->
                  <div class="part d-none" id="delivery">

                    <h2>運送方式</h2>
                    <!--結帳主頁面-左側-運送方式選項一-->
                    <div class="form-row delivery-way">
                      <div class="delivery d-flex align-items-center">
                        <input name="fee" type="radio" value="free" class="free">
                        <label for="">
                          <div class="delivery-title">
                            <div class="title">標準運送</div>
                            <div class="cost">免費</div>
                          </div>
                          <div class="description">約3-4個工作天</div>
                        </label>
                      </div>
                    </div>
                    <!--結帳主頁面-左側-運送方式選項二-->
                    <div class="form-row col-1-6">
                      <div class="delivery d-flex align-items-center">
                        <input name="fee" type="radio" value="500" class="fee">
                        <label for="">
                          <div class="delivery-title">
                            <div class="title">DHL貨運</div>
                            <div class="cost">$500</div>
                          </div>
                          <div class="description">48小時內送達</div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <!--結帳主頁面-左側-步驟三-->
                  <div class="part d-none">
                    <h2>付款資訊</h2>
                    <!--持卡人姓名-->
                    <div class="form-row card-name">
                      <label for="">持卡人姓名</label>
                      <input id="name" type="text" placeholder="John Doe">
                    </div>
                    <!--卡號-->
                    <div class="form-row card-number">
                      <label for="">卡號</label>
                      <input id="name" type="number" placeholder="1111 2222 3333 4444">
                    </div>
                    <div class="date-cvc">
                      <!--有效日期-->
                      <div class="form-row date">
                        <label for="">有效日期</label>
                        <input id="name" type="number" placeholder="MM/YY">
                      </div>
                      <!--CVC/CCV-->
                      <div class="form-row CVC">
                        <label for="">CVC/CCV</label>
                        <input id="name" type="number" placeholder="123">
                      </div>
                    </div>
                  </div>

                </div>
                <!--按鈕-->
                <div id="btn-control" class="control-panel">
                  <button disabled class="btn btn-outline d-none"></button>
                  <button class="btn btn-primary ml-4">下一步</button>
                </div>
            </form>
          </div>
  </div>
</template>