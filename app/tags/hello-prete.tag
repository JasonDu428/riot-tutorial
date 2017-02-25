<hello-prete>
	<h1>{title}</h1>
	<input id="addInput" onkeyup={add}></input>
	<button id="subtractInput" onclick={subtract}> Subtract</button>
	<div>Count: {count}</div>
	<script >
		count =0;
		subtract= (e)=>{
			if(count>0){
				addInput.value = removeLast(addInput.value)
				count--
			}
		}
		add=(e) => {
			count++
		}

		removeLast = (text) =>{
			return text.substr(0, text.length-1)
		}

		title= '${opts.title} WOrld!';
	
	</script>
</hello-prete>