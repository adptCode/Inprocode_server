import express, {Application, Request, Response} from 'express';
import cors from 'cors'
import routesUser from '../routes/user';
import routesMarker from '../routes/marker'; 
import routesEvent from '../routes/event';
import routesDates from '../routes/dates';
import routesDefaultMarker from '../routes/defaultMarker';
import db from '../db/connection';

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
        this.app.use('/api/users', routesUser);
        this.app.use('/api/markers', routesMarker);
        this.app.use('/api/events', routesEvent);
        this.app.use('/api/dates', routesDates);
        this.app.use('/api/defaultMarkers', routesDefaultMarker);
    }

    midlewares() {   
        this.app.use(express.json());
        this.app.use(cors())
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