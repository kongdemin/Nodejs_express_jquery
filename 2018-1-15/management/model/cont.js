var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Cont = new Schema({
    cont   : Number
});
// 创建model对象
var	ContModel = mongoose.model('number', Cont);
// 公开对象，暴露接口
module.exports = ContModel;