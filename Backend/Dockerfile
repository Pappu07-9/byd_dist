# Use an official Python runtime as a parent image
FROM python:3.12

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
ENV DEBUG=on
ENV SECRET_KEY="django-insecure-0k*#qa%x2p%qcz2o_h0*03a&&)w&pm22x0cbv$%e-+6(aca_!h"


# Copy the current directory contents into the container at /app
COPY . /app


# Install any needed packages specified in requirements.txt
RUN pip install --upgrade pip
RUN pip install -r  ./app/requirements.txt

RUN pip install mysqlclient

WORKDIR /app/BYDUsers

# Expose the port that the application will run on
EXPOSE 8000