FROM python:3.12.2-bookworm

WORKDIR /app

COPY . /app

RUN python -m venv venv

ENV PATH="/app/venv/bin:$PATH"

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5001

ENV FLASK_ENV=development

CMD ["python", "app.py", "--host=0.0.0.0"]