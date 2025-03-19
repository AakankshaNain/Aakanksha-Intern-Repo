**What is the role of Metro in React Native development?**
1. It enables to fast refresh and changes are visible instantly.
2. It bundles the javaScript code for efficient loading.
3. It ensures only the necessary code is bundled.

**How does Expo simplify React Native development?**
1. There is no need to install or use Android Studio, which consumes a lot of RAM when used.
2. Provides a QR code, which can be scanned using the Expo Go app, and the code can be tested there.
3. It works seamlessly on all platforms.
4. It has in-built APIs to use for cameras, sensors, location services, and more.

**What issues did you encounter, and how did you resolve them?**
1. When I tried to run the project, first it gave me an error of missing modules (@expo/server/build/vendor/http). I deleted node_modules and package-lock.json, cleared npm cache, reinstalled npm, and started the expo server.
2. Once I ran the project, it showed the screen of another React Native project that I created 2 weeks before. I started Metro with a cache reset and then ran the project again.
3. Also, it required a different port ID every time I ran the project. I searched this, and it was due to the metro bundler connection. I am now using the command 'npx expo start --port 8084 –clear'. It seems to work now.