import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis do arquivo .env

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;
