export const config = {
    port: process.env.port ? parseInt(process.env.port) : 3000,
    db: {
        url: process.env.DATABASE_URL as string
    }
}