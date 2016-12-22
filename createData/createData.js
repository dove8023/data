/* 添加数据 */

const orm = require("orm");
const mysqlConfig = require("../db/mysql.json");
const moment = require("moment");
const log4js = require("log4js");

orm.settings.set("connection.pool", true);
// orm.settings.set("connection.debug", true);

log4js.configure({
    appenders: [
        {
            type : "file",
            "filename": "../logs/cheese.log",
            "maxLogSize" : 10240,
            category: ["cheese" , "console"]
        }
    ],
    replaceConsole : true
});

log4js.loadAppender("file");

var logger = log4js.getLogger("cheese");
logger.setLevel("INFO");



let Person, 
    num = 1 ,  //执行次数
    start,     //开始时间
    length = process.argv[2] || 100;

orm.connect(mysqlConfig, function (err, db) {
    if (err) throw err;
    console.log("ok");
    Person = db.define("hello", {
        "id" : Number,
        "name":String,
        "sex":String,
        "age":Number,
        "createTime": String
    });


    db.sync(function(err){
        if(err) throw err;

        console.log("hello , created");

        start = +new Date();
        Person.count({} , (err , count)=>{
            console.log("Begin" , count);

            Add(Person);
        });
    });
});


function Data(){
    let obj = {
        "name" : Math.random().toString(32).substr(2,30),
        "sex"  : Math.random() > 0.5 ? "Man" : "Woman",
        "age"  : parseInt(Math.random()*1000),
        "createTime" : moment().format("YYYY-MM-DD h:mm:ss") 
    }

    return obj;
}

function Add(model){
    let arr = [];
    for(var i=0;i<1000;i++){
        arr.push(Data());
    }

    model.create(arr , function(err , result){

        if(num <= length){
            Add(model);
        }

        if(num == length){
            console.log("End Time：" , +new Date() - start);
            process.exit();
        }

        let useTime = ( +new Date() - start) / 1000;

        console.log("node消耗内存: " ,parseInt(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100 , "MB");
        console.log("已插入数据: " , num*1000 , "  平均每秒: " , parseInt( num*1000 / useTime , 10));
        console.log("累计用时 : " , useTime , "s");
        console.log("===============");
        num++;
    }); 
}



