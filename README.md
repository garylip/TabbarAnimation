# Tab Bar Animation Challenge

## Notes to the team

First, thank you for giving me this challenge, it is an interesting task. \
However, I am sorry that I am not able to fulfil every requirement. \
\
The only difficulty for me is the animation in the middle of the tab bar, the U shape. \
I beleive it can be done by an Svg Path animation, I spent quite some time to produce it, but it does not work. \
\
Regarding the design of the tab bar, I am able to make the tab bar design to the exact same referencing to this library (react-native-curved-bottom-bar) https://www.npmjs.com/package/react-native-curved-bottom-bar
\
\
Eventually, I decided to make a simple tab indicator animation without the U shape in the middle. The demo video (Demo.mp4) is attached.

## How to run the project

Since this project uses Expo, so the steps will be the following:

1. Open terminal and get to the project directory

   ```bash
   cd TabbarAnimation
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
   npx expo start
   ```

3. Run the project on real device or iOS/Android simulator

   for Real device
   ```
   1. Download Expo Go app
   2. Connect the network same as the computer
   3. Open the Expo Go app
   4. You should see the project that can be selected to run
   ```

   for iOS
   ```bash
   i
   ```

   for Android
   ```bash
   a
   ```

## How will I design for an app with this tab bar

### Define Modules
Before we implement the page content, we should first define the modules.\
Modules should be created for every independent functionality or section of the app. It should not be tided to a page.\
In this way, every module will be independent. It will be easy to maintain, sacle, test and reuse. 

### Design
I will choose MVVM for the architectural design, this is about how to structure the code, it separates the code into UI, business logic, services and models.\
The library to use for state management or object observables, we can use Redux or MobX.\
For the network service, we can simply apply the native Fetch from React Native or Axios.

#### Structure of the app might look like this
├── app/\
│   ├── components/\
│   │   ├── Button\
│   │   ├── Card\
│   │\
│   ├── pages/ (Page will use different modules from modules folder))\
│   │   ├── home/\
│   │   │   ├── HomeStyle.js\
│   │   │   ├── HomeView.js\
│   │   │   ├── HomeViewModel.js\
│   │   └── earn/\
│   │       ├── EarnStyle.js\
│   │       ├── EarnView.js\
│   │       ├── EarnViewModel.js\
│   │\
│   ├── modules/\
│   |   ├── function1/\
│   │   │   ├── FunctionView.js\
│   │   │   ├── FunctionStyle.js\
│   │   │   ├── FunctionViewModel.js\
│   │   │\
│   ├── models/ (Since in often case model will be commonly used across different viewmodel on different pages)\
│   |   ├── Model1.js\
│   |   ├── Model2.js\
│   │\
│   ├── services/\
│   │   ├── NetworkService.js\
│   │   └── StorageService.js\


