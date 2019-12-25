Page({
  data: {
    Total: 0,
    FoodLength: 0,
    lists: [
      {
        id: 0,
        name: "套餐",
        Food: [
          {
            name: "鱼香茄子1",
            pay: 20,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 1
          },
          {
            name: "鱼香茄子2",
            pay: 19,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 2
          },
          {
            name: "鱼香茄子3",
            pay: 18,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 3
          },
          {
            name: "鱼香茄子4",
            pay: 17,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 4
          }
        ],
      },
      {
        id: 1,
        name: "主食",
        Food: [{
            name: "黄焖鸡米饭1",
            pay: 16,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 5
          },
          {
            name: "黄焖鸡米饭2",
            pay: 15,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 6
          },
          {
            name: "黄焖鸡米饭3",
            pay: 14,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 7
          },
          {
            name: "黄焖鸡米饭4",
            pay: 13,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 8
          }
        ],
      },
      {
        id: 2,
        name: "小吃",
        Food: [{
            name: "薯条",
            pay: 12,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 9
          },
          {
            name: "薯条2",
            pay: 11,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 10
          },
          {
            name: "薯条3",
            pay: 10,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 11
          },
          {
            name: "薯条4",
            pay: 9,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 12
          }
        ]
      },
      {
        id: 3,
        name: "饮品",
        Food: [{
            name: "可乐",
            pay: 8,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 13
          },
          {
            name: "雪碧",
            pay: 7,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 14
          },
          {
            name: "可碧",
            pay: 6,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 15
          },
          {
            name: "雪乐",
            pay: 5,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 16
          },
        ]
      },
      {
        id: 4,
        name: "特价",
        Food: [{
            name: "特价1",
            pay: 4,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 17
          },
          {
            name: "特价2",
            pay: 3,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 18
          },
          {
            name: "特价3",
            pay: 2,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 19
          },
          {
            name: "特价4",
            pay: 1,
            text: '好喝',
            Sold: 20,
            Number: 0,
            FoodId: 20
          }
        ],
      }
    ],
    indexId: 0,
    winHeight: 0,
    PayList: [],
    cart: false,
    bg: false,
    scrollTopId: '',
    curNav: '',
    winHeight: 0,
    heightArr: [],
    forindex: true,
    zindex: 0
  },
  GoPay(){
    if(this.data.PayList.length== 0){
      wx.showToast({
        title: '你还没有点餐',
        image: '../statc/1.jpg',
        duration: 2000
      })
    }else{

    let l = JSON.stringify(this.data.PayList)
      let p = this.data.Total
    wx.navigateTo({
      url: '/pages/confirm/confirm?PayList='+l+'&pay='+p
    })
    }

  },
  jumpIndex(e) {
    var id = e.currentTarget.dataset.id
    let index = e.currentTarget.dataset.index;
    this.setData({
      scrollTopId: id,
      curNav: index
    })
  },
  PayList() {
    this.setData({
      cart: !this.data.cart,
      bg: !this.data.bg
    })
  },
  onScroll(e) {
    var that = this;
    var h = 0;
    var heightArr = [];
    let show = that.data.forindex
    let index = that.data.zindex
    let scrollTop = e.detail.scrollTop
    let scrollArr = that.data.heightArr
    wx.createSelectorQuery().selectAll('.Box1').boundingClientRect(function(rect) { //selectAll会选择所要含有该类名的盒子
    }).exec(function(res) {
      res[0].forEach((item) => {
        h += item.height-100;
        heightArr.push(h);
      })
      that.setData({
        heightArr: heightArr
      })
    });
    for (let i = 0; i < scrollArr.length; i++) {
      if (scrollTop >= 0 && scrollTop < scrollArr[0]) {
        if (show) {
          that.setData({
            curNav: 0,
            forindex: false,
            zindex: 0
          })
          return
        }
      } else if (scrollTop >= (scrollArr[i - 1]) && scrollTop < scrollArr[i]) {
        that.setData({
          curNav: i,
          forindex: true,
          zindex: 1
        })
      }
    }
  },
  clearPayList(list) {
    var that = this
    let aa = that.data.lists.length - 1
    for (var i = 0; i <= aa; i++) {
      let bb = that.data.lists[i].Food.length - 1
      for (var j = 0; j <= bb; j++) {
        that.data.lists[i].Food[j].Number = 0
      }
    }
    that.setData({
      'PayList': [],
      FoodLength: 0,
      Total: 0,
      lists: that.data.lists,
      cart: false,
      bg: false
    });
  },
  //减数量
  RmTotal(e) {
    var that = this
    var index = e.currentTarget.dataset.itemIndex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    this.data.lists[parentIndex].Food[index].Number--;
    var mark = 'a' + index + 'b' + parentIndex
    var price = this.data.lists[parentIndex].Food[index].pay;
    var num = this.data.lists[parentIndex].Food[index].Number;
    var name = this.data.lists[parentIndex].Food[index].name;
    var Id = this.data.lists[parentIndex].Food[index].FoodId;
    var obj = {
      pay: price,
      Number: num,
      mark: mark,
      name: name,
      index: index,
      parentIndex: parentIndex,
      FoodId: Id
    };
    var carArray1 = this.data.PayList.filter(item => item.mark != mark)
    carArray1.push(obj)
    this.setData({
      PayList: carArray1,
      lists: this.data.lists
    })
    if (that.data.PayList.length > 1) {
      that.Relist();
    }
    this.calTotalPrice();

  },
  //计算总价
  calTotalPrice() {
    var carArray = this.data.PayList;
    var totalPrice = 0;
    var totalCount = 0;
    for (var i = 0; i < carArray.length; i++) {
      totalPrice += carArray[i].pay * carArray[i].Number;
      totalCount += carArray[i].Number
    }
    this.setData({
      Total: totalPrice,
      FoodLength: totalCount,
    });
  },
  Relist() {
    var that = this
    let aa = that.data.PayList.length - 1
    let flag = false
    for (let i = 0; i < aa; i++) {
      for (let j = aa; j > i; j--) {
        //每次都把最小的元素放在最前面
        if (that.data.PayList[j].Number > that.data.PayList[j - 1].Number) {
          let temp = that.data.PayList[j];
          that.data.PayList[j] = that.data.PayList[j - 1];
          that.data.PayList[j - 1] = temp;
          flag = true;
          that.setData({
            PayList: that.data.PayList
          })
        }
        if (!flag) {
          break;
        }
      }
    }
  },
  //加数量
  AddTotal: function(e) {
    var that = this
    var index = e.currentTarget.dataset.itemIndex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    this.data.lists[parentIndex].Food[index].Number++;
    var mark = 'a' + index + 'b' + parentIndex
    var price = this.data.lists[parentIndex].Food[index].pay;
    var num = this.data.lists[parentIndex].Food[index].Number;
    var name = this.data.lists[parentIndex].Food[index].name;
    var Id = this.data.lists[parentIndex].Food[index].FoodId;
    var obj = {
      pay: price,
      Number: num,
      mark: mark,
      name: name,
      index: index,
      parentIndex: parentIndex,
      FoodId: Id
    };
    var carArray1 = this.data.PayList.filter(item => item.mark != mark)
    carArray1.push(obj)
    this.setData({
      PayList: carArray1,
      lists: this.data.lists
    })
    if (that.data.PayList.length > 1) {
      that.Relist();
    }
    this.calTotalPrice();
  },
  onLoad: function(options) {
    var that = this
    wx.setNavigationBarTitle({
      title: '菜单',
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#FFFFFF'
    })
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winHeight: res.windowHeight - 200
        });
      }
    });
  }
})