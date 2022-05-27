import {request} from "./request"
import Qs from 'qs'


export function getOrderData(start) {
  return request({
    url:'/orderInfo.php',
    method: 'post',
    data: Qs.stringify({
      start,
      length:5
    })
  })
}