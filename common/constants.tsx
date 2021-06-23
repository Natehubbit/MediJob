export const NAV_MENU = {
  profile: "/",
  jobs: "/jobs",
  "professional network": "/",
  lounge: "/",
  salary: "/",
} as const;

export const SORT_KEYS = [
  "Location",
  "Role",
  "Department",
  "Education",
  "Experience",
] as const;

export const FOOTER_CONTENT = {
  "About us": {
    list: [],
    body: (
      <p className="text-xs">
        We are a team of nurses, doctors, technologists and
        executives dedicated to help nurses find jobs that they
        love.
        <br />
        <br /> All copyright reserved &#169; 2020 - Health
        Explore
      </p>
    ),
  },
  Sitemap: {
    list: ["Nurses", "Employees", "Social Networking", "Jobs"],
    body: null,
  },
  Privacy: {
    list: ["Terms of use", "Privacy policy", "Cookie policy"],
    body: null,
  },
} as const;
