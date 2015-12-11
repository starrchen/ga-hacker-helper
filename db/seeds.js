var mongoose = require('mongoose');
var conn = mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/project_3_db');

var TopicModel = require("../models/topic");
var LinkModel = require("../models/link");

TopicModel.remove({}, function(err){
  console.log(err);
});
LinkModel.remove({}, function(err){
  console.log(err);
});

var atom = new TopicModel({
  name: "Atom Packages",
  description: "Tricks for using the Atom text editor.",
  imageUrl: "images/atom.png"
});

var jobs = new TopicModel({
  name: "Jobs/Interviews",
  description: "Interview tips, resume building resources, open positions, and more",
  imageUrl: "images/hireme.png"
});

var lol = new TopicModel({
  name: "For the Lulz",
  description: "Jokes and humor for developers",
  imageUrl: "images/lol.png"
});

// Atom links

var powermode = new LinkModel({
    title: "Power Mode",
    summary: "Make every keystroke feel awesome!",
    url: "https://atom.io/packages/activate-power-mode"
});

var mergeConflicts = new LinkModel({
  title: "Merge Conflicts",
  summary: "See and resolve merge conflicts from within the Atom text editor",
  url: "https://atom.io/packages/merge-conflicts"
});

var toDoShow = new LinkModel({
  title: "To Do Show",
  summary: "Stay on track by tracking action items and notes within your code",
  url: "https://atom.io/packages/todo-show"
});

var railsSnippets = new LinkModel({
  title: "Rails Snippets",
  summary: "Easily add rails snippets (aka clown hats) to your Ruby on Rails projects",
  url: "https://atom.io/packages/rails-snippets"
});

var rubyBlock = new LinkModel({
  title: "Ruby Block",
  summary: "Find the matching Ruby block for keywords end, elsif, else, when, rescue, and ensure",
  url: "https://atom.io/packages/ruby-block"
})

var atomLinks = [powermode, mergeConflicts, toDoShow, railsSnippets, rubyBlock];

for(var i = 0; i < atomLinks.length; i++){
  atom.links.push(atomLinks[i]);
  atom.save(function(err){
    if(err){
      console.log(err);
    } else {
      console.log("Atom links saved!");
    }
  })
};

// Job links

var techQs = new LinkModel({
  title: "Technical Questions",
  summary: "List of questions/question topics a Redditor had at tech interviews",
  url: "https://www.reddit.com/r/webdev/comments/3f7q3q/been_interviewing_with_a_lot_of_tech_startups_as/"
});

var deloitte = new LinkModel({
  title: "Deloitte Digital Studio (event)",
  summary: "Networking and recruiting event at Deloitte Digital Studio on December 15th",
  url: "https://jobs2.deloitte.com/us/en/job/DELOA004X14720/Deloitte-Digital-s-Exclusive-Open-Studio-Event--December-15th"
});

var vetRides = new LinkModel({
  title: "Free rides for vets",
  summary: "Uber and Lyft will donate free trips to veterans to get to work and job interviews",
  url: "http://www.militarytimes.com/story/veterans/2015/11/09/uber-lyft-veterans-rides/75493302/"
});

var developerTea = new LinkModel({
  title: "9 Questions You Should Always Ask During an Inteview",
  summary: "20-minute podcast episode about questions developers should ask at interviews",
  url: "https://overcast.fm/+EAXV8Wzwo"
});

var interviewCake = new LinkModel({
  title: "Interview Cake",
  summary: "Practice questions to prepare you for technical interviews",
  url: "https://www.interviewcake.com/"
});

var jobsLinks = [techQs, deloitte, vetRides, developerTea, interviewCake];

for(var j = 0; j < jobsLinks.length; j++){
  jobs.links.push(jobsLinks[j]);
  jobs.save(function(err){
    if(err){
      console.log(err);
    } else {
      console.log("Jobs links saved!");
    }
  })
};

// Lol links

var pokedata = new LinkModel({
  title: "Pokemon or Big Data?",
  summary: "A game that tests if you know the difference between Pokemon names and Big Data terms",
  url: "http://pixelastic.github.io/pokemonorbigdata/"
});

var slackDown = new LinkModel({
  title: "Slackpocalypse 2015",
  summary: "On November 23, 2015, Slack went down. Mass chaos ensued.",
  url: "http://www.buzzfeed.com/jarrylee/slack-went-down-and-people-started-to-lose-their-minds#.thzyP9nOW"
});

var aws = new LinkModel({
  title: "AWS in Plain English",
  summary: "Satirical take on the confusing naming convention sof Amazon Web Services",
  url: "https://www.expeditedssl.com/aws-in-plain-english"
});

var commitStrip = new LinkModel({
  title: "Last Ever Line of Code",
  summary: "One day, there will be a programmer who writes the last ever line of PHP...",
  url: "http://www.commitstrip.com/en/2015/11/13/the-last-ever-line-of-code/"
});

var lolLinks = [pokedata, slackDown, aws, commitStrip];

for(var k = 0; k < lolLinks.length; k++){
  lol.links.push(lolLinks[k]);
  lol.save(function(err){
    if(err){
      console.log(err);
    } else {
      console.log("Lol links saved!");
    }
  })
};
