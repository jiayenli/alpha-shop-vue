# ALPHA-shop購物車｜Vue.js

## 驗收能力
* Vue 的基本使用
* 拆分元件的能力
* 處理 Vue 資料流的能力

## 時間分配
* 專案環境建置vue框架與相關套件安裝：5小時(在安裝scss套件時卡關)
* 專案整體架構與router: 1小時
* 在codepen結構拆解到view與components：3小時
* 建立種子資料，設計表單資料傳遞：5小時
* 三步驟顯示區域：2小時
* 右側購物車顯示：3小時
* 結帳modal區域：3小時
* 各項表單細節樣式調整：4小時
* 各項bug修正：持續修正

## 專案功能
* 使用Vue2開發，並建立桌機版與手機板的 UI 畫面
* 使用者可輸入資料，案下一步時若有缺漏資料會出現提醒訊息
* 可切換上下步驟，網址會一起變動(頁面不重新整理)
* 總價會隨運費與商品數量變動，移除商品前會跳出通知
* 使用者資料保留至local storage，重新整理仍可保留
* 送出後會出現結帳結果


## 備註
* alrt()功能樣式使用sweetalert2套件
```
npm install --save sweetalert2
```

## 專案功能畫面
#### 建立桌機版與手機板的 UI 畫面
![image](https://github.com/jiayenli/alpha-shop-vue/blob/main/src/assets/%E8%B3%BC%E7%89%A9%E8%BB%8A%E7%95%AB%E9%9D%A2.gif)
#### 使用者可輸入資料，案下一步時若有缺漏資料會出現提醒訊息
![image](https://github.com/jiayenli/alpha-shop-vue/blob/main/src/assets/%E4%B8%8B%E4%B8%80%E6%AD%A5%E4%B9%8B%E5%89%8D%E7%A2%BA%E8%AA%8D.gif)
#### 可切換上下步驟，網址會一起變動(頁面不重新整理)
![image](https://github.com/jiayenli/alpha-shop-vue/blob/main/src/assets/%E6%AD%A5%E9%A9%9F%E6%8E%A7%E5%88%B6.gif)
#### 總價會隨運費與商品數量變動，移除商品前會跳出通知
![image](https://github.com/jiayenli/alpha-shop-vue/blob/main/src/assets/%E9%81%8B%E8%B2%BB%E8%88%87%E5%95%86%E5%93%81%E8%AA%BF%E6%95%B4.gif)
#### 使用者資料保留至local storage，重新整理仍可保留
![image](https://github.com/jiayenli/alpha-shop-vue/blob/main/src/assets/%E9%87%8D%E6%96%B0%E6%95%B4%E7%90%86%E5%BE%8C%E8%B3%87%E6%96%99%E4%BB%8D%E4%BF%9D%E7%95%99.gif)
#### 送出後會出現結帳結果
![image](https://github.com/jiayenli/alpha-shop-vue/blob/main/src/assets/%E7%B5%90%E5%B8%B3%E8%B7%B3%E5%87%BAmodal.gif)


## 待調整項目
* 細節樣式需持續優化
* 購物車的數字目前僅可使用按鈕調整，希望優化為可輸入數字
* 按下一步時，目前僅有初步判斷是否有缺項，未來希望能一併判斷資料格式是否正確
* scss程式碼仍需要整理
* 每筆訂單給一個訂單編號(用uuid)



# Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
