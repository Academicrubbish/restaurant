import {request} from "./request"
import Qs from 'qs'


export function addOrder(did,tel,userName,radio,address) {
  if (radio == '1') {
    var sex = '男'
  } else {
    var sex = '女'
  }
  return request({
    url:'/addOrder.php',
    method: 'post',
    data: Qs.stringify({
      did,
      tel,
      userName,
      sex,
      address
    })
  })
}