// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseType = license.license;
  const renderedLicense = ''
  if (licenseType === 'MIT') {
    renderedLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (licenseType === 'GPL') {
    renderedLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (licenseType === 'Apache') {
    renderedLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else {
    licenseType = 'N/A'
  }
  console.log(licenseType);
  return renderedLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseType = license.license;
  const renderedLicense = ''
if (licenseType === 'MIT') {
  renderedLink = `[![License: MIT](https://opensource.org/licenses/MIT)`
} else if (licenseType === 'GPL') {
  renderedLink = `[![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
} else {
  renderedLink = `[![License](https://opensource.org/licenses/Apache-2.0)`
}
console.log(renderedLink);
return renderedLicense;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderedLicense}
## Project Description
${data.projDescr}
## Installation Instructions
${data.installInst}
##License
${licenseType}
${renderedLink}
## Contact Information
${data.gitHub}
${data.email}
`;
}

module.exports = generateMarkdown;