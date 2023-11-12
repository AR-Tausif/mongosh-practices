// Data Update
 Add a new skill to the skills array for the document with the email "aminextleveldeveloper@gmail.com" The skill is {"name": "Python", "level": "Beginner", "isLearning": true}.
 db.test.updateOne({ email: "dhourstan2p@examiner.com" },
     { $addToSet: { skills: { "name": "Python", "level": "Beginner", "isLearning": true } } })
 Add a new language "Spanish" to the list of languages spoken by the person.
 db.test.updateOne({ email: "dhourstan2p@examiner.com" },
     { $addToSet: { languages: "Spanish" } })
