# INITIAL SETUP
sudo npm install -g serverless
npm install

# DB Scripts 
db_scripts folder at root

# To Run Project Offline
serverless offline

# To Run Tests
npm run test

# URLs
http://localhost:3000/dev/addTask
method - POST
Body - {"title":"T1"}

http://localhost:3000/dev/addList
method - POST
Body - {"title":"L1"}

http://localhost:3000/dev/addTaskList
method - POST
Body - {"taskId":1,"listId":2}


