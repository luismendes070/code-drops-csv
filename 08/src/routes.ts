import { Request, Response, Router } from "express";
import { Readable } from "stream";

import readline from "readline";

import multer from "multer";

const multerConfig = multer();

const router = Router();

interface City {
    _id: string;
    city: string;
    state_id: string;
    state_name: string;
}

router.post(
    "/products",
    multerConfig.single("file"),
    async (request: Request, response: Response) => {

        const { file } = request;
        const { buffer } = file;

        const readableFile = new Readable();
        readableFile.push(buffer);
        readableFile.push(null);

        const productsLine = readline.createInterface({
            input: readableFile
        });

        const cities: City[] = [];

        for await (let line of productsLine){
            
            const productLineSplit = line.split(",");

            cities.push(
                _id: productLineSplit[0],
                city: productLineSplit[1],
                state_id: productLineSplit[2],
                quantity: productLineSplit[3],
            );
        }

        for await (let {_id: _id, city: city, state_id: state_id, state_name: state_name} of cities){
            await client.products.create({
                data : {
                    _id: _id,
                    description: city,

                }
            });
        }

        
        return response.json(cities);

    }
);

export { router };

