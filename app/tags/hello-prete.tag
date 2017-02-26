<hello-prete>
	<h1>{title}</h1>
	<input id="addInput" onkeyup={add}></input>
	<button id="subtractInput" onclick={subtract}> Subtract</button>
	<div>Count: {count}</div>
	<div each={opts.people}>{name}</div>
	<div each={item, i in list}> {i}: {item}</div>
	<script >
		count =0;
		subtract= (e)=>{
			if(count>0){
				addInput.value = removeLast(addInput.value)
				count--
			}
		}
		add=(e) => {
			this.update()
			count++
		}

		removeLast = (text) =>{
			return text.substr(0, text.length-1)
		}

		// this.people =[
		// 	{ name:'Peter'},
		// 	{ name:'jason'},
		// 	{ name:'tom'},
		// 	{ name:'bob'}

		// ]

		this.list=[
			'banana',
			'apple',
			'orange',
			'banana'
		]
		setInterval(add, 1000)
		title= '${opts.title} WOrld!';
	
	</script>
</hello-prete>