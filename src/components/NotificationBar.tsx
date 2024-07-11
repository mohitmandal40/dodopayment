"use client";

import { X } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const NotificationItem = [
  {
    title: "You have an issue that needs to be fixed.",
    timeStamp: "Just now",
    userIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e519f42519a130ffb6d765a1186539959ba3930f36affdb1150b23c7074b0807?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&",
  },
  {
    title: "New team member joined",
    timeStamp: "59 minutes ago",
    userIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/076c68f48c3e0795e8f1a12ac37aae559e47724f6343efd9d806010aede22a17?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&",
  },
  {
    title: "New product feature available",
    timeStamp: "12 hours ago",
    userIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/aa63489e8b9f64b40278076964e65bad96ab25425e35556c2989ac9af91b47a2?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&",
  },
  {
    title: "Andi Lane subscribed to you",
    timeStamp: "Today, 11:59 AM",
    userIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5bfbc49cb79e2388c86758d4db5d988ff6482292105768c13b194b543dcfc721?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&",
  },
];

const ActivityItem = [
  {
    title: "Discount details updated",
    timeStamp: "Just now",
    userIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8928683d6c9a73e0ea8908c3fb82b5407b20491c298856ae264db5ee1d91bcad?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8928683d6c9a73e0ea8908c3fb82b5407b20491c298856ae264db5ee1d91bcad?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8928683d6c9a73e0ea8908c3fb82b5407b20491c298856ae264db5ee1d91bcad?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8928683d6c9a73e0ea8908c3fb82b5407b20491c298856ae264db5ee1d91bcad?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8928683d6c9a73e0ea8908c3fb82b5407b20491c298856ae264db5ee1d91bcad?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8928683d6c9a73e0ea8908c3fb82b5407b20491c298856ae264db5ee1d91bcad?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8928683d6c9a73e0ea8908c3fb82b5407b20491c298856ae264db5ee1d91bcad?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8928683d6c9a73e0ea8908c3fb82b5407b20491c298856ae264db5ee1d91bcad?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&",
  },
  {
    title: "Aman added a new product",
    timeStamp: "59 minutes ago",
    userIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5bb0abaae5469e8cfd145c04cd64a19a1c77ad849aeb540ced9813d9ac4e23f2?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bb0abaae5469e8cfd145c04cd64a19a1c77ad849aeb540ced9813d9ac4e23f2?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bb0abaae5469e8cfd145c04cd64a19a1c77ad849aeb540ced9813d9ac4e23f2?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bb0abaae5469e8cfd145c04cd64a19a1c77ad849aeb540ced9813d9ac4e23f2?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bb0abaae5469e8cfd145c04cd64a19a1c77ad849aeb540ced9813d9ac4e23f2?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bb0abaae5469e8cfd145c04cd64a19a1c77ad849aeb540ced9813d9ac4e23f2?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bb0abaae5469e8cfd145c04cd64a19a1c77ad849aeb540ced9813d9ac4e23f2?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bb0abaae5469e8cfd145c04cd64a19a1c77ad849aeb540ced9813d9ac4e23f2?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&",
  },
  {
    title: "Refunds cleared",
    timeStamp: "12 hours ago",
    userIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a286e95348d0e3ba15d50d9f741a2fac2c6bf1ad0f8824b44098116035bff765?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a286e95348d0e3ba15d50d9f741a2fac2c6bf1ad0f8824b44098116035bff765?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a286e95348d0e3ba15d50d9f741a2fac2c6bf1ad0f8824b44098116035bff765?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a286e95348d0e3ba15d50d9f741a2fac2c6bf1ad0f8824b44098116035bff765?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a286e95348d0e3ba15d50d9f741a2fac2c6bf1ad0f8824b44098116035bff765?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a286e95348d0e3ba15d50d9f741a2fac2c6bf1ad0f8824b44098116035bff765?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a286e95348d0e3ba15d50d9f741a2fac2c6bf1ad0f8824b44098116035bff765?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a286e95348d0e3ba15d50d9f741a2fac2c6bf1ad0f8824b44098116035bff765?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&",
  },
  {
    title: "Tax report download complete",
    timeStamp: "Today, 11:59 AM",
    userIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ce0828a09010a3448f5120f635c60850b913b8abe0ddd5f886a4689e9880df35?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce0828a09010a3448f5120f635c60850b913b8abe0ddd5f886a4689e9880df35?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce0828a09010a3448f5120f635c60850b913b8abe0ddd5f886a4689e9880df35?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce0828a09010a3448f5120f635c60850b913b8abe0ddd5f886a4689e9880df35?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce0828a09010a3448f5120f635c60850b913b8abe0ddd5f886a4689e9880df35?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce0828a09010a3448f5120f635c60850b913b8abe0ddd5f886a4689e9880df35?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce0828a09010a3448f5120f635c60850b913b8abe0ddd5f886a4689e9880df35?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce0828a09010a3448f5120f635c60850b913b8abe0ddd5f886a4689e9880df35?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&",
  },
  {
    title: "Product details updated",
    timeStamp: "Feb 2, 2023",
    userIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c4f4c4e8d9438fde029f9c3c4c6e8206fe0430b80a835378873613982ec6ac4a?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4f4c4e8d9438fde029f9c3c4c6e8206fe0430b80a835378873613982ec6ac4a?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4f4c4e8d9438fde029f9c3c4c6e8206fe0430b80a835378873613982ec6ac4a?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4f4c4e8d9438fde029f9c3c4c6e8206fe0430b80a835378873613982ec6ac4a?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4f4c4e8d9438fde029f9c3c4c6e8206fe0430b80a835378873613982ec6ac4a?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4f4c4e8d9438fde029f9c3c4c6e8206fe0430b80a835378873613982ec6ac4a?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4f4c4e8d9438fde029f9c3c4c6e8206fe0430b80a835378873613982ec6ac4a?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4f4c4e8d9438fde029f9c3c4c6e8206fe0430b80a835378873613982ec6ac4a?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&",
  },
];

const NotificationBar: React.FC<{ toggleNotificationBar: () => void }> = ({
  toggleNotificationBar,
}) => {
  const { theme } = useTheme();
  return (
    <div
      className={`h-full ${
        theme === "dark" ? "text-white bg-[black]" : "bg-white"
      } flex flex-col p-5 border-l border-solid border-zinc-900 border-opacity-10 max-w-[280px] transition-all duration-100 ease-linear 
        `}
    >
      <div className="flex flex-col">
        <div className="flex justify-between px-1 py-2 text-sm font-semibold leading-5 whitespace-nowrap rounded-lg">
          Notifications
          <X onClick={toggleNotificationBar} />
        </div>
        {NotificationItem.map((item) => (
          <div
            key={item.title}
            className="flex flex-wrap gap-2 content-start p-1 mt-2 rounded-lg"
          >
            <div className="flex justify-center items-center self-start p-1 bg-sky-100 rounded-lg h-[25px] w-[25px]">
              <img
                loading="lazy"
                src={item.userIcon}
                className="w-4 aspect-square"
              />
            </div>
            <div className="flex flex-col flex-1 justify-center rounded-lg">
              <div className="text-sm leading-5 text-ellipsis">
                {item.title}
              </div>
              <div
                className={`text-xs leading-5 text-opacity-40 ${
                  theme === "dark" ? "text-white" : "text-zinc-900"
                }`}
              >
                {item.timeStamp}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-6">
        <div className="justify-center px-1 py-2 text-sm font-semibold leading-5 whitespace-nowrap rounded-lg">
          Activities
        </div>
        {ActivityItem.map((item) => (
          <div
            key={item.title}
            className="flex flex-wrap gap-2 content-start items-start px-1 py-0.5 mt-2 rounded-lg"
          >
            <div className="flex flex-col">
              <div className="flex justify-center items-center rounded-lg">
                <img
                  loading="lazy"
                  alt={item.title}
                  src={item.userIcon}
                  className="w-6 aspect-square"
                />
              </div>
              <div className="shrink-0 self-center mt-2 w-px h-3.5 bg-zinc-900 bg-opacity-10" />
            </div>
            <div className="flex flex-col flex-1 justify-center rounded-lg">
              <div className="text-sm leading-5 text-ellipsis">
                {item.title}
              </div>
              <div
                className={`text-xs leading-5 text-opacity-40 ${
                  theme === "dark" ? "text-white" : "text-zinc-900"
                }`}
              >
                {item.timeStamp}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationBar;
