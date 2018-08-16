		//游戏的构造函数
		(function(){
			var that = null;
			function Game(map){
				this.food = new Food();
				this.snake = new Snake();
				this.map = map;
				that = this;
			}
			//为游戏添加原型方法-----游戏界面初始化
			Game.prototype.init =function(){
				this.food.init(this.map);
				this.snake.init(this.map);
				this.run();
				this.bindKey();
			}
			//为游戏添加原型方法-------蛇的运动边检检测
			Game.prototype.run = function(){
				var timeId = setInterval(function(){
					this.snake.move(this.food,this.map);
					this.snake.init(this.map);
					
					var maxX = this.map.offsetWidth/this.food.width;
					var maxY = this.map.offsetHeight/this.food.height;
					
					var headX = this.snake.body[0].x;
					var headY = this.snake.body[0].y;
					
					if(headX<0||headX>=maxX||headY<0||headY>=maxY){
						clearInterval(timeId);
						alert("游戏结束");
					}
				}.bind(that),150)
			}

			//为游戏添加原型方法 -----页面增加监听事件
			Game.prototype.bindKey = function(){
				document.addEventListener("keydown",function(e){
					switch(e.keyCode){
						case 37:this.snake.direction= "left";break;
						case 38:this.snake.direction= "top";break;
						case 39:this.snake.direction= "right";break;
						case 40:this.snake.direction= "bottom";break;
					}
				}.bind(that),false)
			}

			window.Game = Game;
		}());