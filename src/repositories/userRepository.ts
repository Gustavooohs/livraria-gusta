import { Pool } from 'pg';
import { User } from '../models/userModel';

class UserRepository {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            connectionString: 'postgresql://livraria_gustavo_user:HBNgeqTjs6bNGuvAz9EIv9Tzg60eQVup@dpg-csfri5pu0jms73fl8bog-a.oregon-postgres.render.com/livraria_gustavo',
        });
    }

    async addUser(name: string, email: string, password: string): Promise<User> {
        const result = await this.pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password]
        );
        return result.rows[0];
    }

    async getUserByEmail(email: string): Promise<User | null> {
        const result = await this.pool.query('SELECT * FROM users WHERE email = $1', [email]);
        return result.rows[0] || null;
    }
}

export default UserRepository;
