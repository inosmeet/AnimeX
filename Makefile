DOCKER_USERNAME ?= meetsoni17
APP_NAME ?= animex
GIT_HASH ?= $(shell git log --format="%h" -n 1)

.PHONY: docker-build
docker-build:
	docker build -t ${DOCKER_USERNAME}/${APP_NAME}:${GIT_HASH} -f ./Dockerfile .

.PHONY: docker-push
docker-push:
	docker push ${DOCKER_USERNAME}/${APP_NAME}:${GIT_HASH}

.PHONY: docker-release
docker-release:
	docker pull ${DOCKER_USERNAME}/${APP_NAME}:${GIT_HASH}
	docker tag ${DOCKER_USERNAME}/${APP_NAME}:${GIT_HASH} ${DOCKER_USERNAME}/${APP_NAME}:latest
	docker push ${DOCKER_USERNAME}/${APP_NAME}:latest


.PHONY: docker-run-all
docker-run-all:
	$(MAKE) docker-stop
	$(MAKE) docker-rm

	-docker network create animex

	-docker run -d \
	--name db \
	--network animex \
	-p 8081:8081 \
	-e ME_CONFIG_MONGODB_ADMINUSERNAME=root \
	-e ME_CONFIG_MONGODB_ADMINPASSWORD=123qwe \
	-e ME_CONFIG_MONGODB_URI=${DATABASE_URL} \
	--restart unless-stopped \
	mongo-express:1.0.0-18-alpine3.18

	-docker run -d \
	--name nodejs \
	--network animex \
	-e DATABASE_URL=${DATABASE_URL} \
	-p 5000:5000 \
	--restart unless-stopped \
	--link=db \
	${DOCKER_USERNAME}/${APP_NAME}

.PHONY: docker-stop
docker-stop:
	-docker stop db
	-docker stop nodejs

.PHONY: docker-rm
docker-rm:
	-docker container rm db
	-docker container rm nodejs
	-docker network rm animex
