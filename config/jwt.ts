
export default ({ env }) => ({
    auth: {
      jwtSecret: env('JWT_SECRET')
    }
  });