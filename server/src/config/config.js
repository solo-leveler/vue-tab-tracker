module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
      dialect: process.env.DB_DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: 'tabtracker.sqlite'
    }

  },
  authencation: {
    jwtSecret: process.env.JWT_SECRET || 'secret'

  }
}
