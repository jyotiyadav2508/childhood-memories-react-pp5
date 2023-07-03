# Childhood Memories - Testing

:arrow_left: [Return to the README](README.md)

## Table of Contents
- [Testing](#testing)
  - [User Story Testing](<#user-story-testing>)
  - [Manual Testing of Features](#manual-testing-of-features)
- [Validation](#validation)
- [Performance](#performance)
  - [Google's Lighthouse Performance](#googles-lighthouse-performance)


## Testing

### User Story Testing
BDD, or Behaviour Driven Development, is the process used to test user stories in a non-technical way, allowing anyone to test the acceptance criteria of user story.

User Story | Acceptance Criteria | Associated Feature | Test Result 
--- | --- | --- | :---: 
As a site user <br>I can capability <br> I can easily understand the purpose and main features of the website. | **Acceptance Criteria 1**<br> Given that a new user visit the site <br>When they are on the landing page<br>Then they should see what the purpose of the site at the first glance. | Landing page image and text | :white_check_mark: 
As a site user <br>I can easily find the 'About' link<br>so that I can learn about this website which will be crucial as a new user coming to the website.| **Acceptance Criteria**<br> Given that a user visit the site<br>When they are on the landing page<br>Then can see a about link on landing page. | **1.** About link in navbar<br><br>**2.** 'Know more' button on landing page | :white_check_mark:
As a site user <br>I can see well written instructions on how to get started <br>so that I can easily get information about how to start to use the web application. | **Acceptance Criteria 1**<br> Given that a new user visit the site <br>When they are on the landing page<br>Then they can see the Sign In / Sign Up buttons.<br> **Acceptance Criteria 2** <br>Given that a new user visit the site <br> When they are on the about page<br> Then they see the clear discription about how to get started the website. | **1** About page text<br><br>**2.** 'new here? Sign Up' and 'member? Sign In' buttons on landing page | :white_check_mark:
As a site user <br>I can see sign up and sign in link to the site <br> so that I can easily register or sing in to access the functionality of website.| **Acceptance Criteria**<br> Given that a new user visit the site <br>When they are on the landing page<br>Then they can see the Sign In / Sign Up links in navbar.<br> **Acceptance Criteria 2** <br> Given that a new user/returning user visit the site<br>When they visit on the landing page<br> Then they are guided to register if they are not a member or sign in if they are registered already. | **1.** Nav links for Sign In/Sign Up <br><br>**2.** 'new here? Sign Up' and 'member? Sign In' buttons on landing page | :white_check_mark: 
As a site user <br>I can sign up and sign in to the site <br> so that I can access the functionality of website.| **Acceptance Criteria 1**<br> Given that a new user visit the site <br>When they click on Sign Up Nav link<br>Then they are redirected to Sign Up page.<br> **Acceptance Criteria 2** <br> Given that a new user is on Sign Up page<br>When they entered their username and password<br> Then they are prompted to Sign In. <br> **Acceptance Criteria 3** <br> Given that a new user is on Sign In page<br>When they entered their username and password<br> Then they can see it reflect on the navbar with new nav items| **1.**  Sign In page<br><br>**2.** Sign Up page | :white_check_mark: 
As a site user <br>I can easily sign out <br> so that I can have more security on my account.| **Acceptance Criteria 1**<br> Given that a new user is on any page <br>When they they are logged in<br>Then they can see Sign out link in navbar.<br> **Acceptance Criteria 2** <br> Given that a user is on any page<br>When they clicked on Sign Out link<br> Then they are redirected to the landing page.| Sign out link on navbar | :white_check_mark: 
As a site user <br>I can maintain my logged-in status until I choose to log out<br> so that my user experience is not compromised.| **Acceptance Criteria**<br> Given that a new user is signed in<br>When they don't even visit the website<br>Then they still remained signed in 24h.| Access token | :white_check_mark: 
As a site user <br> I can see a navigation bar on every page<br> so that I can easily return to pages I wish to visit.| **Acceptance Criteria 1**<br>Given that new/returning user visits the site<br>When they are on any web-page<br>Then they can see navigation items on screen clearly labelled with their function<br>**Acceptance Criteria 2**<br>Given that new/returning user visit the site<br>When they are a selected web-page<br>Then they can see on which page are they on <br>**Acceptance Criteria 3**<br>Given that user visits the site<br>When they sign in<br>Then they can see a sign out link along with all the features that the site offers | **1.** NavBar features <br><br>**2.** Color changed active Nav link<br><br> **3** Nav bar with different nav links | :white_check_mark: 
As a site user <br> I can infinitely scroll down to see more posts and also to see more comments <br> I can consistently look at more posts/comments without having to click any extra links to view more. | **Acceptance Criteria 1**<br>Given that a new/returning/registered user visits the website<br>When they are on Homepage<br>Then they can see and read all the posts<br>**Acceptance Criteria 2**<br>Given that the user is on posts section of the Homepage<br>When they scroll through all the posts<br>Then they can continue scrolling through all the content without having to go to a new page | Post list page(Home Nav link) | :white_check_mark: 
As a site user <br> I can navigate through pages quickly <br> so that I can view content smoothly without the pages being refreshed.| **Acceptance Criteria**<br>Given that user is on navigation menu of the site<br>When they click on different nav item<br>Then they can see that page doesn't reload each time when they clicked on nav item | Refresh function | :white_check_mark: 
As a site user <br> I can create posts <br> so that I can share my post with others.| **Acceptance Criteria 1**<br>Given that a signed in user visits the app<br>When they navigate to the create post section<br>Then they are redirected to a create post form page, filling have the choice to create a new post. <br>**Acceptance Criteria 2**<br>Given that a user is signed in<br>When the save the post<br>Then it is available for others to read| **1** Post Creation form(Add Post link)<br> **2** Post section on home page | :white_check_mark: 
As a site user <br>I can edit/delete my posts  <br> so that I can make changes to existing post information or remove my content.| **Acceptance Criteria 1**<br>Given that a signed-in user visits the app<br>When they navigate to their own post<br>Then they can see a edit/delete option with which they can update/delete their post<br>**Acceptance Criteria 2**<br>Given that a user is signed in<br>When they select delete option<br>Then they get a feedback message<br>**Acceptance Criteria 3** <br> Given that signed-in user visits the app<br>When they click on the edit option <br>Then they can see the post in an editable format and an update button | **1** Edit icon on creator's post in dropdown menu <br>**2** Post edit page | :white_check_mark: 
As a site user <br>I can view all the posts on the User's Feed page <br> so that I can see all the posts posted by the people whom I follow.| **Acceptance Criteria 1**<br>Given that a signed in user visits the app<br>When they visit the User's Feed page<br>Then posts on top of the people whom they follow<br>**Acceptance Criteria 2**<br>Given that a user is signed in<br>When they click on the post title<br>Then they are redirected to the respective detail page | **1** Feed Nav link <br>**2** Post detail page | :white_check_mark: 
As a site user <br>I can view and read the detailed post page of all of the site users <br> so that I can view the comments made by different users.| **Acceptance Criteria 1**<br>Given that a signed-in user visits the app<br>When they are at any selected Post details page<br>Then they can see the comments the post received and also a section where they can enter their comments for the post<br>**Acceptance Criteria 2**<br>Given that a user is signed in<br>When they are at their Post details page of which they are the author<br>Then they can see the update and delete options | **1** Comment box <br>**2** Dropdown menu with edit/delete icon | :white_check_mark: 
As a site user <br>I can search for posts or users in a search box <br> so that I can quickly find specific posts or users that I am wanting to look for.| **Acceptance Criteria**<br>they use the search bar on the website<br>they can access all relevant information to my search term | Search bar | :white_check_mark: 
As a site user <br>I can view post category options<br>so that I choose posts to display that I’m particularly interested in.| **Acceptance Criteria** <br>Given that user visits the app<br> When they use the category options visible at Homepage<br>Then they can easily sort the posts with the selected categories | Category section | :white_check_mark: 
As a site user <br>I can read comments on a post <br> so that I can read what others think about the post and read the discussion happening.| **Acceptance Criteria 1**<br> Given that a signed-in user visits the app<br>When they are at Post details page<br>Then they can see and read all the Comments of different users on that post<br>**Acceptance Criteria 2**<br>Given that a user is signed in<br>When they are at Post details page<br>Then they can see number of comments the post received | **1.** Comment section under the post(Post detail page)<br><br>**2.**  Comment icon | :white_check_mark:
As a site user <br>I can post a comment on a post<br> so that I can contribute discussion to a post or share my thoughts about a post.| **Acceptance Criteria 1**<br> Given that a signed-in user visits the app<br>When they are at Post details page<br>Then they have the choice to create a new Comments<br>**Acceptance Criteria 2**<br>Given that a user is signed in<br>When they are at Post details page and make a comment<br>Then they see the comment getting saved below the same Post with their name and date of creation | **1.** Comment create section under the post(Post detail page)<br><br>**2.**  Comment button to post the comment | :white_check_mark:
As a site user <br>I can edit/delete my comments<br> so that I have the possibility to remove or add more details to my existing comments.| **Acceptance Criteria 1**<br> Given that a signed-in user<br>When they click on the edit option<br>Then they can see the Comments in an editable format and an update button<br>**Acceptance Criteria 2**<br>Given that a user is signed in<br>When they navigate to their own Comments<br>Then they can see an edit/delete option. | **1.** Comment Edit form<br><br>**2.**  Dropdown menu with edit/delete icon | :white_check_mark:
As a site user <br>I can see the post that have received most number of likes <br> so that I can assess which are the best ones.| **Acceptance Criteria**<br>Given that a signed-in user<br>When  they are at Homepage<br>Then they can see the posts with number of likes on it | Post section | :white_check_mark:
As a site user <br>I can like a post <br> so that I can share my appreciation for the post and show the author that their post is great.| **Acceptance Criteria**<br>Given that a signed-in user<br>When they are on any post<br>Then they can click on the like button and can like it | Like Icon on a post | :white_check_mark:
As a site user <br>I can remove likes on a post <br> so that I can show that my opinion has changed.| **Acceptance Criteria**<br>Given that a signed-in user<br>When they are on the post which they already liked<br>Then they can click on the like button and can unlike it | Like Icon on a Post | :white_check_mark:
As a site user <br>I can like/unlike comments <br> so that I can share my feelings towards a comment.| **Acceptance Criteria**<br>Given that a signed-in user<br>When they navigate to the post comment section<br>Then they can like/unlike any of the comment | Like Icon in Comment section | :white_check_mark:
As a site user <br>I can view a detailed profile page of users <br> so that I can see their posts and learn more about the user. I can also see their following count, followers count, etc.| **Acceptance Criteria**<br>Given that a signed-in user<br> When they click on username of the list of users <br>Then they can see their full name, followers info, brief bio and their post along with other details | Profile Avatar | :white_check_mark:
As a site user <br>I can see the most popular profiles <br> so that I can see who has the most interesting posts | **Acceptance Criteria**<br>Given that a signed-in user<br> When they navigate to the Home / Feed /Liked page <br>Then they can see a list of the most popular profiles with the follow button | Popular Profile list  | :white_check_mark:
As a site user <br>I can update my own profile <br> so that I can make changes as needed |**Acceptance Criteria**<br>Given that a signed-in user<br> When they click on edit profile option <br>Then they can see an option to update their name, brief bio, image and other details | Profile Edit form  | :white_check_mark:

---

### Manual Testing of Features
I manually tested all the features of the website making sure to go through them with different browsers and device sizes. I also checked the features of the site against the original user stories and compared them with the acceptance Criteria. 

The aspects considered while testing:
- CRUD functionality for Posts, Comments, Likes, Follows and Profile on both the development and deployed version of the site.
- All Nav links open on the correct page
- Page responsiveness
- Authentication works displaying a different set of options for logged-in users compared to logged-out
- Not found pages display correctly when a non-existent URL when entered

The sections below presents an exhaustive list of manual tests done.

#### LandingPage

**Function Tests:**

| **Expected Feature** | **Result** |
|-------------------------|---------------------|
| When Sign Up Nav Item is clicked, Sign Up page opens| **Pass** |
| When Sign In Nav Item is clicked, Sign In page opens| **Pass** |
| When Sign Up New? button is clicked, Sign Up page opens| **Pass** |
| When Sign In Member? button is clicked, Sign In page opens| **Pass** |
| When Logo is clicked, Landing page first view returns| **Pass** |
| When Footer links are clicked, Respective links open| **Pass** |

**Responsiveness Test:**

| **Expected Feature** | **Result** |
|-------------------------|---------------------|
| When in Inspect mode in Dev Tools is open, Landing Page is responsive| **Pass** |

#### PostsListPage

**Function Tests:**

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| On the top position, NavBar Home NavItem changes view| **Pass** |
| On the left panel, one can see categories section| **Pass** |
| On the right panel, one can see PopularProfiles section| **Pass** |
| In the center, one can see posts section | **Pass** |
| Latest post features first | **Pass** |
| Posts section has infinite scroll feature| **Pass** |

**Responsiveness Test:**

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| On the large devices and above, three columns are visible with panels ratio 1:2:1| **Pass** |
| On the small devices like mobile and above, one column is visible| **Pass** |
| On the small devices like mobile and above, NavBar toggles to Hamburger menu view| **Pass** |

#### Feed Page

**Function Tests:**

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| On the top position, NavBar Feed NavItem changes view  | **Pass** |
| On the left panel, one can see category section| **Pass** |
| On the right panel, one can see PopularProfiles section| **Pass** |
| In the center, one can see section enlisting all the posts of the profiles user follows | **Pass** |
| Post section has infinite scroll feature| **Pass** |

**Responsiveness Test:**

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| On the large devices and above, three columns are visible with panels ratio 1:2:1| **Pass** |
| On the small devices like mobile and above, one column is visible| **Pass** |
| On the small devices like mobile and above, NavBar toggles to Hamburger menu view| **Pass** |


#### Liked Page

**Function Tests:**

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| On the top position, NavBar Liked NavItem changes view  | **Pass** |
| On the left panel, one can see caregory section| **Pass** |
| On the right panel, one can see PopularProfiles section| **Pass** |
| In the center, one can see section enlisting all the posts that user liked | **Pass** |
| Post section has infinite scroll feature| **Pass** |

**Responsiveness Test:**

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| On the large devices and above, three columns are visible with panels ratio 1:2:1| **Pass** |
| On the small devices like mobile and above, one column is visible| **Pass** |
| On the small devices like mobile and above, NavBar toggles to Hamburger menu view| **Pass** |

#### Create Post

**Function Tests:**

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| When  'Add Post' nav link is clicked, Post create form opens | **Pass** |
| Contains title, category, description and image fields that users can fill and submit| **Pass** |
| Upon submitting filled form, post is shown in the post list page (Home page) | **Pass** |

#### Categories

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| User can sort the different categories of posts by selecting a badge | **Pass** |

#### Search Feature

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| Allows to search through author name,  post title and category | **Pass** |
| Can be seen in all list pages| **Pass** |

#### Popular Profiles

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| Shows 10 most followed profiles in large devices in right column| **Pass** |
| It shows first four most followed profiles in the app in medium to small devices| **Pass** |
| Can be seen in all list and post/profiles/feed/liked details pages| **Pass** |
| The component displays user avatar, name and follow/unfollow button| **Pass** | 
| Users are able to follow a specific profile they like and then be able to easily view their posts in the Feed| **Pass** | 

#### Post Section in PostsListPage (Home)

**Function Tests:**

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| The posts are displayed in a single list, styled as cards for clean separation between posts| **Pass** |
| Infinite scroll feature| **Pass** |
| Each post includes a title, category, description and image| **Pass** |
| Posts show Like and Comments icons showing number they received.| **Pass** | 
| Clicking on heart icon adds a like to the post| **Pass** | 
| Clicking on comments icon takes user to the post detail page which displays all the comments the post recieved.| **Pass** | 

**Responsiveness**

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| Post section takes up 50% width (central column) in large devices | **Pass** |
| Post section takes up 100% width in small and medium devices| **Pass** |

#### Comments

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| The section can be found under a post in post detail pages| **Pass** |
| Can be accessed by clicking the image, comments icon on posts and the respective detail page opens|**Pass** |
| Allows users to add a comment on a post| **Pass** |
| Comments can be edited or deleted if the logged in user is the owner of the comment| **Pass** |
| Comment list displays the date the comment was posted or edited| **Pass** |
| Editing of other users' comments is not allowed as dropdown menu will not be visible.| **Pass** | 

#### Like Unlike Feature

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| A logged in user can like the post that interests them| **Pass** |
| A logged in user can unlike post if they have changed their mind|**Pass** |
| The liked posts will appear in "Liked" page| **Pass** |
| The number the likes recieved by the post can be seen on each page| **Pass** |
| A logged in user can also like/unlike the comment on the post | **Pass** |

#### Post Detail Page

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| Contains details of a single post - image, title, description (if provided by the user) and its category tag| **Pass** |
| Contains like icon to allow user to like the post| **Pass** |
| Features comments section below the post| **Pass** |
| Comments add field will be visible to the users.| **Pass** |
| Contains a dropdown menu on the post to allow the owner to edit or delete the post| **Pass** |
| Like icon in posted comment list to allow user to like the comment | **Pass** |

#### Post Edit Form

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| Can only be accessed from the post details page by clicking the dropdown menu that can be seen only if the logged in user is the owner of the post as shown here| **Pass** |
| Contains title, category, description and image fields that they can fill and update| **Pass** |
| They will be redirected to Post Details page.| **Pass** |

#### Post Delete Option

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| The owner of the post can choose to delete the post from the dropdown menu| **Pass** |
| The reader of the post, who is not the owner of the post cannot choose to delete the post as there will be no dropdown menu| **Pass** |

#### Profile Details Page

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| The user can access their profile or others by selecting their avatars.| **Pass** |
| Displays info how many followers user has and how many users they are following| **Pass** |
| It also shows number of posts they created.| **Pass** |
|The edit profile page provides user's details including profession, location, change their profile image |**Pass** |
| It also enlists the posts they created as you scroll down.| **Pass** |
| If the user signed in and clicks on their profile, they can see a dropdown menu at top right corner, which a non-owner cannot see| **Pass** |
|Dropdown menu features edit profile, change username, change password.|**Pass**|

#### Profile Edit Form

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| Upon clicking on owner's own Profile detail page Dropdown menu with Edit icon, they can access - Profile Edit Form| **Pass** |
|The edit profile page provides a user to edit their own details including profession, location, change their profile image.| **Pass** |


### Profile username/Password change option

|  **Expected Feature** | **Result** |
|-------------------------|---------------------|
| Can be accessed from  Dropdown menu with username change on profile page| **Pass** |
|Upon clicking on the username change option, they can update their name.| **Pass** |
| Can be accessed from  Dropdown menu with password change on profile page| **Pass** |
|Upon clicking on the password change option, they can update the password.| **Pass** |
|They will be redirected to Home page.| **Pass** |

---

## Validation

### W3C Validator 

The [W3C Markup Validation Service](https://validator.w3.org/) was used to validate the HTML of the website. No errors were identified. 
Result is as shown here.
![HTML Validation](documentation/validation/html-validation.png)

### W3C Jigsaw Validator 

The official W3C Markup Validator was used to validate the CSS in the project.

[W3C CSS Jigsaw Validatior](https://jigsaw.w3.org/css-validator/validator)

All CSS code passed through the validator without any issues.

![CSS Validation](documentation/validation/css-validation.png)

### JSX Validation using ESLint

- ESlint was downloaded following the instructions [here](https://gist.github.com/ianmeigh/8e603b91a38d7829d959402bfcf29d3d), credit goes to Ian Meigh. 
![JSX Validation](documentation/validation/eslint-validation.png)

1. Error: Do not pass children as props compile error for Infinite Scroll component: This was solved by removing children element and place code in tags. Detailed screenshot in Issue and Fix section in README.md.

2. Error in DropdownMenu.js - component-definition-is-missing-display-name 
	- Credit: [Quora](https://www.quora.com/Why-is-component-definition-missing-display-name-react-display-name-error-occur-JavaScript-HTML-arrays-reactjs-antd-development)
	- Reason: ESLint thinks you are defining a new component without setting any name to it.

	This is explained because ESLint cannot recognise the render prop pattern because you are not directly writing this render prop into a component, but into an object.

	You can either put the render prop directly into your jsx implementation of the component, or shut down the ESLint's error by doing this :

	// eslint-disable-next-line react/display-name

	OR

	If anyone needs to avoid this in all the files, add below to the rules section of .eslintrc.js file,

	{ 
	... 
	"rules": { 
		"react/display-name": "off" 
	} 
	} 

I used last one. Add "react/display-name": "off" in .eslintrc.json file.





