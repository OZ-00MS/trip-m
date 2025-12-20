const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // serve CSS/JS

const usersFile = path.join(__dirname, 'users.json');

// Read/write users
function readUsers() {
  if (!fs.existsSync(usersFile)) return [];
  const data = fs.readFileSync(usersFile, 'utf8');
  return JSON.parse(data || '[]');
}

function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

// Serve login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'user.html'));
});

// Signup
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  const users = readUsers();

  if (users.find(u => u.username === username)) {
    return res.send('Username already exists! <a href="/">Go back</a>');
  }

  users.push({ username, email, password });
  writeUsers(users);
  res.redirect('/home.html'); // go to home after signup
});

// Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.redirect('/home.html'); // go to home after login
  } else {
    res.send('Invalid username or password! <a href="/">Try again</a>');
  }
});

app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));
