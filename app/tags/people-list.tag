<people-list>
	<input type="text" id="nameInput" ref="nameInput" placeholder="Name" onkeyup={edit}>
	<input type="text" id="ageInput" ref="ageInput" placeholder="Age" onkeyup={edit}>
	<button type="button" name="button" disabled={disabled} onclick={add}> Add Person</button>

	<person each={opts.people} data={this}></person>
	<script>
	this.disabled = true

	this.edit =(e) =>{
		this.disabled= (nameInput.value== '' || ageInput.value == '')
	}

	this.add =(e) =>{
		opts.people.push({
			name: this.refs.nameInput.value,
			age: this.refs.ageInput.value
		})

		this.refs.nameInput.value=''
		this.refs.ageInput.value=''
		this.disabled = true
	}

	this.remove =(e) =>{
		e.preventDefault();
		let person= e.item
		let index = opts.people.indexOf(person)
		opts.people.splice(index,1)
		console.log(index)
		console.log(person)
		this.update()
	}

	</script>
</people-list>

<person> 
	<h1> <a href onclick={parent.remove}>X</a> - {opts.data.name.toUpperCase()} - <small>{opts.data.age *2}</small></h1>
</person>