/* eslint-disable @typescript-eslint/no-explicit-any */

import CardComponent, { CardProps } from "components/CardComponent";
import Container from "components/layout/Container";
import { observer } from "mobx-react-lite";
import { AppRoutePath } from "router/types";

const blogPosts: CardProps[] = [
  {
    id: 1,
    title: "Franchises",
    subtitle: "Become part of a successful network.",
    href: AppRoutePath.Franchises,
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview: "Explore franchise opportunities and open your own business with our support.",
    buttonContent: "Franchise catalog",
  },
  {
    id: 2,
    title: "Investment",
    subtitle: "Funding your future success",
    href: AppRoutePath.Franchises,
    imageUrl: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview: "A detailed overview of investment opportunities in a franchise.",
    buttonContent: "Investment catalog",
  },
  {
    id: 3,
    title: "Business For Sale",
    subtitle: "Start your entrepreneurial journey with us",
    href: AppRoutePath.Franchises,
    imageUrl: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview: "Get a ready-made business ready for profitable work.",
    buttonContent: "Business catalog",
  },
];

const Dashboard = () => {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-600 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-20 sm:px-6 sm:py-32 lg:py-40 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Invest in ideas that</span>
                  <span className="block text-slate-200">change the world</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-slate-200 sm:max-w-3xl"></p>
              </div>
            </div>
          </div>
        </div>

        {/* Information section */}
        <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
          <div className="relative">
            <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <p className="mt-2 text-3xl font-extrabold text-slate-600 tracking-tight sm:text-4xl">Information</p>
              <p className="mt-5 mx-auto max-w-prose text-xl text-slate-500">
                Here you will find all the necessary information about opportunities, financing and ready-made business solutions.
              </p>
            </div>
            <div className="mt-12 bg-white mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
              {blogPosts.map((post: CardProps) => (
                <CardComponent post={post} key={post.id} />
              ))}
            </div>
          </div>
        </div>

        {/* About us section */}
        <Container>
          <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
            <div className="flex gap-y-4 flex-col">
              <h2 className="text-2xl">Who we are?</h2>
              <h1 className="text-3xl font-bold">About us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Placerat sed tortor aliquam sit montes lacinia odio viverra. Suspendisse id quam in nisi lorem
                duis eleifend. Sodales mi lectus fermentum non. Facilisis egestas morbi neque sapien. Lorem in viverra sed viverra nec aliquam eget
                massa. Duis dignissim volutpat donec urna. Aliquet proin augue id vel. Vel in ultrices sed consectetur massa. Posuere venenatis
                laoreet facilisis tristique viverra.
              </p>
              <div className="pt-4">
                <button className="bg-slate-500 px-4 py-2 rounded-lg text-white hover:bg-slate-700">Contact us</button>
              </div>
            </div>
            <div className="hidden md:block px-6 py-12">
              <img
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                className="w-full rounded"
                alt="about us"
              />
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default observer(Dashboard);
