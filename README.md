# ID_Assignment
# Design process 
Our webpage will be about a delivery app. The app acts like a middleman for 2 parties, one who provides the good and the other being the reciever.
There are 2 categories to a user, a delivery person and a receiver of parcels.
As a delivery person, the app is suppose to assist me in telling where to collect the parcel, and where to deliver the parcel.
As a receiver, the app will inform me on the status of the parcel. 

# Features 
# Existing features 
Feature 1 - weather API to show users how the weather is today.
Feature 2 - A live date creator to show user what the date is today.
Feature 3 - Log in page that does not work yet, it is just a concept.
Feature 4 - Seller/Deliveryman can update the parcel status 
Feature 5 - User can check the current parcel status
Featuer 6 - Seller will first need to fill up the informations on where the parcel wil be sent to.

#Features left to implement
- Have the weather API mean something(when the forecast is 'Raining', there will be a text that inform receivers that their parcel delivery time might be longer)
- Functioning log in page if possible
- get the user information from deliveryparcel and add it into checkstatus/changestatus so that user can check parcel id and seller can update the parcel status. 
- Make it more flexible for all the information

# Technologies used
- API
This project uses API for aesthetic purposes. 
-jQuery
This project uses jQuery to make the JavaScript easier to manage

# Credits
Media
- The photos used in the homepage is taken from ''https://www.iconfinder.com/icons" 
- The photo used in Delivery Parcel, CheckStatus and change status is from " https://www.cannypic.com/free-vector/vector-delivery-man-339491"

Acknowledgements 
- I received inspiration for this project from 'Build a Weather app using HTML, CSS & JavaScript in 2020' by Tyler Potts from YouTube.



# Testing 
-DeliveryParcel, checkstatus and change status althought u can see how the system works but, there is no implemntation on how we get informaton and display it out. Example, are like when seller fill in the informations, 

1. DeliveryParcel try fill in the information if the information for phone number is not same format as the system an error will occur.
2. CheckStatus if you leave the parcel id blank error will pop up telling you to fill information.
3. Changestatus same thing as checkstatus.

- Log in page
1. When user access the website they will see this page 
2. User inputs their email and password
3. Press log in to go to homepage (for now since log in does not work properly, there is a homepage button to bring)

- Home page
1. Try each button in navigation bar to ensure they are linked to the correct page
2. Check if weather tab that shows today's date, current weather, current temperature and low-high temperature is working and accurate to the website it takes the data from
3. Click on the first button to go to check status page
4. Click on second button to go to deliveryparcel page

