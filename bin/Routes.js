const express = require("express");
const app = express();
const {Controller} = require("./Controller");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

/*
Webmaster 
*/
app.post("/webmasters", function(req, res){
    let {webmaster} = req.body;
    Controller.setWebmaster(webmaster, res);
});

app.get("/webmasters", function(req, res){
    Controller.getWebmasters(res);
});

app.get("/webmasters/:id", function(req, res){
    let {id} = req.params;
    Controller.getWebmaster(id, res);
});

app.put("/webmasters/:id", function(req, res){
    let webmaster = req.body.webmaster;
    webmaster.id = req.params.id;
    Controller.updateWebmaster(webmaster, res);
});

app.delete("/webmasters/:id", function(req, res){
    let { id } = req.params;
    Controller.deleteWebmaster(id, res);
});

/*
/Webmaster
*/



/*
Peoples 
*/
app.post("/peoples", function(req, res) {
    let { people } = req.body;
    Controller.setPeople(people, res);
})

app.get("/peoples", function(req, res){
    Controller.getPeoples(res);
})

app.get("/peoples/:id", function(req, res){
    let { id } = req.params;
    Controller.getPeople(id, res);
})

app.put("/peoples/:id", function(req, res){
    let people = req.body.people;
    people.id = req.params.id;
    Controller.updatePeople(people, res);
});

app.delete("/peoples/:id", function(req, res){
    let { id } = req.params;
    Controller.deletePeople(id, res);
})
/*
/Peoples 
*/

/* -------------------------period petitions------------------------- */
//create period
app.post("/periods", function(req, res) {
    let { period } = req.body;
    Controller.setPeriod(period, res);
})

//show periods
app.get("/periods", (req, res) => {
    Controller.getPeriods(res);
})

//show period for id
app.get("/periods/:id", (req, res) => {
    let { id } = req.params;
    Controller.getPeriod(id, res);
})

//update period
app.put("/periods/:id", (req, res) => {
    let period = req.body.period;
    period.id = req.params.id;
    Controller.updatePeriod(period, res);
});

//delete period
app.delete("/periods/:id", (req, res) => {
    let { id } = req.params;
    Controller.deletePeriod(id, res);
})

/* /-------------------------period petitions------------------------- */

/* -------------------------course petitions------------------------- */
//create 
app.post("/courses", function(req, res) {
    let { course } = req.body;
    Controller.setCourse(course, res);
})


//show 
app.get("/courses", (req, res) => {
    Controller.getCourses(res);
})

//show for id
app.get("/courses/:id", (req, res) => {
    let { id } = req.params;
    Controller.getCourse(id, res);
})

//update 
app.put("/courses/:id", (req, res) => {
    let course = req.body.course;
    course.id = req.params.id;
    Controller.updateCourse(course, res);
});

//delete 
app.delete("/courses/:id", (req, res) => {
    let { id } = req.params;
    Controller.deleteCourse(id, res);
})

/* /-------------------------course petitions------------------------- */

/* -------------------------topic petitions------------------------- */
//create 
app.post("/topics", function(req, res) {
    let { topic } = req.body;
    Controller.setTopic(topic, res);
})


//show 
app.get("/topics", (req, res) => {
    Controller.getTopics(res);
})

//show for id
app.get("/topics/:id", (req, res) => {
    let { id } = req.params;
    Controller.getTopic(id, res);
})

//update 
app.put("/topics/:id", (req, res) => {
    let topic = req.body.topic;
    topic.id = req.params.id;
    Controller.updateTopic(topic, res);
});

//delete 
app.delete("/topics/:id", (req, res) => {
    let { id } = req.params;
    Controller.deleteTopic(id, res);
})

/* /-------------------------topic petitions------------------------- */

/* -------------------------grade petitions------------------------- */
//create 
app.post("/grades", function(req, res) {
    let { grade } = req.body;
    Controller.setGrade(grade, res);
})


//show 
app.get("/grades", (req, res) => {
    Controller.getGrades(res);
})

//show for id
app.get("/grades/:id", (req, res) => {
    let { id } = req.params;
    Controller.getGrade(id, res);
})

//update 
app.put("/grades/:id", (req, res) => {
    let grade = req.body.grade;
    grade.id = req.params.id;
    Controller.updateGrade(grade, res);
});

//delete 
app.delete("/grades/:id", (req, res) => {
    let { id } = req.params;
    Controller.deleteGrade(id, res);
})

/* /-------------------------grade petitions------------------------- */

/* -------------------------subtopic petitions------------------------- */
//create
app.post("/subtopics", function(req, res) {
    let { subtopic } = req.body;
    Controller.setSubtopic(subtopic, res);
})


//show
app.get("/subtopics", (req, res) => {
    Controller.getSubtopics(res);
})

//show for id
app.get("/subtopics/:id", (req, res) => {
    let { id } = req.params;
    Controller.getSubtopic(id, res);
})

//update
app.put("/subtopics/:id", (req, res) => {
    let subtopic = req.body.subtopic;
    subtopic.id = req.params.id;
    Controller.updateSubtopic(subtopic, res);
});

//delete
app.delete("/subtopics/:id", (req, res) => {
    let { id } = req.params;
    Controller.deleteSubtopic(id, res);
})

/* /-------------------------subtopic petitions------------------------- */

/* -------------------------exercise petitions------------------------- */
//create
app.post("/exercises", function(req, res) {
    let { exercise } = req.body;
    Controller.setExercise(exercise, res);
})


//show
app.get("/exercises", (req, res) => {
    Controller.getExercises(res);
})

//show for id
app.get("/exercises/:id", (req, res) => {
    let { id } = req.params;
    Controller.getExercise(id, res);
})

//update
app.put("/exercises/:id", (req, res) => {
    let exercise = req.body.exercise;
    exercise.id = req.params.id;
    Controller.updateExercise(exercise, res);
});

//delete
app.delete("/exercises/:id", (req, res) => {
    let { id } = req.params;
    Controller.deleteExercise(id, res);
})

/* /-------------------------exercise petitions------------------------- */

/* -------------------------directive petitions------------------------- */
//create
app.post("/directives", function(req, res) {
    let { directive } = req.body;
    Controller.setDirective(directive, res);
})


//show
app.get("/directives", (req, res) => {
    Controller.getDirectives(res);
})

//show for id
app.get("/directives/:id", (req, res) => {
    let { id } = req.params;
    Controller.getDirective(id, res);
})

//update
app.put("/directives/:id", (req, res) => {
    let directive = req.body.directive;
    directive.id = req.params.id;
    Controller.updateDirective(directive, res);
});

//delete
app.delete("/directives/:id", (req, res) => {
    let { id } = req.params;
    Controller.deleteDirective(id, res);
})

/* /-------------------------directive petitions------------------------- */

/* -------------------------student petitions------------------------- */
//create
app.post("/students", function(req, res) {
    let { student } = req.body;
    Controller.setStudent(student, res);
})


//show
app.get("/students", (req, res) => {
    Controller.getStudents(res);
})

//show for id
app.get("/students/:id", (req, res) => {
    let { id } = req.params;
    Controller.getStudent(id, res);
})

//update
app.put("/students/:id", (req, res) => {
    let student = req.body.student;
    student.id = req.params.id;
    Controller.updateStudent(student, res);
});

//delete
app.delete("/students/:id", (req, res) => {
    let { id } = req.params;
    Controller.deleteStudent(id, res);
})

/* /-------------------------student petitions------------------------- */

/* -------------------------teacher petitions------------------------- */
//create
app.post("/teachers", function(req, res) {
    let { teacher } = req.body;
    Controller.setTeacher(teacher, res);
})


//show
app.get("/teachers", (req, res) => {
    Controller.getTeachers(res);
})

//show for id
app.get("/teachers/:id", (req, res) => {
    let { id } = req.params;
    Controller.getTeacher(id, res);
})

//update
app.put("/teachers/:id", (req, res) => {
    let teacher = req.body.teacher;
    teacher.id = req.params.id;
    Controller.updateTeacher(teacher, res);
});

//delete
app.delete("/teachers/:id", (req, res) => {
    let { id } = req.params;
    Controller.deleteTeacher(id, res);
})

exports.app = app;