var bio = {
    "name" : "Luis Medina Triana",
    "role" : "Web Designer",
    "welcomeMessage" : "I am a versatile multimedia strategist with broad skill set. Web Development, Digital Marketing and Graphic Design.", 
    "image" : "images/profile.jpeg",
    "contacts" : [{
        "mobile" : "347-499-6308",
        "github" : "lmedinatriana", 
        "location" : "New York City",
        "email" : "miguemetri@gmail.com"
    }], 
    "skills" : ["HTML5", "CSS3", "Media Query", "JavaScript"," P5", "Bootstrap", "jQuery", "CMS", "Ektron", "GitHub"]
};

var work = {
    "jobs" : [
    {
        "employer" : "LaGuardia Community College  ", 
        "title" : "Web Designer",
        "dates" : "2013 - Present",
        "location" : "Long Island City",
        "description" : "signing and developing responsive web-pages using HTML5, CSS3, JavaScript, Bootstrap and Ektron widgets. The site averages about 1.5 Million users and 26 Million page views annually."
    }]
};

var projects = {
    "project" : [{
        "title" : "TechImpact Landing Page",
        "dates" : "2017", 
        "description" : "Developed responsive microsite: TechImpact using HTML5, CSS3, JavaScript and Bootstrap.", 
        "images" : ["images/tech-1.jpg","images/tech-2.jpg","images/tech-3.jpg"]
    },
    {
        "title" : "Summer in the City ",
        "dates" : "2016", 
        "description" : "Produced high-quality Summer in the City landing page, which optimized user experience that garnered more than 7,000 page views and a bounce rate of 0.23% in the first month.", 
        "images" : ["images/sum-1.jpg","images/sum-2.jpg","images/sum-3.jpg"]
    }]
};

var education = {
    "schools" : [
    {
        "name" : "Baruch College, Zicklin School of Business",
        "location" : "New York City",
        "degree" : "BBA", 
        "majors" : "Digital Marketing & Graphic Design",
        "dates" : "2013 - 2016",
        "url" : "http://www.baruch.cuny.edu/"
    },
    {
        "name" : "LaGuardia Community College",
        "location" : "Long Island City",
        "degree" : "AS", 
        "majors" : "Business Administration",
        "dates" : "2010 - 2013",
        "url" : "http://www.laguardia.edu/"
    }],
    "online courses" : [{
        "title" : "Front-End Web Developer Nanodegree",
        "school" : "Udacity",
        "dates" : "2017 - Present",
        "url" : "https://www.udacity.com/course/nd001"
    }]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedImage = HTMLbioPic.replace("%data%",bio.image);
    var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
    $("#header").append(HTMLskillsStart);

    for(skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
        $("#skills").append(formattedSkills);
    };

    for(contact in bio.contacts) {
        var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
        var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
        var formattedGithub = HTMLcontactGeneric.replace("%contact%","github").replace("%data%",bio.contacts[contact].github);
        $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub);
    };
};

education.display = function() {
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);
        
        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
    }
};

work.display = function() {
    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
    }
};

projects.display = function(){
    for(item in projects.project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
        
        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
        for (image in projects.project[item].images) {
            var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
            $(".project-entry:last").append(formattedImage);
        };
        

        
    }
};

function inName(name){
    console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase(); 

    return newName;
};


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);