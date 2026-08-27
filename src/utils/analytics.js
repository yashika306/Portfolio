import ReactGA from "react-ga4";

// Read from environmental variables or default to a standard placeholder
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || "";

export const initGA = () => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
    console.log("Google Analytics 4 initialized successfully.");
  } else {
    console.log("GA Measurement ID not configured. Tracking is in simulation mode.");
  }
};

export const logPageView = (path) => {
  const pagePath = path || window.location.pathname + window.location.search;
  if (GA_MEASUREMENT_ID) {
    ReactGA.send({ hitType: "pageview", page: pagePath });
  } else {
    console.log(`[Analytics Simulation] PageView tracked: ${pagePath}`);
  }
};

export const logEvent = (category, action, label) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
    });
  } else {
    console.log(`[Analytics Simulation] Event tracked: Category=${category}, Action=${action}, Label=${label}`);
  }
};

export const logClick = (elementName, destinationUrl) => {
  logEvent("Outbound Clicks", `Clicked ${elementName}`, destinationUrl || "No URL");
};
