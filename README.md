## Cloud Conformity / Trend Micro Assignment - Option C

Project link: http://cloudconformity-assignment-option-c.s3-website-ap-southeast-2.amazonaws.com/

### This Document has several parts:

1. Introduction
2. My thought and decision making regarding the assignment
3. Retrospective on what I could have done better regarding this assignment.

#### Introduction

Javascript libraries used in this app:

- React

- React-Bootstrap

Testing libraries:

- Jest
- Enzyme
- Sinon

Before running this app, please do the following steps:

1. Download or clone this project.

2. Create an `apiKeys.js` file in the `/src/apis/`folder of the project.

3. Paste the following code including your Cloud Conformity api keys into the newly created file:

   ```javascript
   const apiKeys = {
     ApiKey: 'YOUR CLOUD CONFORMITY API KEY'
   };

   export default apiKeys;
   ```

4. Save the file.

5. In the terminal, navigate to the project folder, then run `npm i` to install npm packages.

6. Run `npm start` to start the app.

7. Open another terminal, navigate to the project folder, then run `npm run test` to start all the test cases.

#### My thought and decision making regarding the assignment

1. I have created a replica of this page(https://www.cloudconformity.com/knowledge-base/) using React library. The naming of the components and DOM class name are basically followed the Cloud Conformity web page. Due to the time constraint, I did not implement your intercom app at the bottom right corner of the page.

2. The Cloud Conformity API endpoint I used in the project is the `GET /services/` endpoint.

3. I used the response data consumed from this endpoint to construct the link of each item in your service list in the body part of the page. Before generating the link, I have sorted the strings. However, the result consumed from the api does not exacly match the service list items in your page. Therefore, the links of each item are not 100% correct. Due to the time constraint, I could not think of an efficient solution to resolve this issue. Also, for simplicity, I did not use React Router to handle the links.

4. I used `<Card />` and `<CardGroup />` components from the React-Bootstrap library. Originally, I had also used `<Jumbotron />` , `<Row />` and `<Col />` in the project, but I found it difficult and less efficient to achieve the exact effect to your webpage, so later I decided not to use those three components.

5. I wrote unit tests in this project. Here is the test result:

![Image of Test results](https://user-images.githubusercontent.com/33575596/77810265-c0a4bf00-70e7-11ea-9a59-3222fbae454b.png)

6. The icomoon icon next to your "Solutions" tab on the navbar is not free. Therefore, I used a similar icon from icomoon to replace your original icon in my assignment.

7. I deployed this project on Amazon S3. The URL link is: http://cloudconformity-assignment-option-c.s3-website-ap-southeast-2.amazonaws.com/

#### Retrospective on this assignment

1. I should have created branches in git for different features. Codes should not be directly push into the master branch. Codes in the master branch is usually ready for production environment.
2. I should have committed my codes more specific and granular. Each commit should have a specific purpose.
3. Sometimes I forgot to write unit tests before committing the code. I should assure to write unit tests and assure all the tests are passed before committing.
4. I should have written more unit tests to try to cover all the lines of codes.
5. I should have written more comment while I was coding, instead of writing comment after commiting codes.
6. Components in the app could be more structured and more scalable.
