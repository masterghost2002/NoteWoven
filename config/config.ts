const config = {
    clientUrl:process.env.CLIENT_URL,
    saltSecret:process.env.SALT_SECRET,
    jwtSecret:process.env.JWT_SECRET || '',
}
export default config;