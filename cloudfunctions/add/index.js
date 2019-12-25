// 云函数入口文件
const cloud = require('wx-server-sdk')

// cloud.init()

// 云函数入口函数
var sum
exports.main = async (event, context) => {
  console.log(event.a + event.b)
  return {
    sum: event.a + event.b
  }
}