function submitForm() {
    const projectID = document.getElementById('projectID').value;
    const projectName = document.getElementById('projectName').value;
    const assignedTo = document.getElementById('assignedTo').value;
    const assignmentDate = document.getElementById('assignmentDate').value;
    const deadline = document.getElementById('deadline').value;

    const projectData = {
        "Project-ID": projectID,
        "Project-Name": projectName,
        "Assigned-To": assignedTo,
        "Assignment-Date": assignmentDate,
        "Deadline": deadline
    };

    // Assuming the JPDBObject.js library is loaded and available globally
    const dbObject = new JPDBObject('COLLEGE-DB', 'PROJECT-TABLE', 'Project-ID');

    // Use JsonPowerDB API to store data in the database
    dbObject.insert(projectData, function(response) {
        if (response) {
            // Display a success message (replace with actual feedback to the user)
            alert("Project created successfully!");
        } else {
            // Display an error message (replace with actual feedback to the user)
            alert("Failed to create project. Please try again.");
        }
    });
}
