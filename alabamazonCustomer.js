var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "Richard",

    password: "xxxxxxx",
    database: "alabamazon"
});
connection.connect(function (err) {
    if (err) throw err;

    displayProducts();
    setTimeout(shop, 1500);
});

function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        console.log("----------------------------");
        console.log("ID | Product | Price");
        console.log("----------------------------");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + "$" + res[i].price);
            console.log("----------------------------");
        }
    })
};

function shop() {
    connection.query("SELECT * FROM products", function (err, res) {

        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "list",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < res.length; i++) {
                            choiceArray.push(res[i].item_id.toString());
                        }
                        return choiceArray;
                    },
                    message: "WHAT DO YOU WANNA BUY TATERHEAD?"
                },
                {
                    name: "quantity",
                    type: "list",
                    choices: ["1", "2", "3", "4", "5","200"],
                    message: "HOW MANY DO YA WANT?"
                }
            ])
            .then(function (answer) {
                var chosenItem;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].item_id === parseInt(answer.choice)) {
                        chosenItem = res[i];
                    }
                }

                var totalPaid = chosenItem.price * answer.quantity;

                if(chosenItem.stock_quantity >= parseInt(answer.quantity)){
                    connection.query(
                        "Update products Set ? Where ?",
                        [
                            {
                                stock_quantity: chosenItem.stock_quantity - answer.quantity
                            },
                            {
                                item_id: chosenItem.item_id
                            }
                        ],
                        function(error){
                            if (error) throw err;
                            console.log("GLORY BE YOU BOUGHT SOME STUFF! IT'S GONNA COST YA $" + totalPaid);
                            setTimeout(displayProducts, 1500);
                            setTimeout(shop, 5000);
                        }
                    )
                }
                else{
                    console.log("LUKE HORKSTADER ALREADY BOUGHT ALL THESE.  TRY BUYIN' SOMETHIN' ELSE.");
                    setTimeout(displayProducts, 1500);
                    setTimeout(shop, 5000);
                }
            });
    });
};