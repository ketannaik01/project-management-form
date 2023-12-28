

# Project Management Form

## Overview

The Project Management Form is a web application that allows users to input project details, storing the data in the `PROJECT-TABLE` relation of the `COLLEGE-DB` database. The form captures essential project information, including Project ID, Project Name, Assigned To, Assignment Date, and Deadline.

## Features

- **Input Fields:**
  - Project ID
  - Project Name
  - Assigned To
  - Assignment Date
  - Deadline

- **Database Details:**
  - Database Name: COLLEGE-DB
  - Table Name: PROJECT-TABLE

- **Primary Key:**
  - Project ID

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/project-management-form.git
   ```

2. Navigate to the project directory:

   ```bash
   cd project-management-form
   ```

3. Open `index.html` in your web browser to access the Project Management Form.

## Usage

1. Fill out the Project Management Form with the required information.

2. Click the "Submit" button to store the data in the `PROJECT-TABLE` of the `COLLEGE-DB` database.

## Project Structure

```plaintext
project-management-form/
|-- index.html
|-- js/
|   |-- JPDBObject.js
|   |-- script.js
|-- style.css
|-- README.md
|-- LICENSE
|-- CONTRIBUTING.md
```

## Dependencies

- [JPDBObject.js](http://login2explore.com/jpdb/resources/js/0.0.3/JPDBObject.js): JsonPowerDB library for database interaction.

## Contributing

Contributions are welcome! Please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to [JsonPowerDB](http://login2explore.com/jpdb/) for providing a versatile NoSQL database solution.

---

Adjust the details in the template according to your actual project structure, dependencies, and any specific guidelines for contributions or licensing. Additionally, update the usage instructions or any other sections as needed based on your project's specifics.
