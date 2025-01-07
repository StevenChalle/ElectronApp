electron-up: prebuild
	yarn run electron .

up:
	docker-compose up --build
prebuild:
	node src/electron/electron-prebuild.js

build-linux: prebuild
	yarn run electron-builder

build-windows: prebuild
	yarn run electron:builder --windows