import {request} from "./request"
import Qs from 'qs'


export function loginToken(userName, password) {//默认从0开始
  return request({
    url:'/loginToken.php',
    method: 'post',
    data: Qs.stringify({
      userName,
      password
    })
  })
}