// pages/confirm/confirm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    PayList1: [],
      Total:0,
    array1: ['楼层一', '楼层二', '楼层三', '楼层四'],
    array2: ['1', '2', '3', '4'],
    array3: ['1', '2', '3', '4','5','6','7','8'],
    index1:0,
    index2: 0,
    index3: 0,
    wai:0,
TipTxt:''
  },
  SetWai(e) {
    if (e.detail.value){
    this.setData({
      wai: 1
    })
    }else{
      this.setData({
        wai: 0
      })
    }
  },
  SetValue(e){
    this.setData({
      TipTxt: e.detail.value
    })
  },
  section1Change(e){
    this.setData({
      index1: e.detail.value
    })
  },
  section2Change(e){
    this.setData({
      index2: e.detail.value
    })
  },
  section3Change(e) {
    this.setData({
      index3: e.detail.value
    })
  },
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '确认订单',
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#FFFFFF'
    })
    if (options.PayList!=undefined){
    let l = JSON.parse(options.PayList)
    this.setData({
      PayList1: l,
      Total: options.pay
    })
    }

  }
})