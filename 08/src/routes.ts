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

        const citiesLine = readline.createInterface({
            input: readableFile
        });

        const cities: City[] = [];

        for await (let line of citiesLine){
            
            const cityLineSplit = line.split(",");

            cities.push(
                _id: cityLineSplit[0],
                city: cityLineSplit[1],
                state_id: cityLineSplit[2],
                quantity: cityLineSplit[3],
            );
        }

        for await (let {_id: _id, city: city, state_id: state_id, state_name: state_name} of cities){
            await client.products.create({
                data : {
                    _id: _id,
                    city: city,

                }
            });
        }

        
        return response.json(cities);

    }
);

export { router };

