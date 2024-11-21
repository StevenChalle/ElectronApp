prebuild:
	node src/electron/electron-prebuild.js

build-linux: prebuild
	yarn run electron-builder

build-windows: prebuild
	yarn run electron:builder --windows

electron-up: prebuild
	yarn run electron .

webapp-up:
	docker-compose up --build