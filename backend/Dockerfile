FROM python:3-alpine3.15

# Add essential build tools
RUN apk add --no-cache gcc musl-dev python3-dev libffi-dev openssl-dev

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

# Make run script executable
RUN chmod +x run_flask.sh

CMD ["./run_flask.sh"]
