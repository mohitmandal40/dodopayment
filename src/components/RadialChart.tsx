"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { useTheme } from "next-themes";

const Colors = [
  "rgba(11,100,104,1)",
  "rgba(197,250,88,1)",
  "rgba(239,142,91,1)",
  "rgba(82,96,98,1)",
];
const RadialChart: React.FC<{
  data: {
    location: string;
    portion: number;
  }[];
  title: string;
}> = ({ data, title }) => {
  const { theme } = useTheme();
  return (
    <Card className="lg:flex-1 sm:max-w-[432px] border-0 shadow-none">
      <CardTitle className="mb-[18px] text-sm">{title}</CardTitle>
      <CardContent className="p-2">
        <div className="flex flex-col sm:flex-row gap-5 self-stretch px-5 py-9 text-xs leading-5 text-zinc-900">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/855796a81ce9dfa869de0c4f1393e432631edcbbcda56ffbee9ecde8a909ed68?apiKey=4e2cbcd6df2b47528a2b949fab05edf1&"
            className="shrink-0 max-w-full aspect-square w-[120px]"
          />
          <div className="flex flex-col flex-1 rounded-2xl">
            {data.map((val, idx) => (
              <div
                key={val.location}
                className="flex flex-wrap gap-5 content-center mt-3 whitespace-nowrap rounded-lg"
              >
                <div className="flex flex-1 gap-0 py-0.5 pr-2 pl-1 items-center">
                  <div
                    style={{ backgroundColor: Colors[idx] }}
                    className={`size-[6px] rounded-full mr-[6px]`}
                  />

                  <div className={`${theme === "dark" ? "text-white" : ""}`}>
                    {val.location}
                  </div>
                </div>
                <div
                  className={`justify-center my-auto whitespace-nowrap rounded-lg ${
                    theme === "dark" ? "text-white" : ""
                  }`}
                >
                  {val.portion}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RadialChart;
