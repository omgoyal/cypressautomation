const report = require("multiple-cucumber-html-reporter");
const moment = require("moment-timezone");

const currentDateTime = moment().tz("Asia/Kolkata").format("MMM Do YYYY, hh:mm A z");
report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "./cypress/cucumberReports/cucumber-html-report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "134",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Cypress Automation Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: currentDateTime  },
      { label: "Execution End Time", value: currentDateTime  },
    ],
  },
});