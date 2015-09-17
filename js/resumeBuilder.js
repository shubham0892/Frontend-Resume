var bio = {
	name: 'Shubham Gupta',
	role: 'Web Developer',
	contact: {
		mobile: '(530)591-2071',
		email: 'gupta08shubham@gmail.com',
		location: 'San Jose'
	},
	pictureURL: 'images/DSC_1582.jpg',
	welcomeMessage: 'I am looking for internship position',
	skills: ['Javascript', 'HTML', 'CSS', 'C', 'C++', 'Java']
};

var work = {
	position: 'UI Developer',
	employer: 'VMware',
	yearsWorked: '3 months',
	city: 'Palo Alto',
	description: 'Developed extensible and declarative wizard component for Vsphere '
};

var education = {
	name: 'San Jose State University'
};
education["years"] = '1';
education["city"] = 'San Jose';

var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.employer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.position);
var formattedWorkDates = HTMLworkDates.replace("%data%",work.yearsWorked);
var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.city);
var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.description);

var formattedname = HTMLheaderName.replace("%data%",bio.name);
var formattedrole = HTMLheaderRole.replace("%data%",bio.role);

var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
var formattedPic = HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedSkills = HTMLskillsStart + HTMLskills.replace("%data%",bio.skills);

var formattedSchoolName = HTMLschoolName.replace("%data%",education.name);
var formattedSchoolDates = HTMLschoolDates.replace("%data%",education["years"]);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education["city"]);


$("#header").prepend(formattedSkills);
$("#header").prepend(formattedMsg);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedLocation);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedrole);
$("#header").prepend(formattedname);
$("#header").prepend(formattedPic);

$("#main").append(formattedWorkEmployer);
$("#main").append(formattedWorkTitle);
$("#main").append(formattedWorkDates);
$("#main").append(formattedWorkLocation);
$("#main").append(formattedWorkDescription);

$("#main").append(formattedSchoolName);
$("#main").append(formattedSchoolDates);
$("#main").append(formattedSchoolLocation);
