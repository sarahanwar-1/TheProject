# News Sentiment Analysis

## Project Description

This project allows users to analyze the sentiment of news articles by simply entering a URL. It uses the **textrazor Analysis API** to determine the sentiment, subjectivity, and other metadata of the article. The application provides a user-friendly interface to input URLs, view the analysis, and display the results dynamically. It also includes offline functionality via service workers and is built using **Webpack**, **Sass**, and **Jest**.

## Features
- **Real-time Sentiment Analysis**: Analyze sentiment, subjectivity, and other metadata from news articles.
- **Offline Functionality**: The app continues to work offline using service workers.
- **Responsive Design**: The app is styled using **Sass** to ensure a mobile-friendly layout.
- **Unit Testing**: **Jest** is used for unit testing to ensure code quality and stability.

## Technologies Used
- **Webpack**: For bundling and managing JavaScript, Sass, and other assets.
- **Sass**: For styling the application.
- **Jest**: For writing and running unit tests.
- **Axios**: For making HTTP requests to the MeaningCloud API.
- **Service Workers**: For offline functionality.
- **textrazor**: To perform sentiment analysis on news articles.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Step 1: Clone the repository

Clone this repository to your local machine:


git clone https://github.com/your-username/news-sentiment-analysis.git
cd news-sentiment-analysis
Step 2: Install dependencies
Install all the necessary dependencies by running:


npm install
### Step 3: Set up the API Key
Sign up for the MeaningCloud API here to get your API key.
Create a .env file in the root of your project and add your API_KEY:
env
Copy code
API_KEY=your-api-key-here
### Step 4: Run the app in development mode
To run the app in development mode, execute:


npm run dev
This will start a local server, and the app will be available at http://localhost:8080.

### Step 5: Build for production
To create a production build with optimized assets, run:


npm run build
The bundled files will be available in the dist/ directory.

### API Setup
The app uses the textrazor Sentiment Analysis API to analyze the sentiment of news articles. Follow these steps to set up the API:

Sign up for the textrazor API and obtain your API key.
Add the API key to the .env file as described in Step 3 above.
Service Workers
This project includes Service Workers to allow the app to work offline. The service workers are set up using the Workbox Webpack Plugin.

### Step 1: Test offline functionality
Run the app in development mode using npm run dev.
Open the app in your browser and disconnect from the internet.
The app should still work, demonstrating offline functionality.
Testing
This project uses Jest for unit testing. To run the tests:


npm run test
Tests are located in the src/__test__/ directory.

Deployment
You can deploy the app to platforms like Netlify or Heroku for free hosting.

Deploying to Netlify:
Go to Netlify.
Create an account and log in.
Connect your GitHub repository and deploy the app.
Deploying to Heroku:
Go to Heroku.
Create an account and log in.
Follow the steps to deploy your Node.js app to Heroku.
License
This project is licensed under the MIT License - see the LICENSE file for details.

This project was built as part of a full-stack web development course. The app demonstrates the use of external APIs, service workers, and modern JavaScript build tools like Webpack.



### Key Updates:
- **Project Description**: Clear explanation of the project's purpose and key features.
- **Getting Started**: Detailed instructions for installing dependencies, setting up the API key, running the app, and building for production.
- **API Setup**: Clear setup instructions for integrating the textrazor API.
- **Service Workers**: Instructions for testing offline functionality.
- **Testing**: Guide for running unit tests with Jest.
- **Deployment**: Information about deploying the project on platforms like **Netlify** and **Heroku**.





