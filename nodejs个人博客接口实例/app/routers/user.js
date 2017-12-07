
var express = require("express");
var router = express.Router();
// 用户数据模型
var User = require("../models/user");

router.get('/',function(req,res){
	
	//创建一个测试用户
	var admin = new User({
		name: 'loye',
		password: 'ly1234',
		admin: true
	})
	
	// 把测试用户保存数据库
	admin.save(function(err){
		
		if(err){
			res.json({
				success: false,
				message: "管理员创建失败！"
			})
		}
		res.json({
			success: true,
			message: "管理员创建成功~"
		})
	})
})

module.exports = router;