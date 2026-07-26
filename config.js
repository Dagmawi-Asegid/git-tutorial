const projectConfig = {
    projectName: "Git Tutorial",
    developer: "Dagmawi",
    version: "1.0.0",
    status: "Active",
    features: [
        "Git basics",
        "JavaScript modules",
        "Node.js practice"
    ]
};

function showConfig() {
    console.log("Project:", projectConfig.projectName);
    console.log("Developer:", projectConfig.developer);
    console.log("Version:", projectConfig.version);
    console.log("Status:", projectConfig.status);
}

module.exports = {
    projectConfig,
    showConfig
};
