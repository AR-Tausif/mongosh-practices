//Connecting The Dots of MongoDB Queries & Aggregation
 
 // Identify users who have not made any purchases. Display their names and email addresses.
 // Solved shall commands
db.users.aggregate([
    // stage-1
    // $lookup 
    {
        $lookup: {
               from: "orders",
               localField: "_id",
               foreignField: "user_id",
               as: "userOrders"
             }
    },
    // stage-2
    // $match 
    {
        $match: {
            userOrders: {
                $size: 0
            }
        }
    },
    // stage-3
    // $group 
    {
        $project: {name:1, email:1}
    }
    ])

// Calculate the average price for each product category. Display the category and average price.
db.products.aggregate([
    {
        $group: { _id: "$category", count: { $sum: 1 }, avgPrice: { $avg: "$price" } }
    }
])

// Find the average order quantity and price for each product category. Display the category, average quantity, and average price. 
 db.orders.aggregate([
    {
        $unwind: "$products"
    },
    {
        $lookup: {
               from: "products",
               localField: "products.product_id",
               foreignField: "_id",
               as: "productDetails"
             }
    },
    {
        $unwind: "$productDetails"
    }, 
    {
        $group: { _id: "$productDetails.category", count: {$sum: 1}, avgQty: {$avg: "$products.quantity"}, avgPrice: {$avg: "$productDetails.price"} }
    }
    ])

// Calculate the total quantity and average price of products in each order. Display the order ID, total quantity, and average price.

// For the "users" collection, suggest an indexing strategy to optimize queries related to user authentication, considering fields like email. 

// For the "orders" collection, identify the columns that are frequently used in queries (e.g., user_id, product_id). Propose a set of indexes to optimize query performance.
