import pg from 'pg';
const Client = pg.Client;
let connected = false;

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

function connectToDatabase() {
    client.connect(function (err) {
        if (err) throw err;
        connected = true;
        console.log("Connected!");
    });
}

async function addEntry(pillType, userId, userName) {
    if (!connected) {
        connectToDatabase();
    }
    await client.query(
        `INSERT INTO "pill_selection" ("id", "pill", "user_id", "user_name")
        VALUES (DEFAULT, '${pillType}', ${userId}, '${userName}')`
    );
}
export default addEntry;
