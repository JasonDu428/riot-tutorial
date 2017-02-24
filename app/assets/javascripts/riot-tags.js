riot.tag2('hello-form', '<form onsubmit="{sayHello}"> <input type="text" ref="greet"> </input> <button> Say Hello</button> </form> <h3 show="{this.greeting}"> Hello {greeting}</h3>', '', '', function(opts) {
	var self =this;
	this.sayHello = function(e){
		e.preventDefault();
		self.greeting = self.refs.greet.value
		self.refs.greet.value=""
	}.bind(this)
});
riot.tag2('hello-world', '<h5> Hello tag {opts.greet} </h5>', '', '', function(opts) {
});