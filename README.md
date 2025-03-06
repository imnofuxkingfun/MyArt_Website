#My Art Gallery. Hy!
This simple website is a personal art portfolio website that showcases my digital artwork and offers commission fill-in forms for interested clients. Built with HTML, CSS, JavaScript, and Node.js, this platform provides an interactive experience for art enjoyers and potential customers.

##Pages
Home (index.html): Landing page featuring a paperdoll and multiple navigation links.
TOS (Terms Of Service): Comprehensive list of important information potential customers should be aware of.
Art Gallery: Collection of digital artwork categorized by years.
Commission System: Request custom artwork through a detailed commission form.
About Me: Paperdoll alongside some simple information about me and links to my social medias.

##Other Features
User Accounts: Account for admin to track commission requests.
Responsive Design: Fully responsive interface that works on desktop and mobile devices.
Easteregg: Pressing the word mess in the Home Screen returns a fun page, that has a simple size and color interactive drawing.


##Technical Implementation
Frontend

HTML5: Semantic markup with proper structure (HEAD, BODY with HEADER, MAIN, FOOTER sections)
CSS3: Custom styling with responsive design principles
JavaScript:
DOM manipulation
Element creation and deletion
Event handling (mouse/keyboard)
Form validation with regular expressions
Local storage for favorites and theme preferences
Random element styling for gallery showcase
Timeouts/intervals for slideshow functionality
classList, currentTarget usage for interactive elements



Backend (Node.js)

Express: Server-side rendering and API endpoints
User Authentication: Login/logout functionality with session management
Data Management: AJAX requests to load artwork data from JSON files
Form Processing: Handle commission requests and inquiries
Error Handling: Custom 404 page for invalid routes

##Installation and Setup

Clone the repository:
Copygit clone https://github.com/imnofuxkingfun/MyArt_Website.git

Install dependencies:
Copycd MyArt_Website
npm install

Start the development server:
Copynpm start

Access the website at http://localhost:3000
