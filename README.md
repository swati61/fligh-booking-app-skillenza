## **This stage contains three problems  React.js, Angular and HTML+Javascript, select any one problem based on your skills and submit the required files in the below form for evaluation.**
<br>
Design and develop a Flight Booking application using React.js, follow the below instruction to complete the submission.
<br>
# **[Download Source Code here][1]**
<br>
To begin developing the **` Flight Booking`**, an empty state is required and must consist of the screenshot shown below.
<br>
![enter image description here][2]
<br>
it consists of  `Source`, `Destination` and `when`  with **` Search for a flight !`** message at the centre of the screen.
<br>
(refer to the `App.css` provided for styles).
<br>
Add an action button at the right for searching available flight.
<br>
Enter Source as `BLR` and destination `DEL' and click on the `Search Flight` button.
<br>

![enter image description here][3]

<br>
Click on `Booknow` to confirm, Enter your `name' and `email` and hit on `Confirm Booking`
<br>
![enter image description here][4]
<br>

Should display `Booking Confirmed!` message.

<br>

![enter image description here][5]

<br>

<br>

# **Refer `App.test.js` for testing your submission, please make sure to include `testid`(exactly same as mentioned in the test) of the elements to get maximum score and run you test locally and submit `App.js` file in the below submission form once you are done with the development.**
<br>
# Demo Video
<br>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/-qB9J8a37o8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>
# Create Booking "/booking"
**[Request]**
Content-Type : Application/json
Method: POST
<br>
```
{
  "name": "ram",
  "email": "ram@gmail.com",
  "flight": 1
}
```
<br>
**[Response]**
<br>
```
{
    "message": "Successful!"
}
```
<br>
# Get Flights "/flights"
Content-Type : Application/json
Method: GET
**[Response]**
<br>
```
[
 ...
 [
        {
          "id": 1,
          "company": "Surya Airline, India",
          "source": {
              "key": "BLR",
              "airport": "Kempegowda International Airport Bengaluru"
          },
          "destination": {
              "key":"DEL",
              "airport": "Indira Gandhi International Airport"
          },
          "is_oneway": true,
          "price": 4735,
          "duration": 135,
          "arrival": new Date(),
          "departure": new Date(),
          "available": [
            {
              "type": "economy",
              "additional_price": 0
            },
            {
              "type": "economy_plus",
              "additional_price": 1500
            },
            {
              "type": "first_class_suites",
              "additional_price": 5000
            }
          ]
        }
      ]
 ...
]
```


  [1]: https://cdn.skillenza.com/files/3dcde399-67dd-43fa-8e7b-0b96fe269172/flightbooking.zip
  [2]: https://cdn.skillenza.com/files/23e8d4cb-d3bc-46a1-89a0-0ca6ce5c24ab/Screenshot_from_2021-02-05_07-46-59.png
  [3]: https://cdn.skillenza.com/files/c7bb6f7a-06f7-41e8-b331-2a924f02dd26/Screenshot_from_2021-02-05_07-50-27.png
  [4]: https://cdn.skillenza.com/files/53578491-e1e0-4b24-b25b-ff7fd9100097/Screenshot_from_2021-02-05_07-54-25.png
  [5]: https://cdn.skillenza.com/files/751f46b9-882e-4629-9741-e06d7038d39c/Screenshot_from_2021-02-05_07-57-19.png
  [6]: https://cdn.skillenza.com/files/cde71b0b-1a28-4b75-9c7b-c755465150ea/2.png
  [7]: https://cdn.skillenza.com/files/21847580-4e7e-4d22-84ce-b3e60bb1e0b8/3.png
