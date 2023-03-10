// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg" alt="GitHub License">`;
  }
  return " ";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None")  {
    return `* [License](#license)`;
  }
  return " ";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None")  {
    return `## License\nThis project is licensed under the ${license} license.`
}
return " ";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents

- [Project Description](#description)
- [Usage](#usage)
- [Contribution](#contribution)
- [Installation](#installation)
${renderLicenseLink(data.license)}

## Description
${data.description}

## Usage
${data.usage}

## Installation
${data.installation}

## Contribution
${data.contribution}

## Questions
### Send questions to this email:
${data.email}
### You can also contact me via Github:
[${data.github}](https://github.com/${data.github})

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
