import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
   const user = await User.create({
      name: 'Junior Silva',
      email: 'junior.ze.jw@gmail.com',
      password_hash: '324242343233',
   });

   return res.json(user);
});
export default routes;
