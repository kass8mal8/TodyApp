const app = require('./app')
const http = require('http')
const { API_PORT, LOCAL_URI, PROD_URI } = process.env
const port = process.env.PORT || API_PORT
const { connect } = require('mongoose') 

// const server = http.createServer(app)
const dbURI = process.env.NODE_ENV === 'production' ? PROD_URI : LOCAL_URI
console.log(process.env.NODE_ENV)

const connection = async () => {
    try {
        await connect(dbURI)
        console.log('Database connection successful')

        app.listen( port, () => console.log(`Listening for requests on port ${port}`))
    } catch (error) {
        console.log(error.message)
    }
}

connection()