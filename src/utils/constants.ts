export const __prod__ = process.env.NODE_ENV === "production";
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_NEWS_KEY = process.env.NEXT_PUBLIC_API_KEY;
const newDate = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);
const before7Days = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
const before30Days = new Date(Date.now() - 20 * 24 * 60 * 60 * 1000);

export const isServer = typeof window === "undefined";

export const GOOGLE_ID =
  "360249142126-h7mujd5koqf27ilsqhjaie5rc85h97ga.apps.googleusercontent.com";

export const HOURS = [
  {
    id: newDate.toISOString().split("T")[0],
    name: "1 Days",
  },
  {
    id: before7Days.toISOString().split("T")[0],
    name: "7 Days ",
  },
  {
    id: before30Days.toISOString().split("T")[0],
    name: "30 Days",
  },
];

export const TYPE = [
  {
    id: "everything",
    name: "Every Things",
  },
  {
    id: "headline",
    name: "Top Headlines",
  },
];
export const COUNTRY = [
  // {
  //   id: "ar",
  //   name: "Argentina",
  // },
  // {
  //   id: "gr",
  //   name: "Greece",
  // },
  // {
  //   id: "nl",
  //   name: "Netherlands",
  // },
  {
    id: "South Africa",
    name: "sa",
  },
  {
    id: "au",
    name: "Australia",
  },
  {
    id: "Hong Kong",
    name: "hu",
  },
  // {
  //   id: "Nigeria",
  //   name: "ng",
  // },
  // {
  //   id: "Sweden",
  //   name: "se",
  // },
  // {
  //   id: "be",
  //   name: "Belgium",
  // },
  {
    id: "in",
    name: "India",
  },
  // {
  //   id: "Norway",
  //   name: "no",
  // },
  // {
  //   id: "ch",
  //   name: "Switzerland",
  // },
  // {
  //   id: "br",
  //   name: "Brazil",
  // },
  {
    id: "id",
    name: "Indonesia",
  },
  {
    id: "ph",
    name: "Philipines",
  },
  {
    id: "tw",
    name: "Taiwan",
  },
  // {
  //   id: "bg",
  //   name: "Bulgaria",
  // },
  {
    id: "ie",
    name: "Ireland",
  },
  {
    id: "pl",
    name: "Poland",
  },
  {
    id: "th",
    name: "Thailand",
  },
  // {
  //   id: "ca",
  //   name: "Canada",
  // },
  // {
  //   id: "il",
  //   name: "Israel",
  // },
  // {
  //   id: "pt",
  //   name: "Portugal",
  // },
  // {
  //   id: "tr",
  //   name: "Turkey",
  // },
  {
    id: "cn",
    name: "China",
  },
  // {
  //   id: "it",
  //   name: "Italy",
  // },
  // {
  //   id: "ro",
  //   name: "Romania",
  // },
  {
    id: "ae",
    name: "UAE",
  },
  {
    id: "jp",
    name: "Japan",
  },
  {
    id: "ru",
    name: "Russia",
  },
  {
    id: "United Kingdom",
    name: "gb",
  },
  {
    id: "us",
    name: "United States",
  },
  {
    id: "sg",
    name: "Singapore",
  },
  {
    id: "my",
    name: "Malaysia",
  },
  {
    id: "fr",
    name: "France",
  },
];

export const CATEGORY = [
  {
    id: "general",
    name: "General",
  },
  {
    id: "busisness",
    name: "Bussiness",
  },

  {
    id: "technology",
    name: "Technology",
  },
  {
    id: "science",
    name: "Science",
  },
]

export const HOURS_JOBS = [
  {
    id: 5000,
    name: "All",
  },
  {
    id: 24,
    name: "1 Day",
  },
  {
    id: 168,
    name: "7 Days",
  },
  {
    id: 1440,
    name: "1 Months",
  },
];
