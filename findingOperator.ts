 /** Find all documents in the collection where the age is greater than 30, and only return the name and email fields.
 db.test.find({ age: { $gt: 30} }, { name:1, email:1 }).sort({ age: 1 })
 Find documents where the favorite color is either "Maroon" or "Blue."
 db.test.find({ favoutiteColor: { $in: ['Blue', 'Red'] } })
 Find all documents where the skills is an empty array.
 db.test.find({ skills: { $size: 0 } })
 Find documents where the person has skills in both "JavaScript" and "Java."
 db.test.find({$and: [{ $elemMatch: { "skills.name": "JavaScript" } },{ $elemMatch: { "skills.name": "Java" } }] })
*/