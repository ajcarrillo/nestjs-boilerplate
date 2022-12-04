export const EnvConfigurations = () => ({
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  dbHost: process.env.DB_HOST,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
});
