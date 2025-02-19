# Test-Solving-Page

## Table of Contents
* [Features](#features)
* [Technologies used](#technologies-used)
* [Setup](#setup)

## Features
• Allowing to solve the test.
• Displaying a summary.
• "Next", "Previous", "Finish" buttons

Test operation logic
1. The test is started by clicking the "Start" button, which starts the timer.
2. Questions are displayed one by one.
3. It is possible to go to the next/previous question
without having to answer the current question.
4. It is not possible to end the Test without answering all questions.
5. The test ends with the "Finish" button (it is only active when all questions have been answered).
7. Statistics such as time spent on each question are collected.
8. Results and results with statistics are stored
in localStorage.
9. If the user has selected an answer to the currently displayed question, they can still change it to another answer. However, if the user clicks the next/previous question button and an answer was previously selected, the answer selection cannot be modified and this question is displayed in reading mode with the previously selected answer.

Questions and answers are loaded as JSON.

## Technologies Used
Project is created with:
* HTML
* TypeScript
* JSON

## Setup
### 1. Clone the repository
```
git clone git@github.com:KacGas/Test-Solving-Page.git
cd spa-project
```
### 2. Install Dependencies
```
npm install
```
### 3. Run the Application
Start the Spring Boot application:
```
npm start
```
