# CERN - Jiskefet

A tool for discussing meta data on ALICE.

I have been tasked through an assignment for CMD Amsterdam to improve upon work of fellow students from HvA ICT Amsterdam. This site can be found at http://cmd.jiskefet.io (credentials might be required).

## Table of contents

- [Dashboard](#dashboard)
  - [Filterset](#Filterset)
  - [Recentlogs](#Recentlogs)
  - [Personal workspace](#Personal workspace)
- [Prototype](#prototype)
  - [Install](#install)
  - [Examples](#examples)
    - [Recent Logs](#Recent logs)
    - [Quick Shortcuts](#Quick shortcuts)

## Dashboard

Currently the start is an unsorted large set of data, which is identical for every user. Ideally there should be some directions or links to guide users to a prefered location.

Using a homepage/dashboard that can guide users towards specific paths such as

- A set of filters
- Creating a new log
- Viewing self made logs
- Notification tray

![Mockup of the Jiskefet Dashboard](img/screenshot.png)
_A mockup of the Jiskefet Dashboard_

This dashboard can be made to be customizable. This feature can either coexists with or replace the current side-menu. To further enhance understanding of the structure, a breadcrumbs-like secondary navigation can be added, that would use the following structure:

`Filter/search -> Run -> Log -> Comment`

### Search

The current filter options are a combination of searches and filters. In some cases (such as an 'LOG ID') the user is expecting result of a **single entry**. While other filter options (such as 'Start Creation Time'), the user expects a list of entrees, which he/she can narrow down.

Using these two under a single filter block might confuse the user. Therefore the dashboard uses a search function in which the user can search for specific results.

### Filtersets

Instead of having to manually input a list of filters every time, the user can opt to save a list of filter conditions as a "filterset". This filterset can show up on the dashboard, giving the user a ideal workflow.

This filterset links to the same page a user would get if he'd manually input multiple filters. This helps the user with the understanding where he/she is within the app, while also making the user aware he can still change the conditions as he normally would.

### Recent logs

The dashboard should feel like its aware of the user. By showing the logs the user has interacted with, the user will have a way to come back to logs that are relevant for that specific user.

This design assumes there is a need to go back to older logs. If that wouldn't be the case, this part of the design can be replaced by using 'active logs' where the items that are relevant to the user through the use of a tagging system in comments.

### Personal workspace

Certain sections of Jiskefet will be more frequently used by certain staff members than others. With this dashboard, using different user roles to create workspace that is catered to specific use cases of a staff member.

Different teams can be made for groups of people that should have the same kind of privileges. Individual tags or roles could be established to grant access or differentiate users within a team. ie A team could be "Detector 1", where as a role would be "Team leader".

## Prototype

To demonstrate the solution, I have made a prototype of the dashboard. It shows where in the app it is located and how it could contribute to a more user-friendly entry level.

The prototype has been made with [React](https://reactjs.org/), as per request of the client. To kickstart this prototype I've used `npx create-react-app`, which explains some the workspace on this project. Besides, I've used [Sass](https://sass-lang.com/) for additional styling, as bootstrap was very limited for a prototype in such a short time.

To give the prototype more meaning than just a proof of concept, I tried sticking with the [Atomic design](http://bradfrost.com/blog/post/atomic-web-design/) principles. The prototype is made up of reusable components which should be easy to transfer to the development version.

### Install

Download this repository by running the following commands

```bash
git clone https://www.github.com/daoneandonly/project-3-1819/
npm install
```

Then run the script

```bash
npm start
```

### Examples

The app consists of `main.js` component which holds everything except the top navigation bar.

`main.js` requires a first and last name, and a possible list of teams or roles. This makes the dashboard feel specifically catered to that user.

```js
<div className="title">
  <h1>Dashboard</h1>
  <h2>
    {data.user.firstName} {data.user.lastName}
  </h2>
  <div className="userroles">
    <p className="team">{data.user.team}</p>
    <p className="role">{data.user.role}</p>
  </div>
```

`main.js` holds two components: `left-space.js` and `right-space.js`. These represent the two boxes in the app.

#### Recent logs

In `left-space.js` the component `logitem.js` is located. This represents an individual log and can added multiple times.

`Logitem` needs the `logdata` attribute which uses an object that holds the data about a specific log.

```js
<Logitem logdata={item} key={item.logid} />
```

A log entree will rendered as following:

```js
<h3>{data.logdata.title}</h3>
<p>
  <span>id</span> <span>{data.logdata.logid}</span>
</p>
<p>
  <span>Subtype</span> <span>{data.logdata.subtype}</span>
</p>
<p>
  <span>Source</span> <span>{data.logdata.origin}</span>
</p>
<p>
  <span>Author</span> <span>{data.logdata.author}</span>
</p>
```

#### Quick shortcuts

`right-space.js` has `<Shortcut />` as components. These need a color (which is a class), a string of text and a link.

Here is an example

```js
<Shortcut
  color="positive"
  text="Create new Log"
  link="http://cmd.jiskefet.io/logs/create"
/>
```
