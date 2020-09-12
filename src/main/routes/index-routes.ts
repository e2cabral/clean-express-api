import { Router, Request, Response } from 'express';

export default (router: Router) => {
    router.get('/', (req: Request, res: Response) => res.send('First route using the archive of routes'));
}