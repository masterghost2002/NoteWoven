const config = {
    clientUrl:process.env.CLIENT_URL,
    saltSecret:process.env.SALT_SECRET,
    jwtSecret:process.env.JWT_SECRET || '',
    serverOrigin:process.env.SERVER_ORIGIN,
}
export default config;