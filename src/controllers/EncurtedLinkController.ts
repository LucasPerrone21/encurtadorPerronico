import { Request, Response } from 'express';
import { env } from '../enviroment/env';
import database from "../database";
import EncurtedLinkInterface from "../types/encurtedLinks";
import EncurtedLinkRepository from "../repository/encurtedLinkRepository";
import shortid from 'shortid';




export default class EncurtedLinkController {
    static async create(req: Request, res: Response) {
        const { link } = req.body;
        if (!link) {
            res.status(400).json({ message: 'Link is required' });
            return 
        }


        const id = shortid.generate();

        const newLink = `${env.NODE_URL}/encurted/${id}`;

        const newEncurtedLink: EncurtedLinkInterface = {
            id,
            link,
            shortLink: newLink
        };

        try {
            await EncurtedLinkRepository.create(newEncurtedLink);
            res.status(201).json(newEncurtedLink);
            return 
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error' });
            return 
        }

    }

    static async redirect(req: Request, res: Response) {
        const { id } = req.params;

        const encurtedLink = await EncurtedLinkRepository.findById(id);

        if (!encurtedLink) {
            res.status(404).json({ message: 'Link not found' });
            return
        }

        res.redirect(encurtedLink.link);
        return 
        
    }
}