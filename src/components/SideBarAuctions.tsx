import React from "react";
import Image from "next/image";
import { api } from "~/utils/api";

function SideBarAuctions() {
  const vehicles = api.example.getVehicles.useQuery();
  return (
    <aside className="hidden md:block md:w-1/5 md:pr-2 lg:w-2/12 lg:pr-0">
      <h2 className="pt-5 text-lg font-semibold">Current Auctions</h2>
      <div className="current_auctions">
        {vehicles.data ? (
          <ul className="flex flex-wrap gap-5 py-5">
            {vehicles.data.map((vehicle) => (
              <li className="w-full" key={vehicle.id}>
                <div className="border border-gray-300">
                  <Image
                    src="/images/default-car-image.png"
                    alt="Car Image"
                    width={300}
                    height={200}
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No cars found.</p>
        )}
      </div>
    </aside>
  );
}

export default SideBarAuctions;
