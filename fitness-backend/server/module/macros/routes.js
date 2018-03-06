import {Router} from 'express';
import * as MacroController from './controller';

const routes = new Router();

routes.post('/macros', MacroController.createMacro);
routes.get('/macros', MacroController.getMacros);

export default routes;