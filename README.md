# 03 JavaScript: Password Generator

This Week we are required to deliver a HomeWork which we create a PassWord Generator

For the HTML and CSS I have used the Files given and for the JS we have a started Code from which I include my code.

HomeWork Submitted on 03/23/22

## Goal 

  The idea is to consolidate the knowledge of the third week of classes as we move forward to JS world.
  
  It requires to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write( HTML and CSS are granted for this assigment). It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.


## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## Guidance

  In order to generate the JS code I focused on the following premises
  
  1. First it was defined 4 Arrays for all possible options for building the password. Basically Numbers, upperCase and LowerCase Letters , special character
  2. There is a main Function called questions that relays of a variable name **control** which ends the cycle when all conditions for inputs are made based on a Do / While cycle 
  3. Inside the function there is another variable **BuildPass** that enables the user to break the functions in case the password is not generated so it does not loop forever.
  4. Inside the function question it is set the conditionals for the password requirements such the required lenght , and the ability to include at least one Special/Lower&Upper Case letter / special character to the password
  5. The is a function to generate password which is a combination of a usage of **for** and pushing element of the arrays to create a new password
  6. Also is important the usage of the RAMDOM function math.random to generate the ramdom character to be added.
  7. Finally a writefunction linked to the html with the interactive buttom based on click.
  8. Most of the code is being pulled and adapted from activities performed in classes as background to be applied

### Links 

     **Repository Link**   https://github.com/Prsoto/HomeWork3
     
     **Live Link**         https://prsoto.github.io/HomeWork3/
     
