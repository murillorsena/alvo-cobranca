import "dotenv/config";

export const config = {
    server: {
        port: Number(process.env.PORT)
    },
    database: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        name: process.env.DATABASE_NAME,
        url: process.env.DATABASE_URL
    },
    auth: {
        secret: process.env.SECRET
    }
};
