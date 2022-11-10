import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  console.log(req.body);
  const { title, location, pricePerNight } = req.body;
  const result = await prisma.home.create({
    data: {
      title,
      location,
      pricePerNight: Number(pricePerNight),
    },
  });
  res.json(result);
}
