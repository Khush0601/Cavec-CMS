interface AppConfig {
  PORT: number;
}

export const appConfig: AppConfig = {
  PORT: Number(process.env.PORT) || 8000
};