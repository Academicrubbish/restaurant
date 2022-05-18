import {request} from "./request"
import Qs from 'qs'


export function getDetailData(did) {//默认从0开始
  return request({
    url:'/getItem.php',
    method: 'post',
    data: Qs.stringify({
      did
    })
  })
}