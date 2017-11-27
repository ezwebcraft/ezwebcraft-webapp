//
// Bio
//
var bio = {
    "name": "Elvin Ramirez ",
    "role": " Front-End Web Developer",
    "contacts": {
        "mobile": "(347) 357-3764",
        "email": "real8686@gmail.com",
        "github": "ezwebcraft",
        "twitter": "@ezwebcraft",
        "location": "Staten Island"
    },
    "welcomeMessage": "Hello, As an ambitious problem solver with a passion for web development and Unix/Linux. I would like to join a team of like-minded professional that also share this enthusiasm. I have the experience and education of creating logical and innovative design. I also continually evaluating and upgrading my skills so that I can stay at the cutting edge of web development.  ",
    "skills": ["HTML/CSS", "JavaScript/Jquery", "Python", "Unix/Linux", "Bash Scripting"],
    "biopic": "images/ez.png",
};

bio.display = function() {
    // My Name & Role
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, formattedRole);


    // Top Contact details
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    // Picture and Welcome message
    var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPicture);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);
    //Footer contact info by append it
    $("#footerContacts").append(formattedEmail,
        formattedGithub,
        formattedTwitter,
        formattedMobile,
        formattedLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(formattedSkill);
    }
};


//testing affects with jquery


// Work Section here I add my expirence and work history
var work = {
    "jobs": [
    {
        "employer": "STI Group",
        "title": "Linux Engineer",
        "location": "Glen Rock, NJ",
        "dates": "2016 - Present",
        "website": "https://stig.net/",
        "description": "As Linux Engineer involves not the only implementation of Linux technologies and Cloud systems with automation tools, I also integrated it with security-hardening. Core responsibilities are to implement and integration of complex networking and technologies."
    }, {
        "employer": "ITG",
        "title": "TD Admin",
        "location": "New York, NY",
        "dates": "2015 - 2016",
        "website": "http://itg.com",
        "description": "Troubleshoot trading application issues, determine sources of problems, and identify solutions for internal clients: troubleshoot and report ing Solaris and window 7, Java application including JBoss, Tomcat and internal application, Perform application deployments to staging and production environments, design and develop specialized automation tools, scripts using (shell,bash,perl,python, java) administration and performance monitoring of system (Storage,File system, permission) administration trade desk application Microsoft SCCM, Office 2007/2010/2013 (word,excel.,outlook)"
    }, {
        "employer": "IPSoft",
        "title": "Applications Administrator",
        "location": "New York, NY",
        "dates": "2014 - 2015",
        "website": "http://itg.com",
        "description": "Administration and Technical assistance of any of the following to users with clients system: Unix, Linux System (Solaris,AIX,Redhat ) and window OS, Java application including Weblogic, Websphere, JBoss, Tomcat, LAMP, Perform application deployments to staging and production environments, design and develop specialized automation tools, scripts using (shell,bash,perl,python, java), administration and performance monitoring of system (Storage,File system, permission), Participates in creating and developing local system engineering standards, best practices,support guidelines and procedures.Customer interaction for problem resolution and escalated issues is typically required"
    }, {
        "employer": "CUNY Edu",
        "title": "Work-study/Veteran Services",
        "location": "Staten Island, NY",
        "dates": "2010 - 2013",
        "website": "http://www.csi.cuny.edu/veterans/",
        "description": "Provides academic support from admissions to graduations as well as certification of benefits for veterans and dependents.In which help facilitate a smooth transition from military life to the college experience by providing veterans a strong support system and centralized veteran friendly services."
    }]
};

work.display = function() {
    var counter = work.jobs.length
    for (var job = 0; job < counter; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        formattedEmployer = formattedEmployer.replace("#", work.jobs[job].website);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle,
            formattedDates,
            formattedDescription);
    }
};

//Education Section
var education = {
    "schools": [{
        "name": "Cuny CSI",
        "location": "CSI CUNY Staten Island, NY",
        "degree": "Bachelor of Science",
        "majors": ["Computer Science"],
        "dates": "2013",
        "website": "http://www.csi.cuny.edu/"
    }, {
        "name": "Cuny CSI",
        "location": "CSI CUNY Staten Island, NY",
        "degree": "A.A.S Computer Technology",
        "majors": ["Computer Science"],
        "dates": "2012",
        "website": "http://www.csi.cuny.edu/",
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2015 - Present",
        "website": "https://www.udacity.com/course/nd001"
    }, {
        "title": "Front-End Web Developer",
        "school": "TreeHouse",
        "dates": "2015 - Present",
        "website": "https://www.treehouse.com"
    }]

};

education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        // create new div for education
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].website);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolNameDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
    //check for a least one entry for online course info
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        var counter = education.onlineCourses;
        for (var i = 0; i < counter; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            formattedTitle = formattedTitle.replace("%url%", education.onlineCourses[i].url);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            $(".education-entry:last").append(formattedTitle + formattedSchool,
                formattedDates,
                "<br><div></div>");
            //add a append div to create the space

        }
    }

};

// My Project Code for the display
var projects = {
    "projects": [{
        "title": "FE-Nanodegree-Project-0",
        "dates": "2015",
        "description": "HTML and CSS files to create my very first webpage for my nanodegree!",
        "images": ["images/FE-Nanodegree-Project-0.png"],
        "git": "https://github.com/ezwebcraft/FE-Nanodegree-Project-0"
    }, {
        "title": "FE-Nanodegree-Project-1",
        "dates": "2015",
        "description": "PDF-file replicate that is designed in HTML and CSS for developing a responsive website",
        "images": ["images/FE-Nanodegree-Project-1.png"],
        "git": "https://github.com/ezwebcraft/FE-Nanodegree-Project-1"
    }]
};

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        var displayProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        displayProjectTitle = displayProjectTitle.replace("#", projects.projects[project].git);

        var displayProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var displayProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(displayProjectTitle);
        $(".project-entry:last").append(displayProjectDates);
        $(".project-entry:last").append(displayProjectDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

//load all the display
bio.display();
work.display();
education.display();
projects.display();
//add fade in effect to show title as web developer
$("#role").fadeIn(2700);
//finally the map
$("#mapDiv").append(googleMap);