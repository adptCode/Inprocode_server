import express, {Application, Request, Response} from 'express';
import routesUser from '../routes/user';
import db from '../db/connection' 

class Server {
    private app: Application;
    private port: string;


    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect()

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplication run on port ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'Api working'
            })
        })
        this.app.use('/api/users', routesUser)
    }

    midlewares() {
        //Parseamos el body
        this.app.use(express.json())
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Database connected')
        } catch (error) {
            console.log(error);
            console.log('databese connection error')
        } 
    }

}

export default Server;