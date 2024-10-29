import pool from '../config/database';

const createUsersTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        passwordhash VARCHAR(100) NOT NULL
      );
    `;
    await client.query(queryText);

    const queryAlter = `
      ALTER TABLE users
      ADD COLUMN IF NOT EXISTS passwordhash VARCHAR(100) NOT NULL;
    `;
    await client.query(queryAlter);

    console.log('Tabela "users" criada ou atualizada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar ou atualizar tabela:', err);
  } finally {
    client.release();
  }
};

createUsersTable().then(() => process.exit(0));