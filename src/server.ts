import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
