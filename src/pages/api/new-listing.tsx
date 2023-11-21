import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

async function NewListing(req: NextApiRequest, res: NextApiResponse) {
  interface Vehicle {
    year: string;
    make: string;
    model: string;
    miles: string;
    description: string;
  }

  const vehicle: Vehicle = req.body as Vehicle;

  await prisma.vehicle.create({
    data: {
      year: vehicle.year,
      make: vehicle.make,
      model: vehicle.model,
      miles: vehicle.miles,
      description: vehicle.description,
    },
  });

  //TODO: figure out how to send submitted values to confirmation.tsx
  res.redirect(
    `/confirmation?year=${vehicle.year}&make=${vehicle.make}&model=${vehicle.model}&miles=${vehicle.miles}&description=${vehicle.description}`
  );
}

export default NewListing;
