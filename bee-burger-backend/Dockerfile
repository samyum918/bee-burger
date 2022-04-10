FROM openjdk:8-jdk-alpine

RUN apk add --no-cache bash
COPY wait-for-it.sh wait-for-it.sh
RUN chmod +x /wait-for-it.sh

COPY bee-burger-backend/target/backend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8091
