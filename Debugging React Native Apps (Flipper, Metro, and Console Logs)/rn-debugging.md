**How does Metro help in debugging a React Native app?**
1. Metro provides clear messages on the terminal, which are helpful to identify issues.
2. It supports fast refresh, thus changes are visible instantly.
3. console.log() can be used to print the messages required, which can be helpful to identify and fix issues.

**What debugging features does Flipper provide?**
Although I was not able to use Flipper, I searched what Flipper helps to do. I tried to download from official site, but only tgz folder was downloaded which is Flipper-Server side. I found there is a github repo for latest updates on Flipper, but I didn't find .exe file there.
1. It helps to detect crashes with all the traces from where the issue is arising.
2. Shows console logs.
3. It helps to inspect the components and also all the API requests and responses.
4. It helps to understand the layout of the app by highlighting the components.

**How can you inspect network requests in React Native?**
1. By opening the JS debugger on the React Native app, there is an option for the network that displays the API requests.
2. In Metro, console logs show the API response, whether it is data or an error.
3. Also, by using Flipper, API requests and responses can be viewed.