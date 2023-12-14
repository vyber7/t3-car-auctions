import Image from "next/image";
//import { useRouter } from "next/router";
//import { useEffect } from "react";
import Link from "next/link";

interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  miles: number;
  price: number;
  description: string;
}

function Listing({ vehicle }: { vehicle: Vehicle }) {
  /*const router = useRouter();
  useEffect(() => {
    const handleClick = () => {
      router.push({
        pathname: "/listing",
        query: { id: vehicle.id },
      });
    };
  }, [vehicle.id, router]);*/

  return (
    <div className="group flex flex-col flex-wrap rounded border transition-all hover:border-gray-600 lg:flex-row">
      <Link href={`/listing/${vehicle.id}`}>
        <h3
          className="w-full p-2 text-center text-xl font-bold"
          /*onClick={handleClick}*/
        >
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
      </Link>

      <div className="flex w-auto flex-col justify-between rounded-t lg:w-1/3 lg:rounded-l">
        <Image
          src="/images/default-vehicle-image.png"
          alt="Vehicle Image"
          width={400}
          height={200}
          className="w-auto rounded-t lg:rounded-t-none lg:rounded-tl"
        />
        <p className="flex justify-between p-2">
          <span>{vehicle.miles} miles</span>
          <span>${vehicle.price}</span>
        </p>
      </div>
      <div className="relative px-3 pb-8 lg:w-2/3">
        <p className="relative h-36 overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-20 after:w-full after:bg-gradient-to-t after:from-white ">
          {vehicle.description}
        </p>
        <button className="z-1 absolute bottom-2 right-1/2 translate-x-1/2 rounded bg-black px-2 text-white">
          Read more...
        </button>
      </div>
    </div>
  );
}

export default Listing;
