import {request} from "./request"
import Qs from 'qs'


export function getDetailData(did) {
  return request({
    url:'/getItem.php',
    method: 'post',
    data: Qs.stringify({
      did
    })
  })
}