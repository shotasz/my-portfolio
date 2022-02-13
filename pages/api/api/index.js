import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case "GET":
        // Get data from mongodb
        const { db } = await connectToDatabase();
        const data = await db.collection("data").find().toArray(); //連想配列化

        res.status(200).json(data); // json 形式でデータを取得

        break;
      default:
        res.setHeader("Allow", ["GET", "PUT"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
