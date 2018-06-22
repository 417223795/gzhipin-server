var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //index指定是index.ejs后台模板引擎
  res.render('index', { title: 'Express' });
});

/*
1.获取请求参数数据
2.处理数据
3.返回响应
 */
router.post('/register',function (req,res) {
  // 1.获取请求参数数据
  const {username,password} = req.body
  //2.处理数据
  let result
  if (username==='admin') {
     result= {code:1,msg:'此用户已存在'}
  } else {
    result= {code:0,data:{id:'123',username,password}}
  }
  //3.返回响应
  //send会在内部判断result是不是对象或者数组，如果是会返回json对象
  // res.json(result)
  res.send(result)

} )

module.exports = router;
