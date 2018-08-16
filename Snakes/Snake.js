		//蛇的局部空间
		(function(){
			var elements = [];
			
			//蛇的构造函数
			function Snake(width,height,direction){
				this.width = width || 20;
				this.height = height || 20;
				this.body = [
					{x:3,y:2,color:"red"},
					{x:2,y:2,color:"orange"},
					{x:1,y:2,color:"orange"}
				]
				this.direction = direction || "right";
					
					
			}
			//在地图上创建蛇
			Snake.prototype.init = function(map){
				remove();
				//蛇是由多个身体块组成的
				for(var i = 0;i<this.body.length;i++){
					var body = document.createElement("div");
					var obj = this.body[i];
					map.appendChild(body);
					//设置身体每一部分的样式
					body.style.position = "absolute";
					body.style.width = this.width +"px";
					body.style.height = this.height + "px";
					body.style.background = obj.color;
					body.style.left = obj.x * this.width +"px";
					body.style.top = obj.y * this.height + "px";
					elements.push(body);
				}
			}

			//蛇的运动坐标生成
			Snake.prototype.move =function(food,map){

				for(var i = this.body.length-1;i>0;i--){
					this.body[i].x = this.body[i-1].x;
					this.body[i].y = this.body[i-1].y;
				}
				//匹配头部的运动方向
				switch(this.direction){
					case "right":this.body[0].x+=1;break;
					case "left":this.body[0].x-=1;break;
					case "top":this.body[0].y-=1;break;
					case "bottom":this.body[0].y+=1;break;
				}
				//判断头部与食物的坐标
				
				var headX = this.body[0].x*this.width;
				var headY = this.body[0].y*this.height;
				if(headX==food.x && headY==food.y){
					var last = this.body[this.body.length-1];
					this.body.push({
						x : last.x,
						y : last.y,
						color : last.color
					})
					food.init(map);
				}

			}

			//清除身体元素的私有函数
			function remove(){
				for(var i = elements.length - 1;i>=0;i--){
					var ele = elements[i];
					ele.parentNode.removeChild(ele);
					elements.splice(i,1);
				}
			}
			window.Snake = Snake;

		}());
