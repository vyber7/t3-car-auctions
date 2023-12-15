import React from "react";
import { useRouter } from "next/router";
//import VehicleListing from "~/components/VehicleListing";
import { api } from "~/utils/api";
import Head from "next/head";
import SideBarAuctions from "~/components/SideBarAuctions";
import Image from "next/image";
//import VehicleListing from "~/components/VehicleListing";

/*interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  miles: number;
  price: number;
  description: string;
}
*/
function Listing() {
  const router = useRouter();
  const { vehicleId } = router.query;
  console.log(vehicleId);

  const vehicle = api.example.getVehicle.useQuery(
    { id: vehicleId as string },
    { enabled: vehicleId !== undefined }
  );

  const { year, make, model, miles, price, description } = vehicle.data ?? {};

  return (
    <div className="m-auto mt-11 flex max-w-5xl gap-5">
      <Head>
        <title>Car Auctions</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <main className="w-full px-2 md:w-4/5 md:pr-0 lg:w-10/12 lg:pl-0">
        <h1 className="pt-5 text-lg font-semibold">
          {year} {make} {model}
        </h1>
        <div className="flex flex-col justify-between rounded-t lg:rounded-l">
          <div className="flex flex-col justify-between rounded-t lg:rounded-l">
            <Image
              src="/images/default-vehicle-image.png"
              alt="Vehicle Image"
              width={400}
              height={200}
              className="w-full rounded-t object-cover lg:rounded-t-none lg:rounded-tl"
            />
            <p className="flex justify-between p-2">
              <span>{miles} miles</span>
              <span>${price}</span>
            </p>
          </div>
          <div className="pb-8">
            <p className="">{description}</p>
          </div>
        </div>
      </main>
      <SideBarAuctions />
    </div>
  );
}

export default Listing;