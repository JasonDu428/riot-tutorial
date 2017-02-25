<contact-list>
	<h1>contacts</h1>
	<ul>
		<li each={p in opts.people}>{p.first} {p.last} </li>
	</ul>
	<script>
	this.on('mount', function(){
		console.log('riot mount event fired')
		opts.callback(this)
	})

	this.on('data_loaded',function(peeps){
		opts.people = peeps
		this.update()
	})
	</script>
</contact-list>