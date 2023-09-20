import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useRef } from "react";

function Header(): JSX.Element {
  const { data: session } = useSession();
  const user = session?.user;
  const userImg =
    session?.user.image ??
    "/images/default-profile-picture-avatar-png-green.png";
  const ref = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    /**
     * Handles click outside of the component.
     * If the click is outside of the component and the checkbox is checked, it will click the component.
     * @param event - The MouseEvent object.
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        const checkbox = document.getElementById(
          "checkbox"
        ) as HTMLInputElement;
        if (checkbox?.checked) ref.current.click();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-green-600 p-2">
      <div className="m-auto max-w-5xl">
        {/*<Image src='/images/logo.jpg' alt='Logo' width={70} height={50} />*/}
        <nav id="" className="flex justify-end">
          <label ref={ref} htmlFor="checkbox" className="py-0.5 lg:hidden">
            &#9776;
          </label>
          <input type="checkbox" id="checkbox" className="peer hidden" />

          <div className="absolute left-full top-11 w-3/4 transition-all peer-checked:left-1/4 peer-checked:top-11 md:w-1/3 md:peer-checked:left-2/3 lg:static lg:flex lg:w-auto lg:justify-end lg:gap-2 lg:peer-checked:static lg:peer-checked:flex">
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
              <button
                className="block w-full bg-green-200 p-1 text-center text-sm font-bold text-green-600 transition hover:bg-green-400 hover:text-green-100 lg:inline-block lg:w-32 lg:rounded lg:text-center"
                onClick={() => void signIn()}
              >
                Sign in
              </button>
            )}
          </div>

          {user && (
            <div className="group ml-2 flex items-center justify-center">
              <Image
                className="profile-image rounded-md object-cover"
                src={userImg}
                width={28}
                height={28}
                alt="profile image"
              />

              <div className="absolute right-0 top-12 hidden border-t border-green-950 bg-green-200 group-hover:block">
                <Link
                  className="block px-2 text-green-900 transition hover:bg-green-400"
                  href="/account/profile"
                >
                  Profile
                </Link>
                <Link
                  className="block px-2 text-green-900 transition hover:bg-green-400"
                  href="/account/notifications"
                >
                  Notifications
                </Link>
                <Link
                  className="block px-2 text-green-900 transition hover:bg-green-400"
                  href="/account/listings"
                >
                  My Listings
                </Link>
                <Link
                  className="block px-2 text-green-900 transition hover:bg-green-400"
                  href="/account/bids-and-wins"
                >
                  My Bids & Wins
                </Link>
                <Link
                  className="block px-2 text-green-900 transition hover:bg-green-400"
                  href="/account/shipments"
                >
                  My Shipments
                </Link>
                <button className="p-2 " onClick={() => void signOut()}>
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Header;
