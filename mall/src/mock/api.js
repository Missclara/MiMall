import Mock from 'mockjs'
Mock.mock('/api/user/login',{
  "status": 0,
  "data": {
    "id|10001-11000": 0,
    "username": "@cname",
    "email": "@email",
    "phone|1-9{11}": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
});