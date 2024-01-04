import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from "../../utils/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body = req.body;

    try {
      const { data, error } = await supabase.from("leads").insert(body);

      if (!error) {
        res.status(200).json(data);
        console.log(body)
      } else {
        res.status(500).json(error);
        console.log(body)
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
      console.log(body)
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
