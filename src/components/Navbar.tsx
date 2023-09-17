import { Popover, Transition } from "@headlessui/react";
import { XIcon, MenuIcon } from "@heroicons/react/solid";
import { getUserInfo } from "api/userApi";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutePath } from "router/types";
import { observer } from "mobx-react-lite";
import { User } from "api/types/user";
import { useStore } from "store/StoreContext";

const solutions = [
  {
    name: "Investments",
    description: "",
    href: AppRoutePath.Franchises,
  },
  {
    name: "Franchises",
    description: "",
    href: AppRoutePath.Franchises,
  },
  {
    name: "Bussiness for sale",
    description: "",
    href: AppRoutePath.Franchises,
  },
  {
    name: "Events",
    description: "",
    href: AppRoutePath.Franchises,
  },
];

const Navbar = () => {
  const [user, setUser] = useState<User | null>();
  const {
    auth: { logout },
  } = useStore();
  const navigate = useNavigate();

  const getData = async () => {
    const response = await getUserInfo();
    setUser(response.data);
  };

  const signOut = () => {
    logout();
    setUser(null);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <header>
      <Popover className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <button onClick={() => navigate("/")}>
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg" alt="" />
            </button>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {solutions.map((solution) => (
              <button className="text-base font-medium text-gray-500 hover:text-gray-900" onClick={() => navigate(solution.href)}>
                {solution.name}
              </button>
            ))}
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {user?.username ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-lg">{user.username}</p>
                <button className="ml-5 py-2 px-3 bg-red-400 text-white rounded-md" onClick={signOut}>
                  logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate(AppRoutePath.SignIn)}
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </button>
                <button
                  onClick={() => navigate(AppRoutePath.SignUp)}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-slate-600 to-slate-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-slate-700 hover:to-slate-700"
                >
                  Sign up
                </button>
              </>
            )}
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg" alt="Workflow" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {solutions.map((item) => (
                      <a key={item.name} href={item.href} className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="mt-4">
                  <button
                    onClick={() => navigate(AppRoutePath.SignUp)}
                    className="w-full flex items-center justify-center bg-gradient-to-r from-slate-600 to-slate-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-slate-700 hover:to-slate-700"
                  >
                    Sign up
                  </button>
                  <p className="mt-6 text-center text-base font-medium text-slate-500">
                    Already have an account?
                    <button className="text-slate-600 ml-1" onClick={() => navigate(AppRoutePath.SignIn)}>
                      Sign in
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
};

export default observer(Navbar);
