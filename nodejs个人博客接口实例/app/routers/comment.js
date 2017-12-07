
var express = require("express");
var router = express.Router();
// 博客数据模型
var Blog = require('../models/blog');

// 添加评论
router.post('/',function(req,res){
	// 解构赋值
	var {id,body} = req.body;
	console.log(id,body);
	
	// 通过id名找到对应博客
	Blog.findById(id,function(err,result){
		if(err){
			res.json({
				success: false,
				message: "添加评论失败！"
			})
		}
		// 往博客的评论中添加了一条数据，对象形式的数据
		result.comments.push( {body} );
//		简化前: result.comments.push({body: body});	ES6语法，会自动添加相同的内容
		result.save(function(err){
			if(err){
				res.json({
					success: false,
					message: "添加评论失败！"
				})
			}
			res.json({
				success: true,
				message: "添加评论成功~"
			})
		})
	})
})


module.exports = router;
