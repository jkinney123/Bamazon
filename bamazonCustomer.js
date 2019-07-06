var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  startFunction();
});

function startFunction() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        console.log("******************************************");
        console.log("PRODUCT LIST");
        console.log("******************************************");
        console.log(results);
        console.log("******************************************");


        inquirer.prompt({
            name: "item",
            type: "input",
            message: "What is the ID of the product you would like to buy?",
            validate: function(value) {
                if (isNaN(value) === id) {
                  return true;
                }
                return false;
          
            }
        },
        {
            name: "units",
            type: "input",
            message: "How many units of the product would you like to buy?"
        })
        .then(function(answer) {





        }
        
          )


    
    
});



};
