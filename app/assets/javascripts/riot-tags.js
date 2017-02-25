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
riot.tag2('hello-prete', '<h1>{title}</h1> <input id="addInput" onkeyup="{add}"></input> <button id="subtractInput" onclick="{subtract}"> Subtract</button> <div>Count: {count}</div>', '', '', function(opts) {
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

});
riot.tag2('hello-world', '<h5> Hello tag {opts.greet} </h5>', '', '', function(opts) {
});