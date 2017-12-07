var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// 使用module.exprots导出
module.exports = mongoose.model('User',new Schema({
	name: String,
	password: String,
	admin: Boolean
}));
