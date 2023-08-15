// http://localhost:3000/api/getblog?slug=data
import * as fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

interface types {
	userId: number;
	id: number;
	title: string;
	body: string;
	
}
type ApiResponse<T> = T | { error: string };


export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<types[] | { error: string }>
) {
	fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
		if (err) {
            console.error("Error reading file:", err);
            // console.log(req.query.slug)
            res.status(500).json({ error: "no such file found" });
            return;
          }
      
          try {
            const parsedData: types[] = JSON.parse(data);
            res.status(200).json(parsedData);
            // console.log(req.query.slug)
          } catch (parseError) {
            console.error("Error parsing JSON:", parseError);
            res.status(500).json({ error: "Error parsing data" });
          }
	});
}

