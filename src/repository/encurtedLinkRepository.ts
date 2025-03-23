import database from "../database";
import EncurtedLinkInterface from "../types/encurtedLinks";

export default class EncurtedLinkRepository {
    static async create(link : EncurtedLinkInterface) {
        return await database.encurtedLink.create({
            data: {
                id: link.id,
                link: link.link,
                shortLink: link.shortLink
            }
        });
    }

    static async findById(id: string) {
        return await database.encurtedLink.findUnique({
            where: {
                id
            }
        });
    }

}