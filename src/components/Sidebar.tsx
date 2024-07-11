"use client";

import Image from "next/image";
import React, { useState } from "react";
import UserIcon from "@/asset/IconSet.png";
import { usePathname, useRouter } from "next/navigation";
import {
  CircleDollarSign,
  NotebookText,
  Receipt,
  Rocket,
  ScanBarcode,
  Settings,
  ShoppingBasket,
  SquareUser,
  Users,
  ChevronRight,
  File,
  Headset,
  Link,
} from "lucide-react";
import { useTheme } from "next-themes";
import DodoPayment from "@/components/DodoPaymentIcon";

const referItems = [
  {
    label: "Documentation",
    IconUrl: File,
    link: "/documentation",
  },
  {
    label: "Help Center",
    IconUrl: Headset,
    link: "/help-center",
  },
];

const menuItems = [
  {
    label: "Overview",
    IconUrl: Rocket,
    link: "/overview",
  },
  {
    label: "Transactions",
    IconUrl: CircleDollarSign,
    children: [{ label: "Page 1", link: "/transactions/page1" }],
  },
  {
    label: "Invoices",
    IconUrl: Receipt,
    children: [{ label: "Page 1", link: "/invoices/page1" }],
  },
  {
    label: "Customers",
    IconUrl: Users,
    children: [{ label: "Page 1", link: "/customers/page1" }],
  },
  {
    label: "Product Catalog",
    IconUrl: ScanBarcode,
    children: [
      { label: "Overview", link: "/product-catalog/overview" },
      { label: "Products", link: "/product-catalog/products" },
      { label: "Discounts", link: "/product-catalog/discounts" },
      { label: "Taxable Items", link: "/product-catalog/taxable-items" },
    ],
  },
  {
    label: "Reports",
    IconUrl: SquareUser,
    children: [{ label: "Page 1", link: "/reports/page1" }],
  },
  {
    label: "Checkout",
    IconUrl: ShoppingBasket,
    children: [{ label: "Page 1", link: "/checkout/page1" }],
  },
  {
    label: "Business Account",
    IconUrl: NotebookText,
    children: [{ label: "Page 1", link: "/business-account/page1" }],
  },
  {
    label: "Developer Tools",
    IconUrl: Settings,
    children: [{ label: "Page 1", link: "/developer-tools/page1" }],
  },
];

const Sidebar: React.FC<{
  active: boolean;
  isSidebarOpen: boolean;
  toggleSideBar: () => void;
}> = ({ isSidebarOpen, toggleSideBar }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const { theme } = useTheme();

  const toggleMenu = (menu: string) => {
    setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const handleNavigation = (link: string) => {
    router.push(link);
  };

  const isActiveMenuItem = (
    menuItem: string,
    children?: { label: string; link: string }[]
  ) => {
    if (children) {
      return children.some((child) => pathname.startsWith(child.link));
    }
    return (
      pathname === `/${menuItem.toLowerCase().split(" ").join("-")}` ||
      pathname.startsWith(`/${menuItem.toLowerCase()}/`)
    );
  };

  return (
    <div
      className={`${
        theme === "dark" ? "text-white" : ""
      } transition-all duration-100 ease-linear ${
        isSidebarOpen ? "w-[300px]" : "w-[100px]"
      } flex flex-col items-center h-screen px-4 py-5`}
    >
      <ChevronRight
        onClick={toggleSideBar}
        className={`transform transition-transform mb-4 ${
          isSidebarOpen ? "rotate-180" : "rotate-0"
        }`}
      />
      <div className="flex justify-center w-full items-center mb-4">
        <Image src={UserIcon} alt="UserIcon" className={`w-6 h-6 mr-[6px]`} />
        {isSidebarOpen && <div className="py-[6px]">Superstars AI</div>}
      </div>

      {isSidebarOpen && (
        <section className="w-full flex flex-col items-center mb-8">
          <div className="flex gap-4 justify-center mb-1">
            <h3
              className={`py-1 px-2 ${
                theme === "dark" ? "text-white" : "text-[rgba(28,28,28,0.4)]"
              } `}
            >
              Favorites
            </h3>
            <h3
              className={`py-1 px-2 ${
                theme === "dark" ? "text-white" : "text-[rgba(28,28,28,0.4)]"
              } `}
            >
              Recently
            </h3>
          </div>
          <ul
            className={`${
              theme === "dark"
                ? "marker:text-white"
                : "marker:text-[rgba(28,28,28,0.2)]"
            } marker:text-[rgba(28,28,28,0.2)] list-outside list-disc ml-6`}
          >
            <li className="py-1">Get Started</li>
            <li className="py-1">Transactions</li>
          </ul>
        </section>
      )}

      <section>
        <h3
          className={`px-3 py-1 ${
            theme === "dark" ? "text-white" : "text-[rgba(28,28,28,0.4)]"
          } `}
        >
          Pages
        </h3>
        <div className="flex flex-col pb-3 max-w-[180px]">
          {menuItems.map(({ label, IconUrl, children, link = "" }) => (
            <div key={label} className="flex flex-col">
              <div
                className={`flex ${
                  isSidebarOpen ? undefined : "justify-center"
                } items-center gap-1 py-1 px-2 text-sm leading-5 rounded-lg text-zinc-900 cursor-pointer ${
                  isActiveMenuItem(label, children)
                    ? `${
                        theme === "dark"
                          ? "bg-[rgba(255,255,255,0.05)]"
                          : "bg-[rgba(28,28,28,0.05)]"
                      } border-l-4 border-zinc-900`
                    : ""
                }`}
                onClick={() => {
                  if (children) {
                    toggleMenu(label);
                  } else {
                    handleNavigation(link);
                  }
                }}
              >
                {isSidebarOpen && children && (
                  <ChevronRight
                    className={`w-4 h-4 text-[rgba(28,28,28,0.4)] transform transition-transform ${
                      openMenu === label ? "rotate-90" : "rotate-0"
                    } ${theme === "dark" ? "text-white" : ""}`}
                  />
                )}
                {IconUrl && (
                  <IconUrl
                    className={`w-5 h-5 p-[1.87px] ${
                      theme === "dark" ? "text-white" : ""
                    }`}
                  />
                )}
                {isSidebarOpen && (
                  <div
                    className={`justify-center rounded-lg ${
                      theme === "dark" ? "text-white" : ""
                    }`}
                  >
                    {label}
                  </div>
                )}
              </div>
              {isSidebarOpen && (
                <div
                  className={`transition-[max-height] ease-in-out overflow-hidden ${
                    openMenu === label ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <ul className="flex flex-col pl-6 transition-all">
                    {children?.map((child) => (
                      <li key={child.label}>
                        <div
                          className={`py-1 pl-2 text-sm cursor-pointer ${
                            pathname === child.link ? "font-semibold" : ""
                          }`}
                          onClick={() => handleNavigation(child.link)}
                        >
                          {child.label}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3
          className={`px-3 py-1 ${
            theme === "dark" ? "text-white" : "text-[rgba(28,28,28,0.4)]"
          } `}
        >
          Pages
        </h3>
        <div className="flex flex-col pb-3 max-w-[180px]">
          {referItems.map(({ label, IconUrl, link = "" }) => (
            <div key={label} className="flex flex-col">
              <div
                className={`flex ${
                  isSidebarOpen ? undefined : "justify-center"
                } items-center gap-1 py-1 px-2 text-sm leading-5 rounded-lg text-zinc-900 cursor-pointer ${
                  isActiveMenuItem(label)
                    ? `${
                        theme === "dark"
                          ? "bg-[rgba(255,255,255,0.05)]"
                          : "bg-[rgba(28,28,28,0.05)]"
                      } border-l-4 border-zinc-900`
                    : ""
                }`}
                onClick={() => {
                  handleNavigation(link);
                }}
              >
                <Link
                  className={`w-4 h-4 text-[rgba(28,28,28,0.4)] transform transition-transform ${
                    openMenu === label ? "rotate-90" : "rotate-0"
                  } ${theme === "dark" ? "text-white" : ""}`}
                />
                {IconUrl && (
                  <IconUrl
                    className={`w-5 h-5 p-[1.87px] ${
                      theme === "dark" ? "text-white" : ""
                    }`}
                  />
                )}
                {isSidebarOpen && (
                  <div
                    className={`justify-center rounded-lg ${
                      theme === "dark" ? "text-white" : ""
                    }`}
                  >
                    {label}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex items-center">
        <DodoPayment />
        {isSidebarOpen && (
          <span
            className={`font-bold text-[rgba(0,0,0,1)] ${
              theme === "dark" ? "text-white" : "text-[rgba(0,0,0,1)]"
            }`}
          >
            ODO PAYMENTS
          </span>
        )}
      </section>
    </div>
  );
};

export default Sidebar;
