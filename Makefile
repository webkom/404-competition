test:
	@echo "Building all games"
	@sh build

new:
	@echo "Creating from template, enter your abakus user name and full name when asked and leave the other fields to their default"
	@cd entries && cookiecutter ../cookiecutter-template/
