function generateMarkdown(data) {
    return `
  # ${data.title}
  # ${data.Description}
  # ${data.TableofContents}
  # ${answers.Installations}
  # ${answers.Usage}
  # ${answers.License}
  # ${answers.Contributors}
  # ${answers.Tests}
  # ${answers.Questions}
  
  `;
}

module.exports = generateMarkdown;
