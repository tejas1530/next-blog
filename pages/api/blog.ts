import * as fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

interface types {
	userId: number;
	id: number;
	title: string;
	body: string;
}
type ApiResponse<T> = T | { error: string };

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<types[] | { error: string }>
) {
	let getdata = await fs.promises.readdir("blogdata");
	let myfile 
	let allblogs = [];

    for (let index = 0; index < getdata.length; index++) {
        const element = getdata[index];
        // console.log(element)
        myfile=await fs.promises.readFile(('blogdata/'+element), 'utf-8'  )
        allblogs.push(JSON.parse(myfile))
        
    }
    res.status(200).json(allblogs)
	// if (err) {
	//     console.error("Error reading file:", err);
	//     res.status(500).json({ error: "Error reading data" });
	//     return;
	//   }

	//   try {
	//     const parsedData: types[] = JSON.parse(data);

	//     res.status(200).json(parsedData);
	//   } catch (parseError) {
	//     console.error("Error parsing JSON:", parseError);
	//     res.status(500).json({ error: "Error parsing data" });
	//   }
	// });
}
