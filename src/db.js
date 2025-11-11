import pkg from 'pg'; 
const { Pool } = pkg

const pool = new Pool({
    connectionString: process.env.DB_URL
});

export const query = (text, params) => {
    return pool.query(text, params);
}

const initializeDatabase = async () => {
    try {
        await query(`
        CREATE TABLE IF NOT EXIST posts (
            id SERIAL PRIMARY KEY, 
            content TEXT NOT NULL, 
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            updated_at TIMESTAMPT DEFAULT CURRENT_TIMESTAMP
            );
            `);
        console.log("Database created :D")
    } catch (err) {
        console.log("An error has happen while creating the db", err)
    }
}
initializeDatabase();

export default pool;