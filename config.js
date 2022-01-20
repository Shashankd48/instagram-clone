const config = {
   apiKey: process.env.APIKEY,
   authDomain: process.env.AUTH_DOMAIN,
   projectId: process.env.PROJECT_ID || "instagram-clone-98b68",
   storageBucket:
      process.env.STORAGE_BUCKET || "instagram-clone-98b68.appspot.com",
   messagingSenderId: process.env.MESSAGING_SENDER_ID,
   appId: process.env.APP_ID,
   measurementId: process.env.MEASUREMENT_ID,
   loadImages: process.env.LOADIMAGE,
   secret: process.env.SECRET,
   nextAuthURL: process.env.NEXTAUTH_URL,
   googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
   googleClientId: process.env.GOOGLE_CLIENT_ID,
};

export default config;
