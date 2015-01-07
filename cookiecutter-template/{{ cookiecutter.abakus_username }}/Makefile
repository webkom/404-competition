setup: node_modules vendor 
	grunt

node_modules:
	npm install

vendor: node_modules
	node_modules/.bin/bower install

clean:
	@rm -rf node_modules vendor
