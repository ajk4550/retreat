import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const homeId = req.query.id;
  if (req.method === 'DELETE') {
    const home = await prisma.home.delete({
      where: { id: homeId },
    });
    res.json(home);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this time.`
    );
  }
}
