# Oversight

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Oversight** is a collaborative project management tool used for resource allocation, time accounting, priority management, and productivity workflow through the use of a centralized registry of issue tickets (also known by the name bug tracker or issue/progress tracker)._

<br>

## MVP

_The **Oversight** MVP is to complete full CRUD capability for a issue ticket-based project management tool. The user will be able to create an account, and depending on their permissions, be able to create projects and issue tickets, manage project developers, and manage role assignments._

<br>

### Goals

- _Create a user profile to display project roles and associated issue tickets_
- _Full CRUD workflow for issue ticket management_
- _Build seed data file to setup API with_
- _Create multi-table Rails backend to manage relationships between users, projects, roles, and issue tickets_
- _Execute full-stack application development_

  <br>

### Libraries and Dependencies

|   Library    | Description                                                                                                 |
| :----------: | :---------------------------------------------------------------------------------------------------------- |
|    React     | _powers the application functionality/environment_                                                          |
| React Router | _allows application to be navigable without having to refresh the page_                                     |
|     Ruby     | _dynamic, open source programming language that focuses on simplifying code and making it more productive._ |
|    Rails     | _server-side web application framework_                                                                     |
|  Bootstrap   | _a component library that allows for easy styling using pre-built components_                               |

<br>

### Client (Front End)

#### Wireframes
![ERD](oversight_wireframe.png)

#### Component Tree
![ERD](oversight_component_tree.png)

#### Component Hierarchy

```structure

src
|__ App.js/
|__ App.css
|__ components/
    |__ shared/
        |__Header/
           |__Header.jsx
           |__Header.css
        |__ Nav/
           |__Nav.jsx
           |__Nav.css
    |__ Login/
       |__Login.jsx
       |__Login.css
    |__ Registration/
       |__Registration.jsx
       |__Registration.css
    |__ GuestLogin/
       |__GuestLogin.jsx
       |__GuestLogin.css
    |__Project/
       |__Project.jsx
       |__Project.css
    |__ProjectCard/
       |__ProjectCard.jsx
       |__ProjectCard.css
    |__ProjectCards/
       |__ProjectCards.jsx
       |__ProjectCards.css
|__ images/
|__ screens/
    |__ Login/
          |__ Login.jsx
          |__ Login.css
    |__ Registration/
          |__ Registration.jsx
          |__ Registration.css
    |__ GuestLogin/
          |__ GuestLogin.jsx
          |__ GuestLogin.css
    |__ Home/
          |__ Home.jsx
          |__ Home.css
    |__ Projects/
          |__ Projects.jsx
          |__ Projects.css
    |__ ProjectDetails/
          |__ ProjectDetails.jsx
          |__ ProjectDetails.css
    |__ Tickets/
          |__ Tickets.jsx
          |__ Tickets.css
    |__ TicketDetails/
          |__ TicketDetails.jsx
          |__ TicketDetails.css
    |__ TicketEdit/
          |__ TicketEdit.jsx
          |__ TicketEdit.css
    |__ TicketCreate/
          |__ TicketCreate.jsx
          |__ TicketCreate.css
    |__ ManageUsers/
          |__ ManageUsers.jsx
          |__ ManageUsers.css
    |__ Profile/
          |__ Profile.jsx
          |__ Profile.css
    |__ Notifications/
          |__ Notifications.jsx
          |__ Notifications.css
|__ services/
    |__api-helper.js
    |__projects.js
    |__tickets.js
    |__users.js


```

#### Component Breakdown

|   Component    |    Type    | state | props | Description                                                                                                           |
| :------------: | :--------: | :---: | :---: | :-------------------------------------------------------------------------------------------------------------------- |
|     Header     | functional |   n   |   n   | _The header will contain the all navigation and a welcome statement._|
|      Nav       | functional |   y   |   n   | _The navigation will provide a link to each of the pages._|
|      App.js      | functional |   y   |   y   | _The main will render the site using cards in flexbox and house the methods to be passed as props._|
| Login/Register/GuestLogin | functional |   n   |   y   | _The user will be able to register for and login into their account._|
|    Projects     | functional |   n   |   y   | _The tiles will render the various projects via props._|

#### Time Estimates

| Task                            | Priority | Estimated Time | Time Invested |
| ------------------------------- | :------: | :------------: | :-----------: |
| Proposal          |    H     |     6 hrs      |    15 hrs    |
| Create Front-End CRUD Actions   |    H     |     20 hrs     |    TBD hrs    |
| Create Rails Back-End CRUD Actions    |    H     |     12 hrs     |    TBD hrs    |
| Create seed data                |    M     |     3 hrs      |    TBD hrs    |
| Add Front-End CSS (advanced)    |    H     |     6 hrs     |    TBD hrs    |
| TOTAL                           |          |     56 hrs     |    TBD hrs    |

<br>

### Server (Back End)

#### ERD Model

![ERD](oversight_ERD.png)

<br>

---

## Post-MVP

- _Add ticket history attribute_
- _Allow for ticket descriptions to include attachments_
- _Include comments/messenger for tickets_
- _Improved UX_
- _More analytics regarding project progress_

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
