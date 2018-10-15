
git pull
npm install
npm run build

docker build -t home-view .
docker stop home-view
docker run -d -t --rm --name home-view -p 9080:8888 home-view