const { projectConfig, showConfig } = require("./config");

// Display the current project information
console.log("Current Project Information:");
showConfig();

console.log("----------------------------");

// Update the project's status
function updateProjectStatus(status) {
    projectConfig.status = status;
    console.log(`Project status updated to: ${projectConfig.status}`);
}

// Add a new feature to the project
function addProjectFeature(feature) {
    projectConfig.features.push(feature);
    console.log(`New feature added: ${feature}`);
}

// Make changes to the project
updateProjectStatus("Completed");
addProjectFeature("GitHub collaboration");

console.log("----------------------------");

// Display the updated list of features
console.log("Updated Features:");

projectConfig.features.forEach((feature, index) => {
    console.log(`${index + 1}. ${feature}`);
});
