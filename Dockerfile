FROM nginx:alpine
# Copy custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf
# Copy all project files to web root
COPY . /usr/share/nginx/html