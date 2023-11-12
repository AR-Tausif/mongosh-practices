//-Retrieve the count of individuals who are active (isActive: true) for each gender.


db.getCollection("massive-data").aggregate([
    {
      $match: {isActive: true}  
    },
    {
        $group: {
            _id: "$gender",
            count: {
                $sum: 1
            }
        }
    }
    ])


//Question 2:
//- Retrieve the names and email addresses of individuals who are active (`isActive: true`) and have a favorite fruit of "banana."

db.getCollection("massive-data").aggregate([
    {
      $match: {isActive: true, favoriteFruit: "banana"}  
    },
    {
        $group: {
            _id: "$gender",
            count: {
                $sum: 1
            },
            users: {
                $push: {
                    name: "$name",
                    email: "$email",
                    favoriteFruit: "$favoriteFruit"
                }
            },
        }
    },
    ])
//Question 3:
//- Find the average age of individuals for each favorite fruit, then sort the results in descending order of average age.

db.getCollection("massive-data").aggregate([
    // Stage-1
    {
        $group: { 
            _id: "$favoriteFruit", 
            count: { 
                $sum: 1
            }, 
            avgQuantity: { 
                $avg: "$age" 
                
            } 
        }
    },
    // Stage-2
    {
        $sort: {avgQuantity: 1}
    }
])

// Question 4:
//- Retrieve a list of unique friend names for individuals who have at least one friend, and include only the friends with names starting with the letter "W."
// db.getCollection("massive-data").aggregate([
//   {
//     $unwind: "$friends"
//   },
//   {
//     $match: {
//       "friends.name": /^W/
//     }
//   },
//   {
//     $group: {
//       _id: "$_id",
//       friends: { $addToSet: "$friends.name" }
//     }
//   }
// ])
db.getCollection("massive-data").aggregate([
    // stage-1
    {
        $unwind: "$friends"
    },
    // stage-2
    {
        $match: {"friends.name": /^W/}
    },
    // stage-3
    {
        $project: {"friends.name": 1}
    }
    ])

//Question 5:
//- Use $facet to separate individuals into two facets based on their age: those below 30 and those above 30. Then, within each facet, bucket the individuals into age ranges (e.g., 20-25, 26-30, etc.) and sort them by name within each bucket.


//Question 6:
//- Calculate the total balance of individuals for each company and display the company name along with the total balance. Limit the result to show only the top two companies with the highest total balance.
