import { Pool } from 'pg';
const connectionString = 'postgresql://backendfinal_user:7YoHcHI7dCCzrgVpocXb8Pm3DFOclgJk@dpg-ct74mkd2ng1s73c9vq70-a.oregon-postgres.render.com/backendfinal';
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  }
});
export default pool;