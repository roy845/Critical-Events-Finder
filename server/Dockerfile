FROM python:3.12.2-bookworm

WORKDIR /app

COPY requirements.txt /app/

RUN python -m venv venv && \
    /app/venv/bin/pip install --no-cache-dir -r requirements.txt

COPY . /app

ENV PATH="/app/venv/bin:$PATH"

ENV FLASK_ENV=development

EXPOSE 5001

CMD ["python", "app.py", "--host=0.0.0.0"]