	//构建一个局部空间
		(function(){
			var random = new Random();
			var elements  = [];
			//创建食物的构造函数
			function Food(x,y,width,height,color){
				this.x = x || 0 ;
				this.y = y || 0 ;
				this.width = width || 20;
				this.height = height || 20;
				this.color = color || "green";
			}
			//食物在地图上创建
			Food.prototype.init = function(map){
				remove();
				var food =  document.createElement("div");
				map.appendChild(food);
				//设置食物的样式
				food.style.width = this.width + "px";
				food.style.height = this.height + "px";
				food.style.background = this.color;
				//随机产生的位置,脱离文档流
				food.style.position = "absolute";
				this.x = random.getRandom(0,map.offsetWidth/this.width)*this.width;
				this.y = random.getRandom(0,map.offsetHeight/this.height)*this.height;
				food.style.left =this.x + "px";
				food.style.top = this.y + "px";
				elements.push(food);
			}
			//创建一个私有函数，删除地图上的食物
			function remove(){
				for(var i = 0;i<elements.length;i++){
					var ele = elements[i];
					ele.parentNode.removeChild(ele);
					elements.splice(i,1);
				}
			}
			//暴露接口
			window.Food = Food;
		}());