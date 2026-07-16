FROM quay.io/qasimtech/mega-md:latest

# Working directory set karein
WORKDIR /root/mega-mdx

# Apni repository clone karein aur dependencies install karein
RUN git clone https://github.com/rai253086-cloud/shoes . && \
    npm install && \
    npm run build

# Port expose karein
EXPOSE 5000

# Bot start karne ki command
CMD ["npm", "run", "start:optimized"]
