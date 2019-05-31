// Insert many data
db.survey.insertMany([
    { empNumber: "abc123", feedback: { management: 3, environment: 3 }, department: "A" },
    { empNumber: "xyz987", feedback: { management: 2, environment: 3 }, department: "B" },
    { empNumber: "ijk555", feedback: { management: 3, environment: 4 }, department: "A" }
])
    
// Create a view
db.createView(
    "managementFeedback",
    "survey",
    [{$project:{"management":"$feedback.management",department:1}}]
)

// Dropping views and collections
db.survey.drop()
db.managementFeedback.drop()
