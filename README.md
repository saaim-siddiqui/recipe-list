# recipe-list

## Project Structure and Design Decisions

### Standalone Components  
In this project, I utilized **standalone components** to display data, taking advantage of their benefits, such as:  
- Improved modularity  
- Reduced dependencies  
- Simplified structure  

### Separation of Concerns  
I maintained a clear separation of concerns by keeping the **program logic of the Recipe component separate** from the UI, ensuring better maintainability and readability.  

### Service Class Consideration  
Since the dataset for this task was small, I chose **not to include a service class**, as direct handling within the component was sufficient. However, for larger datasets or more complex logic, a service class could be added to improve reusability and scalability.  

### Folder Structure  
To maintain a clean and scalable project structure, I introduced the following folders:  
- **`models/`** – Contains all interface definitions for better type safety and organization.  
- **`assets/`** – Stores static assets required by the application.  

This structure ensures better maintainability and scalability as the project grows.  
