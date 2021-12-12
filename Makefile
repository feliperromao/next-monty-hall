up:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose up -d --build

ps:
	docker-compose ps

image:
	@[ "${version}" ] || ( echo ">> var version is not set"; exit 1 )
	docker build -t feliperomao07/montyhall-fronend:${version} -f Dockerfile.prod .

push:
	@[ "${version}" ] || ( echo ">> var version is not set"; exit 1 )
	docker push feliperomao07/montyhall-fronend:${version}