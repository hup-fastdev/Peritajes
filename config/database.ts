
export default ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "database-peritajes.cq3juhddbgkj.us-east-1.rds.amazonaws.com"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "peritajes"),
      user: env("DATABASE_USERNAME", "admin"),
      password: env("DATABASE_PASSWORD", "julidiana"),
    },
    useNullAsDefault: true,
  },
});
