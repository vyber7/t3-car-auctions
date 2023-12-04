import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

async function NewListing(req: NextApiRequest, res: NextApiResponse) {
  interface Vehicle {
    year: number;
    make: string;
    model: string;
    miles: number;
    price: number;
    description: string;
  }

  const body = req.body as Vehicle;

  const vehicle: Vehicle = {
    year: body.year,
    make: body.make,
    model: body.model,
    miles: body.miles,
    price: body.price,
    description: body.description,
  };

  await prisma.vehicle.create({
    data: {
      year: vehicle.year,
      make: vehicle.make,
      model: vehicle.model,
      price: vehicle.price,
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
