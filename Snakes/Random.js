 		(function(){
 			//随机数构造函数
			function Random (){};
			Random.prototype.getRandom = function(min,max){
				return Math.floor(Math.random()*(max-min)+min);
			}
			//暴露接口
			window.Random = Random;
 		}());