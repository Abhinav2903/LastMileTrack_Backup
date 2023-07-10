# LastMileTrack
Application for tracking Last Mile delivery time

Introduction: The Last Mile Track App is a mobile application developed using the Ionic framework. It enables users to track and manage delivery tasks at the last mile of the supply chain. The app consists of several pages that facilitate the delivery process, including Start Tour, Home, and End Tour. This report provides an overview of the app's page structure, functionality, and the technologies used.

App  Structure:

Start Tour Page:
Component: StartTourComponent
Description: This page serves as the initial screen of the app. It prompts the user to select the type of delivery, such as a package or newspaper.

Home Page:
Component: HomePage
Description: The Home page is the main page of the app. It displays a list of delivery tasks that can be performed by the delivery person. Each task includes details like a timer, start and end coordinates, and other variables.

End Tour Page:
Component: EndTourPage
Description: The End Tour page allows the user to provide feedback on the delivery experience, path, and route. After saving the data in a CSV file, the user is redirected back to the Start Tour page.
Functionality and Features:

Delivery Type Selection:
The Start Tour page enables the user to select the type of delivery, such as a package or newspaper, before starting the tour.

Task Management:
The Home page presents a list of delivery tasks that the user can perform.
Each task includes a timer to track the duration of the task.
Other variables, like start and end coordinates, help the delivery person navigate efficiently.

Feedback and Data Saving:
The End Tour page allows the user to provide feedback on the delivery route experience level.
The user's feedback data is saved in a CSV file for further analysis or reporting purposes.




Technologies and Permissions:

Ionic Framework:
The Last Mile Track App is developed using the Ionic framework, which allows for cross-platform app development using web technologies such as HTML, CSS, and JavaScript/TypeScript.

Ionic Plugins:
The app utilizes various Ionic plugins to leverage native app features, such as location tracking and file read/write operations.
Permissions are required to be handled for location tracking and file read/write operations to ensure the app functions correctly.

Conclusion: The Last Mile Track App developed with the Ionic framework provides a user-friendly interface for managing delivery tasks in the last mile of the supply chain. The app's page structure and functionality allow users to select delivery types, manage tasks with timers and variables, provide feedback on the delivery experience, and save data in a CSV file. 
By utilizing Ionic plugins, the app incorporates native features like location tracking and file operations. These features, along with the app's intuitive design, contribute to an efficient and streamlined delivery process analysis.

