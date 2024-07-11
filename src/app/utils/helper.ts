export const formatNumber = (num: number) => {
  num = Math.round(num);

  if (num >= 1000000) {
    return (
      (num / 1000000).toLocaleString(undefined, { minimumFractionDigits: 0 }) +
      "M"
    );
  } else if (num >= 1000) {
    return (
      (num / 1000).toLocaleString(undefined, { maximumFractionDigits: 0 }) + "k"
    );
  } else {
    return num.toLocaleString();
  }
};

interface StatusInfo {
  text: string;
  icon: string;
}

export const getStatusText = (status: number) => {
  if (status > 0) {
    return `+${status.toFixed(2)}%`;
  } else {
    return `${status.toFixed(2)}%`;
  }
};

export const formatTime = (time: string) => {
  const [hour] = time.split(":").map(Number);
  const period = hour < 12 ? "AM" : "PM";
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
  return `${formattedHour} ${period}`;
};

type ChartData = {
  today: { month: string; amount: number }[];
  lastWeek: { month: string; amount: number }[];
  lastMonth: { month: string; amount: number }[];
  lastYear: { month: string; amount: number }[];
};

interface CardData {
  title: string;
  amount: number;
  status: number;
}

interface MockData {
  [key: string]: CardData[];
}

export const revenueDummyData: ChartData = {
  today: [
    {
      month: "00:00",
      amount: 95530,
    },
    {
      month: "03:00",
      amount: 91378,
    },
    {
      month: "06:00",
      amount: 21121,
    },
    {
      month: "09:00",
      amount: 7265,
    },
    {
      month: "12:00",
      amount: 25752,
    },
    {
      month: "15:00",
      amount: 77634,
    },
  ],
  lastWeek: [
    {
      month: "Mon",
      amount: 459232,
    },
    {
      month: "Tue",
      amount: 450696,
    },
    {
      month: "Wed",
      amount: 575569,
    },
    {
      month: "Thu",
      amount: 565373,
    },
    {
      month: "Fri",
      amount: 349453,
    },
    {
      month: "Sat",
      amount: 613018,
    },
    {
      month: "Sun",
      amount: 305429,
    },
  ],
  lastMonth: [
    {
      month: "Jun 1",
      amount: 744818,
    },
    {
      month: "Jun 2",
      amount: 544629,
    },
    {
      month: "Jun 3",
      amount: 117757,
    },
    {
      month: "Jun 4",
      amount: 785605,
    },
    {
      month: "Jun 5",
      amount: 605128,
    },
    {
      month: "Jun 6",
      amount: 558921,
    },
    {
      month: "Jun 7",
      amount: 275854,
    },
    {
      month: "Jun 8",
      amount: 167613,
    },
    {
      month: "Jun 9",
      amount: 283711,
    },
    {
      month: "Jun 10",
      amount: 150058,
    },
    {
      month: "Jun 11",
      amount: 759648,
    },
    {
      month: "Jun 12",
      amount: 536919,
    },
    {
      month: "Jun 13",
      amount: 490341,
    },
    {
      month: "Jun 14",
      amount: 589257,
    },
    {
      month: "Jun 15",
      amount: 288128,
    },
    {
      month: "Jun 16",
      amount: 428161,
    },
    {
      month: "Jun 17",
      amount: 806456,
    },
    {
      month: "Jun 18",
      amount: 646383,
    },
    {
      month: "Jun 19",
      amount: 633261,
    },
    {
      month: "Jun 20",
      amount: 885724,
    },
    {
      month: "Jun 21",
      amount: 306198,
    },
    {
      month: "Jun 22",
      amount: 768574,
    },
    {
      month: "Jun 23",
      amount: 671699,
    },
    {
      month: "Jun 24",
      amount: 761354,
    },
    {
      month: "Jun 25",
      amount: 721144,
    },
    {
      month: "Jun 26",
      amount: 578173,
    },
    {
      month: "Jun 27",
      amount: 753239,
    },
    {
      month: "Jun 28",
      amount: 146248,
    },
    {
      month: "Jun 29",
      amount: 98291,
    },
    {
      month: "Jun 30",
      amount: 476826,
    },
  ],
  lastYear: [
    {
      month: "Jan",
      amount: 301070,
    },
    {
      month: "Feb",
      amount: 336867,
    },
    {
      month: "Mar",
      amount: 571419,
    },
    {
      month: "Apr",
      amount: 338798,
    },
    {
      month: "May",
      amount: 600478,
    },
    {
      month: "Jun",
      amount: 681653,
    },
    {
      month: "Jul",
      amount: 848379,
    },
    {
      month: "Aug",
      amount: 397171,
    },
    {
      month: "Sep",
      amount: 1047762,
    },
    {
      month: "Oct",
      amount: 1041831,
    },
    {
      month: "Nov",
      amount: 407703,
    },
    {
      month: "Dec",
      amount: 1408840,
    },
  ],
};

export const transactionDummyData: ChartData = {
  today: [
    {
      month: "00:00",
      amount: 51436,
    },
    {
      month: "03:00",
      amount: 22470,
    },
    {
      month: "06:00",
      amount: 53805,
    },
    {
      month: "09:00",
      amount: 77700,
    },
    {
      month: "12:00",
      amount: 42859,
    },
    {
      month: "15:00",
      amount: 16407,
    },
  ],
  lastWeek: [
    {
      month: "Mon",
      amount: 571339,
    },
    {
      month: "Tue",
      amount: 601290,
    },
    {
      month: "Wed",
      amount: 328222,
    },
    {
      month: "Thu",
      amount: 281555,
    },
    {
      month: "Fri",
      amount: 694656,
    },
    {
      month: "Sat",
      amount: 351811,
    },
    {
      month: "Sun",
      amount: 300527,
    },
  ],
  lastMonth: [
    {
      month: "Jun 1",
      amount: 753080,
    },
    {
      month: "Jun 2",
      amount: 599457,
    },
    {
      month: "Jun 3",
      amount: 140597,
    },
    {
      month: "Jun 4",
      amount: 971025,
    },
    {
      month: "Jun 5",
      amount: 342099,
    },
    {
      month: "Jun 6",
      amount: 10428,
    },
    {
      month: "Jun 7",
      amount: 117632,
    },
    {
      month: "Jun 8",
      amount: 24740,
    },
    {
      month: "Jun 9",
      amount: 910481,
    },
    {
      month: "Jun 10",
      amount: 454057,
    },
    {
      month: "Jun 11",
      amount: 399634,
    },
    {
      month: "Jun 12",
      amount: 591353,
    },
    {
      month: "Jun 13",
      amount: 58999,
    },
    {
      month: "Jun 14",
      amount: 237792,
    },
    {
      month: "Jun 15",
      amount: 654680,
    },
    {
      month: "Jun 16",
      amount: 936829,
    },
    {
      month: "Jun 17",
      amount: 297175,
    },
    {
      month: "Jun 18",
      amount: 302893,
    },
    {
      month: "Jun 19",
      amount: 131716,
    },
    {
      month: "Jun 20",
      amount: 491111,
    },
    {
      month: "Jun 21",
      amount: 9669,
    },
    {
      month: "Jun 22",
      amount: 612117,
    },
    {
      month: "Jun 23",
      amount: 526816,
    },
    {
      month: "Jun 24",
      amount: 84721,
    },
    {
      month: "Jun 25",
      amount: 680357,
    },
    {
      month: "Jun 26",
      amount: 847264,
    },
    {
      month: "Jun 27",
      amount: 172833,
    },
    {
      month: "Jun 28",
      amount: 968048,
    },
    {
      month: "Jun 29",
      amount: 659753,
    },
    {
      month: "Jun 30",
      amount: 887005,
    },
  ],
  lastYear: [
    {
      month: "Jan",
      amount: 354728,
    },
    {
      month: "Feb",
      amount: 302405,
    },
    {
      month: "Mar",
      amount: 446825,
    },
    {
      month: "Apr",
      amount: 670078,
    },
    {
      month: "May",
      amount: 355047,
    },
    {
      month: "Jun",
      amount: 735962,
    },
    {
      month: "Jul",
      amount: 790436,
    },
    {
      month: "Aug",
      amount: 920497,
    },
    {
      month: "Sep",
      amount: 449396,
    },
    {
      month: "Oct",
      amount: 1078950,
    },
    {
      month: "Nov",
      amount: 1284415,
    },
    {
      month: "Dec",
      amount: 450676,
    },
  ],
};

export const transactionByReferrerDummyData: ChartData = {
  today: [
    {
      month: "00:00",
      amount: 52877,
    },
    {
      month: "03:00",
      amount: 98791,
    },
    {
      month: "06:00",
      amount: 84213,
    },
    {
      month: "09:00",
      amount: 96243,
    },
    {
      month: "12:00",
      amount: 57803,
    },
    {
      month: "15:00",
      amount: 69723,
    },
  ],
  lastWeek: [
    {
      month: "Mon",
      amount: 728856,
    },
    {
      month: "Tue",
      amount: 600712,
    },
    {
      month: "Wed",
      amount: 742964,
    },
    {
      month: "Thu",
      amount: 363067,
    },
    {
      month: "Fri",
      amount: 250296,
    },
    {
      month: "Sat",
      amount: 520706,
    },
    {
      month: "Sun",
      amount: 585921,
    },
  ],
  lastMonth: [
    {
      month: "Jun 1",
      amount: 747064,
    },
    {
      month: "Jun 2",
      amount: 709231,
    },
    {
      month: "Jun 3",
      amount: 862219,
    },
    {
      month: "Jun 4",
      amount: 621192,
    },
    {
      month: "Jun 5",
      amount: 107637,
    },
    {
      month: "Jun 6",
      amount: 979085,
    },
    {
      month: "Jun 7",
      amount: 785956,
    },
    {
      month: "Jun 8",
      amount: 127442,
    },
    {
      month: "Jun 9",
      amount: 362056,
    },
    {
      month: "Jun 10",
      amount: 164916,
    },
    {
      month: "Jun 11",
      amount: 726646,
    },
    {
      month: "Jun 12",
      amount: 148759,
    },
    {
      month: "Jun 13",
      amount: 94278,
    },
    {
      month: "Jun 14",
      amount: 394744,
    },
    {
      month: "Jun 15",
      amount: 544734,
    },
    {
      month: "Jun 16",
      amount: 481065,
    },
    {
      month: "Jun 17",
      amount: 714656,
    },
    {
      month: "Jun 18",
      amount: 846766,
    },
    {
      month: "Jun 19",
      amount: 851893,
    },
    {
      month: "Jun 20",
      amount: 326481,
    },
    {
      month: "Jun 21",
      amount: 991809,
    },
    {
      month: "Jun 22",
      amount: 963849,
    },
    {
      month: "Jun 23",
      amount: 127806,
    },
    {
      month: "Jun 24",
      amount: 431567,
    },
    {
      month: "Jun 25",
      amount: 675075,
    },
    {
      month: "Jun 26",
      amount: 542907,
    },
    {
      month: "Jun 27",
      amount: 133728,
    },
    {
      month: "Jun 28",
      amount: 799296,
    },
    {
      month: "Jun 29",
      amount: 630320,
    },
    {
      month: "Jun 30",
      amount: 287289,
    },
  ],
  lastYear: [
    {
      month: "Jan",
      amount: 364255,
    },
    {
      month: "Feb",
      amount: 422645,
    },
    {
      month: "Mar",
      amount: 342647,
    },
    {
      month: "Apr",
      amount: 649983,
    },
    {
      month: "May",
      amount: 590224,
    },
    {
      month: "Jun",
      amount: 686925,
    },
    {
      month: "Jul",
      amount: 767381,
    },
    {
      month: "Aug",
      amount: 401237,
    },
    {
      month: "Sep",
      amount: 674227,
    },
    {
      month: "Oct",
      amount: 1087231,
    },
    {
      month: "Nov",
      amount: 811449,
    },
    {
      month: "Dec",
      amount: 432992,
    },
  ],
};

export const refunds: ChartData = {
  today: [
    {
      month: "00:00",
      amount: 87527,
    },
    {
      month: "03:00",
      amount: 21605,
    },
    {
      month: "06:00",
      amount: 71027,
    },
    {
      month: "09:00",
      amount: 50217,
    },
    {
      month: "12:00",
      amount: 52129,
    },
    {
      month: "15:00",
      amount: 47185,
    },
  ],
  lastWeek: [
    {
      month: "Mon",
      amount: 340914,
    },
    {
      month: "Tue",
      amount: 385824,
    },
    {
      month: "Wed",
      amount: 335949,
    },
    {
      month: "Thu",
      amount: 345146,
    },
    {
      month: "Fri",
      amount: 384949,
    },
    {
      month: "Sat",
      amount: 261693,
    },
    {
      month: "Sun",
      amount: 484394,
    },
  ],
  lastMonth: [
    {
      month: "Jun 1",
      amount: 12666,
    },
    {
      month: "Jun 2",
      amount: 828444,
    },
    {
      month: "Jun 3",
      amount: 401951,
    },
    {
      month: "Jun 4",
      amount: 600514,
    },
    {
      month: "Jun 5",
      amount: 790846,
    },
    {
      month: "Jun 6",
      amount: 128651,
    },
    {
      month: "Jun 7",
      amount: 585049,
    },
    {
      month: "Jun 8",
      amount: 682877,
    },
    {
      month: "Jun 9",
      amount: 545821,
    },
    {
      month: "Jun 10",
      amount: 682127,
    },
    {
      month: "Jun 11",
      amount: 930213,
    },
    {
      month: "Jun 12",
      amount: 105098,
    },
    {
      month: "Jun 13",
      amount: 512144,
    },
    {
      month: "Jun 14",
      amount: 67719,
    },
    {
      month: "Jun 15",
      amount: 497002,
    },
    {
      month: "Jun 16",
      amount: 868939,
    },
    {
      month: "Jun 17",
      amount: 348163,
    },
    {
      month: "Jun 18",
      amount: 421608,
    },
    {
      month: "Jun 19",
      amount: 896340,
    },
    {
      month: "Jun 20",
      amount: 984609,
    },
    {
      month: "Jun 21",
      amount: 789269,
    },
    {
      month: "Jun 22",
      amount: 833585,
    },
    {
      month: "Jun 23",
      amount: 216668,
    },
    {
      month: "Jun 24",
      amount: 656429,
    },
    {
      month: "Jun 25",
      amount: 270738,
    },
    {
      month: "Jun 26",
      amount: 640718,
    },
    {
      month: "Jun 27",
      amount: 904574,
    },
    {
      month: "Jun 28",
      amount: 619637,
    },
    {
      month: "Jun 29",
      amount: 96707,
    },
    {
      month: "Jun 30",
      amount: 147175,
    },
  ],
  lastYear: [
    {
      month: "Jan",
      amount: 383419,
    },
    {
      month: "Feb",
      amount: 366122,
    },
    {
      month: "Mar",
      amount: 470234,
    },
    {
      month: "Apr",
      amount: 440650,
    },
    {
      month: "May",
      amount: 623328,
    },
    {
      month: "Jun",
      amount: 609722,
    },
    {
      month: "Jul",
      amount: 358547,
    },
    {
      month: "Aug",
      amount: 559760,
    },
    {
      month: "Sep",
      amount: 441098,
    },
    {
      month: "Oct",
      amount: 741207,
    },
    {
      month: "Nov",
      amount: 984191,
    },
    {
      month: "Dec",
      amount: 1375092,
    },
  ],
};

export const dashboardData = {
  today: [
    {
      title: "Revenue",
      amount: 39587,
      status: -1.97,
    },
    {
      title: "Transactions",
      amount: 50086,
      status: -27.17,
    },
    {
      title: "Average Transactions",
      amount: 75083,
      status: 1498.53,
    },
    {
      title: "Refunds",
      amount: 46941,
      status: 56.66,
    },
  ],
  lastWeek: [
    {
      title: "Revenue",
      amount: 659964,
      status: 91.62,
    },
    {
      title: "Transactions",
      amount: 712894,
      status: 119.3,
    },
    {
      title: "Average Transactions",
      amount: 275001,
      status: -57.9,
    },
    {
      title: "Refunds",
      amount: 275690,
      status: -46.43,
    },
  ],
  lastMonth: [
    {
      title: "Revenue",
      amount: 66985,
      status: -81.87,
    },
    {
      title: "Transactions",
      amount: 99198,
      status: 40.2,
    },
    {
      title: "Average Transactions",
      amount: 571044,
      status: -35.95,
    },
    {
      title: "Refunds",
      amount: 420163,
      status: -48.13,
    },
  ],
  lastYear: [
    {
      title: "Revenue",
      amount: 788816,
      status: 127.05,
    },
    {
      title: "Transactions",
      amount: 1492242,
      status: 358.7,
    },
    {
      title: "Average Transactions",
      amount: 656813,
      status: 72.78,
    },
    {
      title: "Refunds",
      amount: 733288,
      status: 118.4,
    },
  ],
};

export const transactionByVolume = [
  { location: "United States", portion: 38.6 },
  { location: "Canada", portion: 22.5 },
  { location: "Europe", portion: 30.8 },
  { location: "Other", portion: 8.1 },
];
