import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import CardComponent from "components/CardComponent";
import Container from "components/layout/Container";

const UserPage = () => {
  return (
    <div>
      <div className="h-[40vh] overflow-hidden hidden md:block">
        <img src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" />
      </div>
      <div>
        <Container>
          <div className="flex items-start gap-x-8 md:gap-x-10">
            <div>
              <img
                src="https://abrakadabra.fun/uploads/posts/2022-02/1644169591_2-abrakadabra-fun-p-avatarka-s-ulibkoi-3.png"
                className="w-20 h-20 object-cover rounded-full md:w-40 md:h-40"
                alt="avatar"
              />
              <div className="hidden md:block py-12">
                kkmkm
              </div>
            </div>
            <div className="flex flex-col gap-y-2 md:pt-10">
              <div>
                <div className="text-lg md:text-3xl font-[500]">
                  Estebes Zharkyn
                </div>
                <div className="text-slate-500">examplae@gmail.com</div>
                <div className="md:hidden">
                  <Disclosure as="div" className="py-2">
                    {({ open }) => (
                      <>
                        <h3 className="">
                          <Disclosure.Button className="flex items-center justify-between gap-x-2">
                            <span className="font-medium text-slate-500">
                              {open ? "Скрыть" : "Подробнее"}
                            </span>
                            <span className="flex items-center">
                              {open ? (
                                <ChevronUpIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ChevronDownIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6 flex flex-col">
                          <div>sx</div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-3">
            <CardComponent
              post={{
                id: 0,
                title: "wef",
                subtitle: "sefsg",
                href: "",
                imageUrl: "",
                preview: "sefsrbgsragasr",
                buttonContent: undefined,
                prices: undefined,
              }}
            />
            <CardComponent
              post={{
                id: 0,
                title: "wef",
                subtitle: "sefsg",
                href: "",
                imageUrl: "",
                preview: "sefsrbgsragasr",
                buttonContent: undefined,
                prices: undefined,
              }}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default UserPage;
