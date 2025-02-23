# CountryQuest - Flag & Capital Quiz

## 🎯 Project Description

Test your geography knowledge in this addictive quiz game! CountryQuest challenges players to identify countries based on their flags and capitals, rack up points, and try to beat your high score. 

## 📦 Deliverables

- Full-stack Node.js/Express application
- PostgreSQL database integration
- Interactive quiz interface
- Responsive CSS design

## 🚀 Features

- 🏳️ National flag images
- 🏙️ Capital city clues
- 📊 High difficulty
- ⏱️ Score tracking system

## 🛠️ Technologies Used

| Component              | Technology                          |
|------------------------|-------------------------------------|
| **Backend Framework**  | Node.js + Express.js                |
| **Database**           | PostgreSQL                          |
| **Initial Data Import**| CSV file + csv-parser               |
| **Templating**         | EJS                                 |
| **Styling**            | CSS3 + Grid/Animations              |


## ⚙️ Installation & Setup

### 1. Clone or Download this Repository

   ```bash
   git clone https://github.com/phenriquels01/countryquest.git
   cd countryquest
   ```

### 2. Configure Environment Variables

#### 2.1: Create and edit `.env` file
Create a `.env` file in the project root (same directory as `index.js`) and edit the file with the following content:

```
.env
DB_USER=your_postgres_user
DB_HOST=localhost
DB_NAME=world
DB_PASSWORD=your_postgres_password
DB_PORT=5432
```

**Notes:**
- Replace `your_postgres_user` and `your_postgres_password` with your actual credentials
- Keep `DB_HOST` as `localhost` for local environment

### 3. Database Setup

#### 3.1 Create World Database

```bash
createdb -U postgres world
```

#### 3.2 Execute SQL Script

```bash
psql -U postgres -d world -f queries.sql
```

**Important Notes:**
- Ensure CSV file is in the `root` directory
- Verify PostgreSQL user has file read permissions
- The queries.sql file contains the database schema and seed data for initial setup. If using a custom data path, update the script accordingly.

### 4. Install Dependencies

In the project root, execute:

```bash
npm install
```

*Development tip:*

```bash
npm install -g nodemon
```

### 5. Run the Application

Start the server:

```bash
nodemon index.js
```
or

```bash
node index.js
```

Once the server is running, open your browser and go to: *http://localhost:3000*
