# Bamazon

bamazon is a mock amazon-based storefront. Bamazon runs a database with 10 different food products. Using a node application called bamazonCustomer.js a user is able to view and purchase any of the bamazon products. 


# TECHNOLOGY USED 

Node Js
MySQL
npm -inquirer
    -MySQL


# ORGANIZATION 
The majority of my code is run within one start function, and is called in a MySQL connection function. In order to successfully upate my database I used node-MySQL functions like SELECT and UPDATE. The user updates the database based off their answers from an Inquirer prompt. 

# INSTRUCTIONS/DEMONSTRATION

To begin the application the user must follow these instructions and enter the following commands-there are no quotes surrounding user input

  Starting Command = "node bamazonCustomer.js"
  
  Running this command will display the 10 bamazon products, then the console will display the first prompt
  
  ![image](https://user-images.githubusercontent.com/48601772/60762699-caebce00-a02b-11e9-8ad6-ba8f25af55a0.png)
  
  The first prompt asks for the user to enter in the ID of the product selected
  -once the user enters an id, they will then be prompted to enter the quantity of the product they are looking to buy
  -After the user enters the desired quantity, the console will display the updated product details
  
  ![image](https://user-images.githubusercontent.com/48601772/60762783-bc51e680-a02c-11e9-8396-8901da0a26f0.png)
  
  If the user's desired quantity of purchase exceeds the amount of product in stock, then they will be shown the following message
  
  ![image](https://user-images.githubusercontent.com/48601772/60762809-266a8b80-a02d-11e9-91b9-00f173ce667b.png)


  


  
