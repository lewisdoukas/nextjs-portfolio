export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Seba",
    position: "Client from Poland",
    img: "/assets/review1.png",
    review:
      "Lewis is a top-notch python developer! His professionalism and attention to details are outstanding. Working with him was pure pleasure thanks to his superb openmindness and quick responses. Even requested tasks pure out of the box were accomplished in every detail. Highly recommend! 🙌",
  },
  {
    id: 2,
    name: "Saifam",
    position: "Client from United Arab Emirates",
    img: "/assets/review2.png",
    review:
      "Honestly Lewis is the best person to go to. He delivered the bot earlier than expected and when there were some technical issues, he was able to join zoom calls and spend lots of his time to help fix those issues. All in all the best person I have worked with on this app.",
  },

  {
    id: 3,
    name: "Mertcan Meric",
    position: "Client from Germany",
    img: "/assets/review3.png",
    review:
      "Lewis was very engaged to find the perfect solution for my idees, so he explained me different possibilities with their pros and cons and gave me some kind of advice which solution seems the best for my idees. It was great to work with Lewis and I'm happy to continue working with him for coming projects.",
  },
  {
    id: 4,
    name: "Chacho",
    position: "Client from Philippines",
    img: "/assets/review4.png",
    review:
      "Really awesome to work with this very good Dev. He is indeed an expert on making not only Trading Bots but in pinescript. He really is a patient and very professional person. Woul love to work with him in the future. Highly recommended!!!",
  },
];

export const myProjects = [
  {
    title: "Lawyer business web application",
    desc: "Web application which allows potential clients to contact with the office, schedule online appointments and track the progress of their cases. It also serves as a CMS enabling business administrators to manage all the necessary information about their clients and cases.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript and Appwrite, for optimal performance and scalability.",
    href: "https://paulidoulaw.com",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/tech/next.png",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/tech/react.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/tech/tailwindcss.png",
      },
      {
        id: 4,
        name: "TypeScript",
        path: "/assets/tech/typescript.png",
      },
      {
        id: 5,
        name: "Appwrite",
        path: "/assets/tech/appwrite.png",
      },
    ],
  },
  {
    title: "GeoFinder",
    desc: "Mobile application that enables users to enter coordinates of a point and determines if it belongs to Greece territory, calculating the minimum distance from the borderline.",
    subdesc:
      "It provides measurement & projection tools to transform coordinates to supported CRS (WGS84, GGRS87, ED50, MGRS).",
    href: null,
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/tech/html.png",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/tech/css.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/tech/javascript.png",
      },
      {
        id: 4,
        name: "Openlayers",
        path: "/assets/tech/openlayers.png",
      },
      {
        id: 5,
        name: "Cordova",
        path: "/assets/tech/cordova.png",
      },
    ],
  },
  {
    title: "Yaxul - TradingView Webhook router",
    desc: "Web-based platform that allows users to translate a TradingView signal into an order on several crypto exchanges like Binance, Bybit, BingX, Bitget and Phemex. ",
    subdesc:
      "Users can track live performance of opened positions, order history with PnL, generate performance cards and send them to a Discord server.",
    href: "https://yaxul.com/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/tech/python.png",
      },
      {
        id: 2,
        name: "Flask",
        path: "/assets/tech/flask.png",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/tech/tailwindcss.png",
      },
      {
        id: 4,
        name: "MySQL",
        path: "/assets/tech/mysql.png",
      },
    ],
  },
  {
    title: "Trading Bots",
    desc: "Desktop application which allows users to connect with a crypto exchange using APIs and automate trading procedures based on conditions implied by an underlying trading strategy. It provides backtesting functionality using the powerful library vectorbt.",
    subdesc:
      "Highly customizable so it can be used for several combinations of crypto exchange - trading strategy according to client's needs.",
    href: null,
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/tech/python.png",
      },
      {
        id: 2,
        name: "Pandas",
        path: "/assets/tech/pandas.png",
      },
    ],
  },
  {
    title: "Psychologist business website",
    desc: "This website expands the present of a psychologist office to the web, giving the opportunity to connect with clients seeking for a therapist.",
    subdesc:
      "Built as web application using Next.js 14, Tailwind CSS and TypeScript giving the ability to scale into a robust full stack Client Management System.",
    href: "https://ninadollis.com",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/tech/next.png",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/tech/react.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/tech/tailwindcss.png",
      },
      {
        id: 4,
        name: "TypeScript",
        path: "/assets/tech/typescript.png",
      },
    ],
  },
  {
    title: "DkSolver - Gravity Anomaly Network Adjustment",
    desc: "Desktop application which allows users to adjust a free-air gravity anomaly network using linear regression techniques. It implements hypothesis testing using F-test, exports relevant tables & reports and generates a web-map showing the location and adjusted values of network's stations.",
    subdesc:
      "It was developed for the porpuse of a graduation project on regression analysis. It combines both programming and statistic techniques as well as web map visualization.",
    href: null,
    texture: "/textures/project/project6.mp4",
    logo: "/assets/project-logo6.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/tech/python.png",
      },
      {
        id: 2,
        name: "Pandas",
        path: "/assets/tech/pandas.png",
      },
      {
        id: 3,
        name: "Leaflet",
        path: "/assets/tech/leaflet.png",
      },
    ],
  },
  {
    title: "GPS2Radio",
    desc: "Mobile application which enables users to share their current location through a radio network. It uses device's GPS and it can operate offline.",
    subdesc:
      "It provides measurement and projection tools for supported Coordinate Reference Systems (WGS84, GGRS87, ED50, MGRS) and generates reports.",
    href: null,
    texture: "/textures/project/project7.mp4",
    logo: "/assets/project-logo7.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/tech/html.png",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/tech/css.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/tech/javascript.png",
      },
      {
        id: 4,
        name: "Openlayers",
        path: "/assets/tech/openlayers.png",
      },
      {
        id: 5,
        name: "Cordova",
        path: "/assets/tech/cordova.png",
      },
    ],
  },
];

export const experiences = [
  {
    title: "Officer cadet",
    company_name: "Hellenic Army Academy",
    icon: "/assets/company/sse.png",
    iconBg: "#0E0E10",
    date: "Sep 2012 - Jun 2016",
    points: [
      "Military and academic education to become an armed forces officer.",
      "Graduation grade 8.1/10",
    ],
  },
  {
    title: "Lieutenant of Artillery",
    company_name: "School of Artillery",
    icon: "/assets/company/spv.png",
    iconBg: "#afb0b6",
    date: "Jul 2016 - Jun 2018",
    points: [
      "One year of military training to obtain specialty on artillery sector.",
      "Graduated at 4th place.",
      "One year as a trainer of artillery's reserve officers.",
    ],
  },
  {
    title: "Artillery Commander",
    company_name: "95th National Guard Higher Command",
    icon: "/assets/company/adte.png",
    iconBg: "#afb0b6",
    date: "Jul 2018 - Sep 2019",
    points: [
      "Commander of artillery company.",
      "Participating in several military exercises and managing personnel and resources.",
    ],
  },
  {
    title: "Geomatics Engineer",
    company_name:
      "Hellenic Military Geographical Service - School of Topography",
    icon: "/assets/company/gys.png",
    iconBg: "#0E0E10",
    date: "Oct 2019 - Jan 2023",
    points: [
      "Studying surveying and geomatics engineering (Oct 2019 - Jun 2021).",
      "Graduation grade 19.25/20 at 1st place.",
      "Participating in several land surveying projects including measurements with Total Station & GPS, \
      Geomagnetic and Gravity measurements across Greece's mainland and islands.",
      "Officer of HMGS Geodatabase department (Jul 2021 - Jan 2023).",
      "Working on several GIS projects using ArcGIS technologies.",
      "Software & Web developer, creating & maintaining several data analysis & spatial tools (Python), WebGIS applications (ArcGIS JS API, OpenLayers, Leaflet) and mobile applications (React-native, Cordova).",
    ],
  },
  {
    title: "Surveyor - Geoinformatics Engineer",
    company_name: "National Technical University of Athens",
    icon: "/assets/company/emp.png",
    iconBg: "#0E0E10",
    date: "Feb 2023 - Present",
    points: [
      "Studying to obtain an Integrated Master degree at School of Rural, Surveying and Geoinformatics Engineering.",
    ],
  },
  {
    title: "Freelancer Developer",
    company_name: "Fiverr",
    icon: "/assets/company/fiverr.png",
    iconBg: "#afb0b6",
    date: "Feb 2023 - Present",
    points: [
      "Developing applications related to finance, trading and crypto currencies.",
      "Creating automations for trading using TradingView Webhooks, Telegram posts and other social platforms.",
      "Automate trading using several strategies, indicators, technical analysis tools and APIs.",
      "Creating web applications related to crypto currency trading & TradingView Webhooks routing to crypto exchanges using APIs.",
      "Creating full stack web applications using Nextjs | React, implementing features such as Authentication, Database integration and Email notifications.",
      "Completing over 180 orders, satisfying over 70 unique clients and having over 120 5⭐️ reviews.",
      "Check out my profile",
    ],
  },
];

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean
) => {
  return {
    satellitePosition: isSmall
      ? [-1, -1, 0]
      : isMobile
      ? [-1, -1, 0]
      : isTablet
      ? [-1, -1, 0]
      : [-1, -1, 0],
  };
};
