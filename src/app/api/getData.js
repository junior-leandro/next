export default async (req, res) => {
    try {
      const results = await fetch(
        "https://images-api.nasa.gov/search?media_type=image"
      );
      res.statusCode = 200;
      res.json({ nasaResults: results });
    } catch (error) {
      res.statusCode = 500;
      res.json({ error: error });
    }
  };