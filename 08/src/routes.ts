import { Request, Response, Router } from "express";
import { Readable } from "stream";

import readline from "readline";

import multer from "multer";

// Copilot
import client from "./database/client";

const multerConfig = multer();

const router = Router();

interface ICity {
    _id: string;
    city: string;
    state_id: string;
    state_name: string;
}

router.post(
    "/cities",
    multerConfig.single("file"),
    async (request: Request, response: Response) => {

        const { file } = request;

        // Copilot
        if (!file) {
            // Handle missing file case
            return response.status(400).json({ error: "No file provided" });
        }

        const { buffer } = file;

        const readableFile = new Readable();
        readableFile.push(buffer);
        readableFile.push(null);

        const citiesLine = readline.createInterface({
            input: readableFile
        });

        const cities: ICity[] = [];

        for await (let line of citiesLine){
            
            const cityLineSplit:any = line.split(",");

            console.log(cityLineSplit[line]);

            cities.push({
                    _id: cityLineSplit[0],
                    city: cityLineSplit[1],
                    state_id: cityLineSplit[2],
                    state_name: cityLineSplit[3],
                });
        }

        
        // return response.json(cities);
        // Copilot
        return response.send() && response.status(200).json({ message: "Cities processed successfully" });

    }
);

export { router };

