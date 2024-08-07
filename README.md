

# Dj-React-ToDo

## Description

Dj-React-ToDo is a full-stack web application built with Django and React. It allows users to manage their to-do lists efficiently with a simple and intuitive interface. The backend is powered by Django, while the frontend is developed using React.

## Features

- Create, read, update, and delete (CRUD) tasks
- Mark tasks as complete or incomplete
- Responsive design for mobile and desktop use
- Real-time updates with React

## Technologies Used

- **Backend**: Django, Django REST framework
- **Frontend**: React, Redux
- **Database**: SQLite (default, can be changed to PostgreSQL, MySQL, etc.)

## Installation

### Prerequisites

- Python 3.11.9
- Node.js 14+
- Docker (optional, for containerization)

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/Mohamed00Abdelmonem/Dj-React-ToDo.git
cd Dj-React-ToDo
```

2. Create a virtual environment and activate it:

```bash
python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
```

3. Install the backend dependencies:

```bash
pip install -r requirements.txt
```

4. Apply migrations:

```bash
python manage.py migrate
```

5. Create a superuser:

```bash
python manage.py createsuperuser
```

6. Run the backend server:

```bash
python manage.py runserver
```

### Frontend Setup

1. Navigate to the `frontend` directory:

```bash
cd frontend
```

2. Install the frontend dependencies:

```bash
npm install
```

3. Start the frontend development server:

```bash
npm start
```
