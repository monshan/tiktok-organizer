<h1 align="left">TTTracker</h1>

<p align="center">
  <img src="https://media.giphy.com/media/l1mf95PBaJyxN9ju4K/giphy.gif" alt="Gameplay of two users sending tiktoks back and forth" width="auto" height='300'>
</p>

## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Functionality](#functionality)
* [Learning Goals](#learning-goals)
* [Future Iterations](#future-iterations)
* [Technologies Used](#technologies-used)
* [Contributors](#contributors)
* [Contact](#contact)


## About the Project

The theme of this project was to solve a problem of a **niche community**, and in the case of TTTracker it is the lack of organizational capabilities of the popular social media application *TikTok*.

The determined problem is that users cannot save tiktoks easy to keep track of them, even ones that they've liked and been able to save on their profile. They are easily buried under more and more likes and new posts that even if users have a clear idea of what the tiktok was it is impossible to relocate it within the app. 

TTTracker the TikTokTracker addresses this by utilizing the oembed API provided by TikTok for developers to create an application that can essentially save and manage tiktoks outside the app while empowering users with extra features such as *pinning* or *adding any post* to their active home page.

## Installation

1. Fork (optional) and clone down this repository to a directory of your choice
2. <code>cd</code> into the repo
3. Run <code>npm i</code> to install dependencies
4. Run the command <code>npm run start</code> to run the application in your browser
5. Begin interacting!


## Functionality
* [Home Page](#home-page)
* [Add Your Own TikToks](#add-your-own-tiktoks)
* [Pinning or Bookmarking](#pinning-or-bookmarking)
* [Responsive Design](#responsive-design)
* [Accessibility](#accessibility)


#### Home Page

- Upon opening the app a user will observe a set of pre-loaded tiktok cards to get them started. If desired, users can click on the author handle shown in bold on the card to be taken to that author's profile on tiktok desktop version.

#### Add Your Own TikToks

- Don't see a tiktok card that you like or care to organize? Users can add any titkok of choice as long as they have the link to the original. Clicking the Add button on the top menu bar opens a form to add your tiktok. Copy & paste the link into the field and click <code>Submit</code> to see it on the home page
- Changed your mind? Users can click <code>Cancel</code> to close the form and return ot the home page

<img src="https://media.giphy.com/media/9L9qDhz9fJtLKBfJDn/giphy.gif" width="500" align="center">

- Removing cards is just as easy, simply click the trash can icon to delete it off the home page

<img src="https://media.giphy.com/media/kdyDKW7cSKamllkC7s/giphy.gif" width="500" align="center">

#### Pinning or Bookmarking

- When a user opens the application they should be able to see a pre-made collection of tiktoks on the home page. On clicking the outlined ribbon icon, the card will become 'pinned' and move to the top of the page flowing left to right, top to bottom

<img src="https://media.giphy.com/media/WaJEOJJ7ZPPJvIAGbY/giphy.gif" width="500" align="center">

#### Responsive Design

- This application was built with accessibility for multiple devices and screen sizes in mind. As demonstrated here, it is responsive down to a 360 pixel width (smallest mobile device available):

<img src="https://media.giphy.com/media/o1COYEDuLy1i9oXU1j/giphy.gif" width="500" align="center">

#### Accessibility

TTTracker achieves a 100 Lighthouse Report for accessibility and 0 WAVE errors.

## Learning Goals

The goal of this particular project was to solve a problem of a **niche community** using our current skills as developers and not necessarily as a stretch to learn new technologies. Therefore, learning goals for this project took a backseat over constructing the application with quality and good practice.

However one topic that was introduced and asked of development was to write *User Personas* to better reflect the intention behind the application. This would also aid with narrowing the MVP features that are prioritized in development and if they would eventually be included in production.

You can read both of the user stories written with respect to this project below.

## Future Iterations

Due to the time constrainsts of this project, several further features were proposed but not able to come to fruition. The following features will be the most supportive to MVP:
  - Search Bar: Let user search all cards by title or author, potentially tags & sounds could also be included
  - Create another page view with a feature for creating collections or 'decks' of cards that the user can customize with their own titles 

## Technologies Used

- ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![ReactRouter](https://camo.githubusercontent.com/4f9d20f3a284d2f6634282f61f82a62e99ee9906537dc9859decfdc9efbb51ec/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d72656163742d726f75746572266c6f676f436f6c6f723d7768697465)
- ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
- ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)
- ![Cypress](https://img.shields.io/badge/cypress%20-%2317202C.svg?&style=for-the-badge&logo=cypress&logoColor=white)

## Contributors
* [Marika Shanahan](https://github.com/monshan) - Application Creator


## Contact

<!-- Personal Definitions  -->

[linkedin1]: https://www.linkedin.com/in/marika-shanahan
[github1]: https://github.com/monshan
