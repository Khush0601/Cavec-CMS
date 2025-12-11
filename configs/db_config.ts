interface DBConfig {
  DB_URL: string;
}

export const dbConfig: DBConfig = {
  DB_URL: process.env.MONGO_URL || ""  
};