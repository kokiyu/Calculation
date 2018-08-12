const app = getApp({
})

Page({
data: {
  date:'',
  week:'',
  month:'',
  latitude: '',
  longitude: '',
  location:'',
  lunar:'',
  suit:'',
  lunar_url: 'https://www.sojson.com/open/api/lunar/json.shtml',  
},
onLoad:function(options){
  
  //获取时间
  var date1 = new Date();
  const year = date1.getFullYear();
  const month = date1.getMonth() + 1;
  const day = date1.getDate();
  var week = date1.getDay();
  date1 = month +"月" + day + "日";

  switch(week){
    case 0:
      week = "Mon " ;
    case 1:
    week = " Tue " ;
    case 2:
      week = " Wed " ;
    case 3:
      week =  " Thu " ;
    case 4:
      week = " Fri ";
    case 5:
      week = " Sau " ;
    case 6:
      week = " Sun " ;
  }

this.setData({ date: date1 });
this.setData({ week: week });

//请求阴历
let that = this;
  wx.request({
    url: 'https://www.sojson.com/open/api/lunar/json.shtml', //仅为示例，并非真实的接口地址
    success: function (res) {
      console.log(res.data);
      var lunar = res.data.data.cnmonth +"月"+ res.data.data.cnday;
      that.setData({ lunar:lunar,
      suit:res.data.data.suit});
    }
  })
},



})