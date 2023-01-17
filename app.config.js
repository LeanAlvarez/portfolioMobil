import 'dotenv/config'


export default{
  "expo": {
    "name": "mobile-portfolio",
    "slug": "mobile-portfolio",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      apiKey: process.env.API_KEY,//"AIzaSyCMrJOwPhIPYk7tVTY1Jh2LoTYNpHeYwOM",
      authDomain:process.env.AUTH_DOMAIN, //"portfolio-mobile-653a6.firebaseapp.com",
      projectId:process.env.PROJECT_ID, //"portfolio-mobile-653a6",
      storageBucket: process.env.STORAGE_BUCKET,//"portfolio-mobile-653a6.appspot.com",
      messagingSenderId:process.env.MESSAGING_SENDER_ID, //"138883714917",
      appId: process.env.APP_ID,//"1:138883714917:web:e179524ba472d56bd19b8c",
      measurementId: process.env.MEASUREMENT_ID//"G-FYE5DSWN52"
    }
  }
}
