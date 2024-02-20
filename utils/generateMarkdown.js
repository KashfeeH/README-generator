// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Description 
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [GitHub](#GitHub)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## License 
  This project is licensed under MIT (License).
 
  ## Contributions 
  ${data.contribution}
 
  ## Test
  ${data.test}

  ## GitHub
  ${data.GitHub}
  
  ## Questions
  If you have any questions regarding this project, please email me at ${data.email}. 
`;
}

module.exports = generateMarkdown;
