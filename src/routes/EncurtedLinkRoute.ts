import EncurtedLinkController from "../controllers/EncurtedLinkController";
import { Router } from 'express';

const encurtedLinkRouter = Router();

encurtedLinkRouter.post('/', EncurtedLinkController.create);
encurtedLinkRouter.get('/:id', EncurtedLinkController.redirect);

export default encurtedLinkRouter;


