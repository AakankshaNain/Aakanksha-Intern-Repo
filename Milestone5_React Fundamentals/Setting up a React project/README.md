1. Created a folder in my E drive.
2. Opened the command terminal and ran the command 'npx create-react-app tailwind_app'. Since the create-react-app was not installed, it asked me to proceed(Y) or not(N).
3.  After proceeding (Y), navigated to the directory 'tailwind_app'.
4. Ran 'npm install tailwindcss postcss autoprefixer' in command terminal.
5. After resolving the issues I faced, I generated 'tailwind.config.js' in the root directory of my project using the command 'npx tailwindcss init'.
6. Created 'postcss.config.js' file in the root directory to use Tailwindcss CSS and autoprefixer and added this content -
        module.exports = {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        }
7. I included tailwindcss imports in index.css file.
    /* ./src/index.css */
    @import "tailwindcss/base";
    @import "tailwindcss/components";
    @import "tailwindcss/utilities";
8. In the 'tailwind.config.js' file, added all the paths - "./src/**/*.{js,jsx,ts,tsx}", in the content attribute.
9. Started the app using 'npm start'
10. I have referred these steps from GeeksForGeeks.