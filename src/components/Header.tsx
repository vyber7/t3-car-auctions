import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

function Header(): JSX.Element {
  const { data: session } = useSession();
  const user = session?.user;
  const userImg =
    session?.user.image ??
    "/images/default-profile-picture-avatar-png-green.png";

  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-green-600 p-2">
      <div className="m-auto max-w-5xl">
        {/*<Image src='/images/logo.jpg' alt='Logo' width={70} height={50} />*/}
        <nav id="" className="flex justify-end">
          <label htmlFor="checkbox" className="py-0.5 lg:hidden">
            &#9776;
          </label>
          <input type="checkbox" id="checkbox" className="peer hidden" />

          <div className="hidden w-full peer-checked:absolute peer-checked:left-0 peer-checked:top-11 peer-checked:block lg:flex lg:justify-end lg:gap-2 lg:peer-checked:static lg:peer-checked:flex">
            <Link
              className="block w-full bg-green-200 p-1 text-center text-sm font-bold text-green-600 transition hover:bg-green-400 hover:text-green-100 lg:inline-block lg:w-32 lg:rounded lg:text-center"
              href="/submit-vehicle"
            >
              Submit a vehicle
            </Link>
            <Link
              className="block w-full bg-green-200 p-1 text-center text-sm font-bold text-green-600 transition hover:bg-green-400 hover:text-green-100 lg:inline-block lg:w-32 lg:rounded lg:text-center"
              href="/"
            >
              Home
            </Link>
            <Link
              className="block w-full bg-green-200 p-1 text-center text-sm font-bold text-green-600 transition hover:bg-green-400 hover:text-green-100 lg:inline-block lg:w-32 lg:rounded lg:text-center"
              href="/about"
            >
              About
            </Link>
            <Link
              className="block w-full bg-green-200 p-1 text-center text-sm font-bold text-green-600 transition hover:bg-green-400 hover:text-green-100 lg:inline-block lg:w-32 lg:rounded lg:text-center"
              href="/contact"
            >
              Contact
            </Link>
            {!user && (
              <Link
                className="block w-full bg-green-200 p-1 text-center text-sm font-bold text-green-600 transition hover:bg-green-400 hover:text-green-100 lg:inline-block lg:w-32 lg:rounded lg:text-center"
                href="/auth/sign-in"
              >
                Sign in
              </Link>
            )}
          </div>

          {user && (
            <Link href="/account/profile" legacyBehavior passHref>
              <a className="">
                <Image
                  className="profile-image"
                  src={userImg}
                  width={35}
                  height={35}
                  alt="profile image"
                  style={{ borderRadius: "50%" }}
                />
                <div className="">
                  <Link href="/account/profile">Profile</Link>
                  <Link href="/account/notifications">Notifications</Link>
                  <Link href="/account/listings">My Listings</Link>
                  <Link href="/account/bids-and-wins">My Bids & Wins</Link>
                  <Link href="/account/shipments">My Shipments</Link>
                  <button onClick={() => void signOut()}>Sign Out</button>
                </div>
              </a>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Header;
