import { load } from "cheerio";
import { fetchPage } from "../utils/fetchPage.js";

// export const getAnimeDetail = async (req, res) => {};

export const getAnimeOnGoing = async (req, res) => {
  try {
    let page = parseInt(req.params.page, 10) || 1;
    const results = [];
    const url =
      page === 1
        ? "https://otakudesu.cloud/ongoing-anime/"
        : `https://otakudesu.cloud/ongoing-anime/page/${page}/`;

    const html = await fetchPage(url);
    const $ = load(html);

    $(".detpost").each((index, element) => {
      const title = $(element).find(".jdlflm").text().trim();
      const episode = $(element).find(".epz").text().trim();
      const imageSrc = $(element).find("img").attr("src");
      const link = $(element).find("a").attr("href");

      results.push({
        title,
        episode,
        image: imageSrc,
        link,
      });
    });
    if (results.length === 0) {
      res.status(404).json({ message: "Data tidak ditemukan" });
    } else {
      res.json(results);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Gagal saat mengscraping data");
  }
};

export const getJadwalAnime = async (req, res) => {
  try {
    const results = [];
    const url = "https://otakudesu.cloud/jadwal-rilis/";

    const html = await fetchPage(url);
    const $ = load(html);

    $(".kglist321").each((_, element) => {
      const hari = $(element).find("h2").text().trim();
      const titles = $(element)
        .find("ul li a")
        .map((_, animeElement) => ({
          title: $(animeElement).text().trim(),
          //   link: $(animeElement).attr("href"),
        }))
        .get();

      if (hari && titles.length > 0) {
        const anime = {
          date: hari,
          title: titles,
        };

        results.push(anime);
      }
    });

    if (results.length === 0) {
      res.status(404).json({ message: "Data tidak ditemukan" });
    } else {
      res.json(results);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Gagal saat mengscraping data");
  }
};

export const getGenreList = async (req, res) => {
  try {
    const results = [];
    const url = "https://otakudesu.cloud/genre-list/";

    const html = await fetchPage(url);
    const $ = load(html);

    $(".genres li a").each((_, element) => {
      const genre = $(element).text().trim();
      //   const link = $(element).attr("href");
      const anime = {
        genre,
        // link,
      };

      if (genre) {
        results.push(anime);
      }
    });

    if (results.length === 0) {
      res.status(404).json({ message: "Data tidak ditemukan" });
    } else {
      res.json(results);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Gagal saat mengscraping data");
  }
};

export const getAnimeGenreByName = async (req, res) => {
  try {
    const genreName = req.params.genre;
    const url = `https://otakudesu.cloud/genres/${genreName}/`;
    const results = [];
    const html = await fetchPage(url);
    const $ = load(html);

    $(".col-anime").each((_, element) => {
      const title = $(element).find(".col-anime-title").text().trim();
      const studio = $(element).find(".col-anime-studio").text().trim();
      const episode = $(element).find(".col-anime-eps").text().trim();
      const rating = $(element).find(".col-anime-rating").text().trim();
      const genre = $(element).find(".col-anime-genre").text().trim();
      const sinopsis = $(element).find(".col-synopsis").text().trim();
      const seasonDate = $(element).find(".col-anime-date").text().trim();
      const imageSrc = $(element).find("img").attr("src");
      const anime = {
        title,
        studio,
        episode,
        rating,
        genre,
        sinopsis,
        seasonDate,
        image: imageSrc,
      };

      results.push(anime);
    });
    if (results.length === 0) {
      res.status(404).json({ message: "Data tidak ditemukan" });
    } else {
      res.json(results);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Gagal saat mengscraping data");
  }
};

export const getAnimeHome = async (req, res) => {
  try {
    const url = `https://otakudesu.cloud/`;
    const results = [];
    const html = await fetchPage(url);
    const $ = load(html);
    $(".detpost").each((_, element) => {
      const title = $(element).find(".jdlflm").text().trim();
      const updateDate = $(element).find(".newnime").text().trim();
      const updateDay = $(element).find(".epztipe").text().trim();
      const imageSrc = $(element).find("img").attr("src");
      const link = $(element).find("a").attr("href");

      const anime = {
        title,
        updateDate,
        updateDay,
        image: imageSrc,
        link,
      };

      results.push(anime);
    });
    if (results.length === 0) {
      res.status(404).json({ message: "Data tidak ditemukan" });
    } else {
      res.json(results);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Gagal saat mengscraping data");
  }
};

export const getAnimeBySearchName = async (req, res) => {
  try {
    const animeName = req.params.name;
    const url = `https://otakudesu.cloud/?s=${animeName}&post_type=anime`;
    const results = [];
    const html = await fetchPage(url);
    const $ = load(html);
    $("ul.chivsrc > li").each((_, element) => {
      const imgElement = $(element).find("img");
      const titleElement = $(element).find("h2 > a");
      const genresElement = $(element).find(".set").eq(0).find("a");
      const statusElement = $(element).find(".set").eq(1);
      const ratingElement = $(element).find(".set").eq(2);

      const anime = {
        title: titleElement.text().trim(),
        image: imgElement.attr("src"),
        genre: genresElement.map((_, genre) => $(genre).text().trim()).get(),
        status: statusElement.text().replace("Status :", "").trim(),
        rating: ratingElement.text().replace("Rating :", "").trim(),
      };

      results.push(anime);
    });
    if (results.length === 0) {
      res.status(404).json({ message: "Data tidak ditemukan" });
    } else {
      res.json(results);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Gagal saat mengscraping data");
  }
};
