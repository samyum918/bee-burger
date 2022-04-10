cd ./bee-burger-frontend
npm i
npm run build
cp ./build ../bee-burger-backend/src/main/resources/static
cd ../bee-burger-backend
mvn clean package -Dmaven.test.skip=true
cd ..
docker-compose up --build
