# API Documentation

## Base URL
`http://localhost:3000`

## User Routes

### Get User by ID
**Endpoint:** `/user/:id`  
**Method:** `GET`  
**Description:** Retrieve a user by its ID.

**Request Parameters:**
- `id` (string, required): The ID of the user.

**Response:**
- `200 OK`: User details.
- `404 Not Found`: User not found.

### Create User
**Endpoint:** `/user`  
**Method:** `POST`  
**Description:** Create a new user.

**Request Body:**
```json
{
  "nome": "User Name",
  "email": "user@example.com",
  "senha": "password",
  "dataNascimento": "1990-01-01",
  "sexo": "M",
  "endereco": "User Address",
  "telefone": "123456789"
}
```

**Response:**
- `201 Created`: User created successfully.
- `400 Bad Request`: Invalid request data.

### Update User by ID
**Endpoint:** `/user/:id`  
**Method:** `PATCH`  
**Description:** Update an existing user by its ID.

**Request Parameters:**
- `id` (string, required): The ID of the user.

**Request Body:**
```json
{
  "nome": "Updated User Name"
}
```

**Response:**
- `200 OK`: User updated successfully.
- `404 Not Found`: User not found.

### Delete User by ID
**Endpoint:** `/user/:id`  
**Method:** `DELETE`  
**Description:** Delete a user by its ID.

**Request Parameters:**
- `id` (string, required): The ID of the user.

**Response:**
- `200 OK`: User deleted successfully.
- `404 Not Found`: User not found.

## Exam Routes

### Get Exam by ID
**Endpoint:** `/exam/:id`  
**Method:** `GET`  
**Description:** Retrieve an exam by its ID.

**Request Parameters:**
- `id` (string, required): The ID of the exam.

**Response:**
- `200 OK`: Exam details.
- `404 Not Found`: Exam not found.

### Create Exam
**Endpoint:** `/exam`  
**Method:** `POST`  
**Description:** Create a new exam.

**Request Body:**
```json
{
  "userID": "456",
  "nomePaciente": "John Doe",
  "dataNascimento": "1990-01-01",
  "sexo": "M",
  "tipoExame": "Blood Test",
  "dataExame": "2024-06-20",
  "resultados": "Normal",
  "medicoResponsavel": "Dr. Smith",
  "observacoes": "No additional comments"
}
```

**Response:**
- `201 Created`: Exam created successfully.
- `400 Bad Request`: Invalid request data.

### Update Exam by ID
**Endpoint:** `/exam/:id`  
**Method:** `PATCH`  
**Description:** Update an existing exam by its ID.

**Request Parameters:**
- `id` (string, required): The ID of the exam.

**Request Body:**
```json
{
  "resultados": "Updated results"
}
```

**Response:**
- `200 OK`: Exam updated successfully.
- `404 Not Found`: Exam not found.

### Delete Exam by ID
**Endpoint:** `/exam/:id`  
**Method:** `DELETE`  
**Description:** Delete an exam by its ID.

**Request Parameters:**
- `id` (string, required): The ID of the exam.

**Response:**
- `200 OK`: Exam deleted successfully.
- `404 Not Found`: Exam not found.

## Vaccine Routes

### Get Vaccine by ID
**Endpoint:** `/vaccine/:id`  
**Method:** `GET`  
**Description:** Retrieve a vaccine by its ID.

**Request Parameters:**
- `id` (string, required): The ID of the vaccine.

**Response:**
- `200 OK`: Vaccine details.
- `404 Not Found`: Vaccine not found.

### Create Vaccine
**Endpoint:** `/vaccine`  
**Method:** `POST`  
**Description:** Create a new vaccine.

**Request Body:**
```json
{
  "userID": "456",
  "nome": "Jane Doe",
  "dataNascimento": "1990-01-01",
  "sexo": "F",
  "nomeVacina": "COVID-19",
  "dose": "1",
  "dataAdministracao": "2024-06-20",
  "localAdministracao": "Clinic A",
  "fabricante": "Pfizer",
  "lote": "AB12345",
  "profissionalSaude": "Dr. Smith",
  "notasAdicionais": "No side effects"
}
```

**Response:**
- `201 Created`: Vaccine created successfully.
- `400 Bad Request`: Invalid request data.

### Update Vaccine by ID
**Endpoint:** `/vaccine/:id`  
**Method:** `PATCH`  
**Description:** Update an existing vaccine by its ID.

**Request Parameters:**
- `id` (string, required): The ID of the vaccine.

**Request Body:**
```json
{
  "nomeVacina": "Updated Vaccine Name"
}
```

**Response:**
- `200 OK`: Vaccine updated successfully.
- `404 Not Found`: Vaccine not found.

### Delete Vaccine by ID
**Endpoint:** `/vaccine/:id`  
**Method:** `DELETE`  
**Description:** Delete a vaccine by its ID.

**Request Parameters:**
- `id` (string, required): The ID of the vaccine.

**Response:**
- `200 OK`: Vaccine deleted successfully.
- `404 Not Found`: Vaccine not found.