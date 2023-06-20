# User Authentication

Node.js user authentication API with register, login, logout, profile retrieval, and profile update routes. It is build with Express and MongoDB and uses JSON JWT authentication stored in HTTP-only cookie.

## Usage

- Create a MongoDB database and get your MongoDB URI - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).
- Or set up a local MongoDB database with `"mongodb://localhost:27017/<database-name>"`.

### Env Variables

Rename the `.env.example` file to `.env` and add your MongoDB URI and JWT_SECRET.

```
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/<database-name>
JWT_SECRET=abc123
```

### Install Dependencies

```
npm install
```

### Run

```
# Run API with (:5000) with Node
npm run start

# Run API with (:5000) with Nodemon
npm run server
```
