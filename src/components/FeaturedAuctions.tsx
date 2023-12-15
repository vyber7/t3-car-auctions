import React from "react";
import FeaturedListing from "~/components/FeaturedListing";
import { api } from "~/utils/api";

function FeaturedAuctions() {
  const vehicles = api.example.getVehicles.useQuery();
  return (
    <main className="w-full px-2 md:w-4/5 md:pr-0 lg:w-10/12 lg:pl-0">
      <h2 className="pt-5 text-lg font-semibold">Featured Auctions</h2>
      <div>
        {vehicles.data ? (
          <ul className="flex flex-col gap-5 py-5">
            {vehicles.data.map((vehicle) => (
              <li className="" key={vehicle.id}>
                <FeaturedListing vehicle={vehicle} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No cars found.</p>
        )}
      </div>
    </main>
  );
}

export default FeaturedAuctions;
