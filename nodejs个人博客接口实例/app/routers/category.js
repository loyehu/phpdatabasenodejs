var express = require("express");
var router = express.Router();
// 分类数据模型
var Category = require('../models/category');

// 添加分类
router.post('/',function(req,res){
//	console.log('post 请求！');
//	console.log(req.body.title);

	var title = req.body.title;
	var category = new Category({
		title: title
	})
	// 添加数据库
	category.save(function(err){
		if(err){
			res.json({
				success: false,
				message: '添加分类失败！'
			})
		}
		res.json({
			success: true,
			message: '添加分类成功~',
		})
	})
})

// 查看分类
router.get('/',function(req,res){
	console.log('get 请求！');
	Category.find({},function(err,result){
		if(err){
			res.json({
				success: false,
				message: "查看分类失败！"
			})
		}
		res.json({
			success: true,
			message: "查看分类成功~",
			data: result
		})
	})
})

// 修改分类
router.put('/',function(req,res){
	console.log('put 请求！');
	
	//解构赋值
	var {title,newTitle} = req.body;
	console.log(title,newTitle);
	
	Category.findOneAndUpdate({title: title},{title: newTitle},function(err){
		if(err){
			res.json({
				success: false,
				message: "修改分类成功！"
			})
		}
		res.json({
			success: true,
			message: "修改分类成功~"
		})
	})
})

// 删除分类
router.delete('/',function(req,res){
	console.log('delete 请求！');
	// 接受用户传递要删除内容的title
	var {title} = req.body;
	
	Category.remove({title: title},function(err){
		if(err){
			res.json({
				success: false,
				message: "删除分类失败！"
			})
		}
		res.json({
			success: true,
			message: "删除分类成功~"
		})
	})
})

module.exports = router;