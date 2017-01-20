/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {"name": "Jiang Chencheng",
           "role": "Web Developer",
           "contacts": {
             "email": "jchencheng@hotmail.com",
             "mobile": "18311111111",
             "github": "jchencheng",
             "twitter": "jchencheng",
             "blog": "www.jiang.moe",
             "location": "Chengdu"
           },
           "pictureUrl": "images/fry.jpg",
           "welComeMessage": "Welcome",
           "skills" : ["Python", "Javascript"]
};

bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedTwitter);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedBlog);
  $("#topContacts").append(formattedLocation);
  var formattedPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
  var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welComeMessage);
  $("#header").append(formattedPic);
  $("#header").append(formattedMsg);
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function (skill){
      var formattedSkill = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkill);
    });
  }
};

bio.display();



$("#main").append(internationalizeButton);

function inName(name) {
  var list = name.trim().split(" ");
  var firstName = list[0].slice(0,1).toUpperCase() + list[0].slice(1).toLowerCase();
  var lastName = list[1].toUpperCase();
  return firstName + " " + lastName;
}

var projects = {
  "projects": [
    {
      "title": "project 1",
      "dates": 2016,
      "description": "project description",
      "images":["http://www.baidu.com"]
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "ABC Bookstore",
      "title": "shop assisstant",
      "location": "Shanghai",
      "dates": "2010-2013",
      "description": "job description1"
    },
    {
      "employer": "Myself",
      "title": "Freelancer",
      "location": "Chengdu",
      "dates": "2013-2016",
      "description": "job description2"
    }
  ]
};

work.display = function() {
  for (var i in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedWorkDates);
    $(".work-entry:last").append(formattedWorkLocation);
    $(".work-entry:last").append(formattedWorkDescription);
  }
};

work.display();


var education = {
  "schools":[
    {
      "name": "Shishi High School",
      "location": "Chengdu, Sichuan",
      "degree": "High School Diploma",
      "major": "-",
      "dates": "2007-2010",
      "url": "http://www.baidu.com"
    }
  ],
  "onlineCourses": [
    {
      "title": "Introduction to Computer Science and Programming Using Python",
      "school": "edx",
      "dates": "2015",
      "url": "https://verify.edx.org/cert/66ffa7daaca842808556612b059cb358"
    },
    {
      "title": "frontend-nanodegree",
      "school": "udacity",
      "dates": "2017",
      "url": "https://udacity.com"
    }
  ]
};

education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);
    var formattedSchooName = HTMLschoolName.replace("%data%", school.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    $(".education-entry:last").append(formattedSchooName + formattedDegree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
    $(".education-entry").append(formattedSchoolDates);
    $(".education-entry").append(formattedSchoolLocation);
    $(".education-entry").append(formattedMajor);
  });
  $("#education").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(course) {
    $("#education").append(HTMLschoolStart);
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
    $(".education-entry:last").append(formattedOnlineDates);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
    $(".education-entry:last").append(formattedOnlineURL);
  });
};

education.display();
$("#mapDiv").append(googleMap);
