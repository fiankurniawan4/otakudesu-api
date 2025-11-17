# Otakudesu API (DEPRECTED NEW LINK OTAKUDESU | NEXT UPDATE)

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

### Upcoming Fitur

- **Detail Anime**
- **Nonton Anime**

## Alat2nya

- **Express.js**
- **Node.js**
- **Axios**
- **Cheerio**
- **Vercel (Dibawah)**

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
    "title":"Sengoku Youko: Senma Konton-hen",
    "updateDate":"26 Des",
    "updateDay":"Kamis",
    "image":"https://otakudesu.cloud/wp-content/uploads/2024/07/Sengoku-Youko-Senam-Konton.jpg"
},
```
# Online API
## Routes

URL API:

https://otakudesu-api-eight.vercel.app/api/v1/anime

## Endpoint List

### 1. Anime Home

- **GET** `/api/v1/anime`

  Get list Anime terbaru.

  **Example:**  
  `https://otakudesu-api-eight.vercel.app/api/v1/anime`

### 2. Jadwal Anime

- **GET** `/api/v1/anime/jadwal`

  Get list jadwal anime

  **Example:**  
  `https://otakudesu-api-eight.vercel.app/api/v1/anime/jadwal`

### 3. Anime Ongoing

- **GET** `/api/v1/anime/:page`

  Get list anime ongoing sesuai id `:page`

  **Example:**  
  `https://otakudesu-api-eight.vercel.app/api/v1/anime/1`

### 4. Genre List

- **GET** `/api/v1/anime/genre`

  Get list genre

  **Example:**  
  `https://otakudesu-api-eight.vercel.app/api/v1/anime/genre`

### 5. Genre List by Genre

- **GET** `/api/v1/anime/genre/:genre`

  Get list genre by `:genre`

  **Example:**  
  `https://otakudesu-api-eight.vercel.app/api/v1/anime/genre/action`

### 6. Anime Search

- **GET** `/api/v1/anime/search/:name`

  Get anime by search `:name`

  **Example:**  
  `https://otakudesu-api-eight.vercel.app/api/v1/anime/search/maou`
