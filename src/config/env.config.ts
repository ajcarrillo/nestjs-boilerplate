export const EnvConfigurations = () => ({
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000
});