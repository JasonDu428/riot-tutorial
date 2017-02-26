riot.tag2('contact-list', '<h1>contacts</h1> <ul> <li each="{p in opts.people}">{p.first} {p.last} </li> </ul>', '', '', function(opts) {
	this.on('mount', function(){
		console.log('riot mount event fired')
		opts.callback(this)
	})

	this.on('data_loaded',function(peeps){
		opts.people = peeps
		this.update()
	})
});
riot.tag2('hello-form', '<form onsubmit="{sayHello}"> <input type="text" ref="greet"> </input> <button> Say Hello</button> </form> <h3 show="{this.greeting}"> Hello {greeting}</h3>', '', '', function(opts) {
	var self =this;
	this.sayHello = function(e){
		e.preventDefault();
		self.greeting = self.refs.greet.value
		self.refs.greet.value=""
	}.bind(this)
});
riot.tag2('hello-prete', '<h1>{title}</h1> <input id="addInput" onkeyup="{add}"></input> <button id="subtractInput" onclick="{subtract}"> Subtract</button> <div>Count: {count}</div> <div each="{opts.people}">{name}</div> <div each="{item, i in list}"> {i}: {item}</div>', '', '', function(opts) {
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

		this.list=[
			'banana',
			'apple',
			'orange',
			'banana'
		]
		setInterval(add, 1000)
		title= '${opts.title} WOrld!';

});
riot.tag2('hello-world', '<h5> Hello tag {opts.greet} </h5>', '', '', function(opts) {
});
riot.tag2('people-list', '<input type="text" id="nameInput" ref="nameInput" placeholder="Name" onkeyup="{edit}"> <input type="text" id="ageInput" ref="ageInput" placeholder="Age" onkeyup="{edit}"> <button type="button" name="button" disabled="{disabled}" onclick="{add}"> Add Person</button> <person each="{opts.people}" data="{this}"></person>', '', '', function(opts) {
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

});

riot.tag2('person', '<h1> <a href onclick="{parent.remove}">X</a> - {opts.data.name.toUpperCase()} - <small>{opts.data.age *2}</small></h1>', '', '', function(opts) {
});
riot.tag2('peoplecount', '<div each={countArray> <b>{{title}} </b>: <span class={class}> {{count}}</span></div>}', '', '', function(opts) {
});