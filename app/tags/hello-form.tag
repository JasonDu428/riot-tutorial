<hello-form>
	<form onsubmit={sayHello}>
		<input type="text" ref="greet" > </input>
		<button> Say Hello</button>
	</form>

	<h3 show={this.greeting}> Hello {greeting}</h3>

	<script >
	var self =this;
	sayHello(e){
		e.preventDefault();
		self.greeting = self.refs.greet.value
		self.refs.greet.value=""
	}
	</script>

</hello-form>