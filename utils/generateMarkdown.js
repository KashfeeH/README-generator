// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [!License: MIT(https://img.shields.io/badge/License-MIT-yellow.svg)]
  
  ## Description 
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## License 
  Distributed under the MIT License. See LICENSE.txt for more information.
 
  ## Contributions 
  ${data.contribution}
 
  ## Test
  ${data.test}
  
  ## Questions
  If you have any questions regarding this project, please email me at ${data.email}. 
`;
}

module.exports = generateMarkdown;
