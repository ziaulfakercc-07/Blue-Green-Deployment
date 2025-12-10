# Use Nginx (a fast web server) as the base foundation
FROM nginx:alpine

# Copy all your website files (HTML, CSS, JS) into the server
COPY . /usr/share/nginx/html