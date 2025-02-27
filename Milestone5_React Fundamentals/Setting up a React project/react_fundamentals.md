# Challenges I faced during the setup

1. After using 'npm install tailwindcss postcss autoprefixer', I ran 'npx tailwindcss init' which gave me output as -
  'tailwind' is not recognized as an internal or external command,
  operable program or batch file.
2. I checked the version using 'npx tailwindcss -v', but it gave the same error. So, I tried command 'npm list tailwindcss', which gave me output as:
  +-- react-scripts@5.0.1
  | `-- tailwindcss@3.4.17
  `-- tailwindcss@4.0.9
3. Knowing I have two versions of tailwindcss installed, I first uninstalled tailwindcss, which only uninstalled version 4.0.9.
4. So, I checked the version again using 'npx tailwindcss --help', and it showed me 'tailwindcss v3.4.17'.