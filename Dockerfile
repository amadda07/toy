FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend .
RUN npm run build

FROM eclipse-temurin:17-jdk AS backend-builder
WORKDIR /app
COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src
COPY --from=frontend-builder /app/frontend/dist src/main/resources/static
RUN chmod +x gradlew && ./gradlew bootJar -x test -x copyFrontend -x buildFrontend

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=backend-builder /app/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
