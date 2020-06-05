function generateMarkdown(data) {
  return `
  # ${data.GithubUsername}
  # ${data.title}
  # ${data.Description}
  # ${data.TableofContents}
  # ${data.Installations}
  # ${data.Usage}
  # ${data.License}
  # ${data.Contributors}
  # ${data.Tests}
  # ${data.Questions}
  
  `;
}


module.exports = generateMarkdown;
