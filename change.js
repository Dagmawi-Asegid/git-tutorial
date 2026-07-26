const { projectConfig, showConfig } = require("./config");

// Display current project information
console.log("Current Project Information:");
showConfig();

console.log("----------------------------");

// Function to update project status
function updateStatus(newStatus) {
    projectConfig.status = newStatus;
    console.log("Project status updated to:", projectConfig.status);
}

// Function to add a new feature
function addFeature(feature) {
    projectConfig.features.push(feature);
    console.log("New feature added:", feature);
}

// Make changes
updateStatus("Completed");
addFeature("GitHub collaboration");

console.log("----------------------------");

// Display updated information
console.log("Updated Features:");
projectConfig.features.forEach((feature, index) => {
    console.log(`${index + 1}. ${feature}`);
});
