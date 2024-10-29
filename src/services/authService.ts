import UserRepository from '../repositories/userRepository';
import bcrypt from 'bcrypt'; 
class AuthService {
    loginUser(email: any, password: any) {
      throw new Error('Method not implemented.');
    }
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async registerUser(name: string, email: string, password: string) {
        const passwordHash = await bcrypt.hash(password, 10);
        const user = await this.userRepository.addUser(name, email, passwordHash);
        return user;
    }
}

export default AuthService;
