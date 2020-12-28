# Health Web App
This is a prototype of a Health Web App in which users can take free online mental and physical health tests and make an appointment to a doctor.

Visit the hosted website: https://health-web-app.herokuapp.com/

## Technologies used:
* #### Node.js, Express.js (for backend server)
* #### HTML, CSS, Bootstrap (for frontend markup and styling)
* #### Ejs (for templating)
* #### MongoDB (for a database to store/retrieve user's login credentials)

## Version Control:
#### Git and Github

## Hosting Service:
#### Heroku

## Functionalities:

### 1. Login/Signup:
The user can signup using their email address and user's credentials will be stored in the database. The user can then Login using their email and password.

[login page image]

### 2. Mental Health Test:
[Mental Test image]
In this free online test, user has to answer 10 questions, each of which contains four choices. The user is awarded points on the basis of the following points system.



#### Points System
The maximum number of points a user can have is 30.
Choosing:
* **Not at all** - awards 0 points
* **Several Days** - awards 1 points
* **More than half the days** - awards 2 points
* **Nearly every day** - awards 3 points

After the test is completed, the user is assesed on the basis of these points. The assesment follows the following criteria:
* Minimal depression - if the points are in between **0 to 4  (both inclusive)**
* Mild depression - If the points are in between **5 to 9 (both inclusive)**
* Moderate depression - If the points are in between **10 to 14 (both inclusive)**
* Moderately Severe depression - If the points are in between **15 to 19 (both inclusive)**
* Severe Depression - If the points are in between **20 to 30 (both inclusive)**

### 3. Physical Health Test:
[Physical Test image]
In this free online test, user has to answer 10 questions, each of which contains four choices. The user is awarded points on the basis of the following points system.

#### Points System
The maximum number of points a user can have is 30.
Choosing:
* **Almost never** - awards 0 points
* **Sometimes** - awards 1 points
* **Often** - awards 2 points
* **Most of the time** - awards 3 points

After the test is completed, the user is assesed on the basis of these points. The assesment follows the following criteria:
* drastically change your lifestyle - if the points are in between **0 to 10  (both inclusive)**
* slighly change your lifestyle - If the points are in between **10 to 20 (both inclusive)**
* a perfect lifestyle - If the points are in between **20 to 30 (both inclusive)**

### 4. Make an appointment:
The user can make an appointment to a doctor as per their convenience but this can only be done after the user has logged in to application. If the appointment is succesful the user will be notified via an email.
