# cloud-electron-app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

-----------------------------

Setting up on Linux :

- allow docker to access x11 display :
```
    xhost +local:docker
```

Run the container, forwarding the X11 display :
```
    docker run -it --rm \
    -e DISPLAY=$DISPLAY \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -p 8080:8080 \
    deepcloud-frontend
```

For macOS or Windows :

Install an X server (e.g., XQuartz for macOS or VcXsrv for Windows).
Configure your X server to allow connections from Docker containers.
Run container :
```
    docker run -it --rm \
    -e DISPLAY=host.docker.internal:0 \
    -p 8080:8080 \
    deepcloud-frontend
```
