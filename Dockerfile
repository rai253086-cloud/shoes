FROM quay.io/qasimtech/mega-md:latest

WORKDIR /root/mega-mdx

# Pehle repository clone karein
RUN git clone https://github.com/rai253086-cloud/shoes .

# Phir dependencies install karein (ab Docker repo ke andar se file dhundega)
RUN npm install && \
    npm run build

EXPOSE 5000

CMD ["npm", "run", "start:optimized"]
