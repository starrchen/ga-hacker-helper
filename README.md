# GA Hacker Helper
##### Group 14: Alex Screven, Alice Frumin, & Starr Chen
---

One of our favorite things about class interactions on Slack is the awesome resources that everyone - students and teachers alike - posts. However, even if you star links that you liked on Slack, it can still be difficult to manage them across several different channels and if they are posted without context. (Sometimes the URL doesn't give us all the information!)

Enter [**GA Hacker Helper**](http://ga-hacker-helper.herokuapp.com). View all helpful links in one place, organized by topic. Submit and view different links that your classmates may find useful and/or fun on one convenient site.

:100:
:books:

## Installation
Clone down this repository. From within the repo:

```bash
$ npm install
$ node db/seeds.js
$ node app.js
// or
$ nodemon app.js
```

## Approach

Checkout out some [user stories](https://github.com/starrchen/ga-hacker-helper/blob/master/planning/user_stories.md] to check out the thought process behind feature implementation.)

Also available for viewing are some [initial](https://github.com/starrchen/ga-hacker-helper/blob/master/planning/wireframes-initial.jpg)  [wireframes](https://github.com/starrchen/ga-hacker-helper/blob/master/planning/wireframes.jpg) from our preliminary planning for the design of the app.
(Note: Our working title was "GA-Lossary").

The logic flow can be found on the [ERD](https://github.com/starrchen/ga-hacker-helper/blob/master/planning/ERD.png), which included a model for a future feature (see below) - comments.

## Future Features

Due to time constraints, we had to scale back the scope of our app and its features in order to ensure that already-implemented features were polished. Features that are in the icebox include but are not limited to:
* Single-page application
* 3rd party authentication (Twitter, Slack)
* Share to Twitter, Slack
* Search functionality
* AWS image uploading
* Regex for source field (insert everything before the first `/`)
* "I'm feeling lucky"

## Hindsight is 20/20...

Given what we know now, here are a few things we might have done differently if we were to start over with the prompt:
* Spending more time reviewing/learning MEAN stack implementation _(vs. bludgeoning through it and learning the hard way)_
* Starting client-side requests earlier _(vs. starting with them at the get-go and having to restart with server-side requests)_
* Clarifying actual project requirements _(vs. not being sure and getting a lot of vague answers, so perhaps adding unnecessary constraints)_
* Developing a more Node.js-y app _(vs. what is essentially a Rails app on Node.js)_
* More clearly defining and delegating tasks every day _(vs. having members work on the same feature concurrently or having members not know what they should prioritize working on)_
