#### create an image
    1. docker build -t nodeapp .

#### running the instance of the docker image i.e containers
    1. docker run --name nodeapp -p 9999(outside access):9999(inside docker) nodeapp

#### stop docker container
    1. docker stop nodeapp

#### remove docker container
    1. docker rm nodeapp

#### running multiple instances of docker container
    1. docker run -d(detach) -p 8000:9999 nodeapp
    2. docker run -d(detach) -p 8001:9999 nodeapp
    3. docker run -d(detach) -p 8002:9999 nodeapp
    4. docker run -d(detach) -p 8003:9999 nodeapp