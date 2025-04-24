body {
  margin: 0;
  font-family: 'Segoe UI', Roboto, sans-serif;
  background-color: #f8f9fa;
  color: #333;
  line-height: 1.6;
}

h1, h2, h3 {
  font-weight: 600;
  margin-bottom: 0.5em;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li::before {
  content: '•';
  color: #007bff;
  margin-right: 0.5em;
}

section {
  background-color: white;
  padding: 2rem;
  margin: 2rem auto;
  border-radius: 12px;
  max-width: 900px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

footer {
  text-align: center;
  margin: 3rem 0 1rem;
  color: #888;
  font-size: 0.9rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  padding: 1rem 2rem;
  color: white;
}

.logo {
  font-size: 1.4rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1.2rem;
  list-style: none;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a:hover {
  text-decoration: underline;
}

.content {
  padding: 2rem;
}
