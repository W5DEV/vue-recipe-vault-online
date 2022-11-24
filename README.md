# Recipe Vault Online
Recipe Vault Online provides a secure and easy-to-use application for you to enter and retrieve your favorite and most precious recipes. Best of all? You will have access to these recipes *everywhere*. No more worrying about literal spilled milk ruining that generations-old buscuit recipe!

## Tech Stack

### Hosting
This project will be hosted on Vercel.

### Backend
The backend is and will be handled by supabase to provide all necessary backend functions and data storage. This includes Auth, API, Storage and Database. 

### Frontend
The frontend will be utilizing Vue as the framework, built with Vite as the compiler. Pinia will be implemented as a state management tool. The styling frameworks used will as minimal as possible, utilizing Tailwind CSS as the main CSS-helper, and paired with Tailwind UI and Headless UI as a way to maintain minimal overhead and loading time. 

### Code Best-Practices
- This code uses ESLint to establish consistently formatted code. Format on save should work with this and is recommended. 
- Pages and Components should be thought of as a 2-tier system: 'How It Looks' and 'How It Works'. To accomplish this, styling should be done with Tailwind CSS until forced otherwise. The Template section should deal with how the code looks/renders in the browser. The Script section should be focused on logic and function of the code in the browser. Style sections should be minimally used unless forced by animation or specific purposes. 

## Workflow
1. A unauthenticated user (global user) will be able to see a description and sample recipes to get a feel for the way the front-end interface works. 
2. At any time, a user will be able to login and have access to the set amount of recipes that are protected and secured for their own user. 
3. Logged in users will be able to search and browse from the front end all recipes that a global user can view, and also recipes that are 'owned' by them. 
4. A global user will be prompted to make an account or sign in when they attempt to browse 'private' recipes or view private recipes without a share link. 
5. Logged in users will be able to access a backend where they will see a list of their recipes and be able to edit their own recipes or add new ones. 
6. Recipes cannot be deleted, but can be marked as 'inactive' or 'hidden' to maintain integrity and diminish spam. 
7. There will be unit of measurement conversion built-in to handle large or small batch recipes, which should be toggled on the front end with a selector. 
8. Viewing recipes will also give the ability to print the recipe, and should include a button to generate a printer-friendly version of the recipe without images, optimized for black and white printers, and in a reasonable format for a single sheet of paper. 

## To-Do (Phase 1)
1. ~~Install frameworks, create temporary splash page to validate proof of concept and functionality.~~
2. ~~Connect Supabase Auth~~
3. ~~Create a sign-up splash page that creates a supabase user and emails a confirmation?~~
4. ~~Create a login page that redirects to a splashpage upon successful login that returns the username and all relevant data associated with the user. This splashpage should not be accessible to non-logged in users.~~ 
5. ~~Add global mock data manually, linked with the initial user (this should be a simple, yet real recipe to use later on).~~ 
6. ~~Test API/database calls and ensure data is able to be displayed on a page~~ 
7. ~~Create a few new recipes, which should be private. Ensure a global user cannot see these new recipes, but the appropriate logged-in user can.~~ 
8. ~~Style the front-end for displaying the recipe list.~~ 
9. ~~Style the front-end for displaying a particular recipe.~~ 
10. ~~Create a dashboard that lists all linked recipes created by the specific user.~~ 
11. ~~Create a recipe management page that pulls the data for the selected recipe and allows editing~~
12. ~~Create a button/splash page to add a new recipe to the database.~~
13. ~~Create the functionality for printing a recipe (strip most styling, remove images, make printer-friendly).~~
14. **PUSHED TO ICE BOX** Unit Conversion
15. ~~Create a feedback button for each page that will take comments and images, as well as contact info and the page id.~~
16. ~~Implement private/global recipes. There should be a global tag, and each user should be able to start with a limit of global recipes, and then can be manually adjusted later on to increase or decrease recipes based on trust.~~
17. ~~Invite beta-testing users to be the first to test this initial roll out. I am shooting for 15 initial trusted users, made up of both cooks and technical colleagues.~~

## To-Do (Phase 2)
1. ~~Create a tab under account that explains the roadmap for features that are scheduled to be implemented. (Push to demo page as well?)~~
2. ~~Create more global recipes and rework the demo page to be more useful and less of a placeholder.~~
3. ~~Re-enable search/filter function on recipe dashboard~~
4. Create a 'share' button that will allow a user to enter an email (or username?) and add a flag to the recipe that includes the identifier so the other user can view the recipe.
5. Create a shared recipes tab under account that shows all recipes that contain said flag.
6. Create a 'favorites' tab under account that shows all recipes that have been favorited by the user.
7. Create a 'shopping list' tab under account that shows all ingredients from all recipes that have been added to the shopping list by the user.

## Ice-Box
1. Create the unit-conversion for large/small batches (selectable via radio or toggle?). This should be some sort of +/- toggle that has a max of probably 12.
2. ~~Rework home page layout/content, possibly after consulting with someone about copy.~~
3. Update copy of public pages to be more professional and less 'placeholder'.

### Beta-Test Considerations 
1. User Groups for Cooks and Technical Testers?
2. Should I implement A/B testing in some way? (Maybe Phase 2)


