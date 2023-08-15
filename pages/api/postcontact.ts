// import * as fs from "fs";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async (req: NextApiRequest, res: NextApiResponse) => {
// 	if (req.method === "POST") {
// 		const response = await fs.promises.readdir("contactdata");
// 		 fs.promises.writeFile(
// 			`contactdata/${response.length + 1}.json`,
// 			JSON.stringify(req.body)
// 		);
// 		res.status(200).json(req);
// 	}

// 	res.status(200).json('allblogs');
// };

import * as fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const response = await fs.promises.readdir("contactdata");
      const fileName = `${response.length + 1}.json`;
      await fs.promises.writeFile(`contactdata/${fileName}`, JSON.stringify(req.body));

      res.status(200).json({ message: `Data saved to ${fileName}` });
    } catch (error) {
      console.error("Error writing to file:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
