import {request} from "./request"
import Qs from 'qs'


export function getHomeData(start=0) {//默认从0开始
  return request({
    url:'/getproduct.php',
    method: 'post',
    data: Qs.stringify({
      start,
      length: 5
    })
  })
}

export function searchHomeData(keyword) {
  return request({
    url:'/searchval.php',
    method: 'post',
    data: Qs.stringify({
      keyword
    })
  })
}