build-linux:
	yarn run electron-builder

build-windows:
	yarn run electron:builder --windows

up:
	docker-compose up --build

app-up:
	yarn run electron .