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
        for (var i=0; i < results.length; i++) {
            console.log("Product item ID: " + results[i].id +
            "\nProduct name: " + results[i].product_name + 
            "\nDepartment name: " + results[i].department_name +
            "\n$ Price $: " + results[i].price +
            "\nAmount in Stock: " + results[i].stock_quantity);
        console.log("******************************************");
        }
        
        console.log("\n");

        var startID = results[0].id;
        var endID = results[results.length-1].id;

        inquirer.prompt({
            name: "item",
            type: "input",
            message: "What is the ID of the product you would like to buy?",
            validate: function(num) {
                if (isNaN(num) === false) {
                    if (num>= startID && num<= endID)
                  return true
                }
                return false;
          
            }
        },
        {
            name: "units",
            type: "input",
            message: "How many units of the product would you like to buy?",
            validate: function(qty) {
                return (!isNaN(parseInt(qty)) && qty>0)
            }
        })
        .then(function(answer) {

            var selectedProduct = results.find( item => {
                return item.id == answer.item;
            });
            console.log("******************************************");
            console.log("selected item name: " + selectedProduct.product_name +
            "\nitem ID: " + selectedProduct.id);
            console.log("******************************************");
            
            var inStock = selectedProduct.stock_quantity;


        }
        
          )


    
    
});



};
