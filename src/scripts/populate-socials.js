/* Script for populating social buttons - Server Side Generation
 * This srtipt has to be run before deploying to production.
 *
 * Steps:
 * 1. Read and parse content from "data/social-profiles.json"
 * 2. Read button template markup
 * 3. Read app template markup
 * 4. Declare social-buttons markup string
 * 5. For every data entry, append social button markup to output string with correct data
 * 6. Replace "%social-buttons&" placeholder with output string in index.html markup
 * 7. Save updated markup as index.html
 */

const fs = require("fs");

// Read data and templates

const dataJSON = fs.readFileSync(
  `${__dirname}/../../data/social-profiles.json`,
  "utf-8"
);
const links = JSON.parse(dataJSON).links;

const templateApp = fs.readFileSync(
  `${__dirname}/../templates/template-app.html`,
  "utf-8"
);
const templateButton = fs.readFileSync(
  `${__dirname}/../templates/template-button.html`,
  "utf-8"
);

// Fill button templates

const socialButtons = links.map((link) =>
  templateButton
    .replace(/{%URL%}/g, link.url)
    .replace(/{%LABEL%}/g, link.label)
);

const socialButtonsMarkup = socialButtons.join(" ");

// Fill app template

const appMarkup = templateApp.replace(
  /{%SOCIAL_BUTTONS%}/g,
  socialButtonsMarkup
);

// Save output

fs.writeFileSync(
  `${__dirname}/../../index.html`,
  appMarkup,
  "utf-8"
);
