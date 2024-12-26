# Otakudesu API

Rest API Otakudesu Bahasa Indonesia

## Source

https://otakudesu.cloud/

## Fitur

- **Anime Home / Anime Terbaru di Home**
- **Jadwal Anime**
- **Anime Ongoing**
- **Genre List By Genre**
- **Genre List**
- **Anime Search**

## Alat2nya

- **Express.js**
- **Node.js**
- **Axios**
- **Cheerio**
- **Vercel (Comingsoon)**

## Installasi

```bash
# Clone repo
git clone https://github.com/fiankurniawan4/otakudesu-api.git

# Masuk ke folder
cd otakudesu-api

# Install dependensi
npm install

# Jalankan server
npm run start

```

## Contoh Response

```json
{
        {
            "title":"Sengoku Youko: Senma Konton-hen",
            "updateDate":"26 Des",
            "updateDay":"Kamis",
            "image":"https://otakudesu.cloud/wp-content/uploads/2024/07/Sengoku-Youko-Senam-Konton.jpg"
        },
}
```

## Routes

URL API:

## Endpoint List

### 1. Anime Home

- **GET** `/anime`

  Get list Anime terbaru.

  **Example:**  
  `http://localhost:3000/api/anime`

### 2. Jadwal Anime

- **GET** `/anime/jadwal`

  Get list jadwal anime

  **Example:**  
  `http://localhost:3000/api/anime/jadwal`

### 3. Anime Ongoing

- **GET** `/anime/:page`

  Get list anime ongoing sesuai id `:page`

  **Example:**  
  `http://localhost:3000/api/anime/1`

### 4. Genre List

- **GET** `/anime/genre`

  Get list genre

  **Example:**  
  `http://localhost:3000/api/anime/genre`

### 5. Genre List by Genre

- **GET** `/anime/genre/:genre`

  Get list genre by `:genre`

  **Example:**  
  `http://localhost:3000/api/anime/genre/action`

### 6. Anime Search

- **GET** `/anime/search/:name`

  Get anime by search `:name`

  **Example:**  
  `http://localhost:3000/api/anime/search/maou`
