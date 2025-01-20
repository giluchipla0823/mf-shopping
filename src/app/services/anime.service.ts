import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IResponseAnime } from '../models/anime-api.interface';
import { IProductCard } from '../models/product-card.interface';

const FAKE_DATA = {
  pagination: {
    last_visible_page: 1,
    has_next_page: false,
    current_page: 1,
    items: {
      count: 18,
      total: 18,
      per_page: 25,
    },
  },
  data: [
    {
      mal_id: 38000,
      url: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1286/99889t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1286/99889.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1286/99889t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1286/99889l.webp',
        },
      },
      trailer: {
        youtube_id: '6vMuWuWlW4I',
        url: 'https://www.youtube.com/watch?v=6vMuWuWlW4I',
        embed_url:
          'https://www.youtube.com/embed/6vMuWuWlW4I?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/6vMuWuWlW4I/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/6vMuWuWlW4I/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/6vMuWuWlW4I/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/6vMuWuWlW4I/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/6vMuWuWlW4I/maxresdefault.jpg',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Kimetsu no Yaiba',
        },
        {
          type: 'Synonym',
          title: 'Blade of Demon Destruction',
        },
        {
          type: 'Japanese',
          title: '\u9b3c\u6ec5\u306e\u5203',
        },
        {
          type: 'English',
          title: 'Demon Slayer: Kimetsu no Yaiba',
        },
        {
          type: 'German',
          title: 'Demon Slayer',
        },
        {
          type: 'Spanish',
          title: 'Guardianes De La Noche: Kimetsu no Yaiba',
        },
        {
          type: 'French',
          title: 'Demon Slayer',
        },
      ],
      title: 'Kimetsu no Yaiba',
      title_english: 'Demon Slayer: Kimetsu no Yaiba',
      title_japanese: '\u9b3c\u6ec5\u306e\u5203',
      title_synonyms: ['Blade of Demon Destruction'],
      type: 'TV',
      source: 'Manga',
      episodes: 26,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2019-04-06T00:00:00+00:00',
        to: '2019-09-28T00:00:00+00:00',
        prop: {
          from: {
            day: 6,
            month: 4,
            year: 2019,
          },
          to: {
            day: 28,
            month: 9,
            year: 2019,
          },
        },
        string: 'Apr 6, 2019 to Sep 28, 2019',
      },
      duration: '23 min per ep',
      rating: 'R - 17+ (violence & profanity)',
      score: 8.44,
      scored_by: 2193090,
      rank: 175,
      popularity: 5,
      members: 3189082,
      favorites: 92342,
      synopsis:
        "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.\n\nWhen he finally arrives back home the next day, he is met with a horrifying sight\u2014his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity.\n\n[Written by MAL Rewrite]",
      background:
        'The anime covers chapters 1 to 53 of the manga. Kimetsu no Yaiba won the Animation of the Year award in the Television category at the Tokyo Anime Award Festival in 2020.',
      season: 'spring',
      year: 2019,
      broadcast: {
        day: 'Saturdays',
        time: '23:30',
        timezone: 'Asia/Tokyo',
        string: 'Saturdays at 23:30 (JST)',
      },
      producers: [
        {
          mal_id: 17,
          type: 'anime',
          name: 'Aniplex',
          url: 'https://myanimelist.net/anime/producer/17/Aniplex',
        },
        {
          mal_id: 719,
          type: 'anime',
          name: 'Studio Mausu',
          url: 'https://myanimelist.net/anime/producer/719/Studio_Mausu',
        },
        {
          mal_id: 1365,
          type: 'anime',
          name: 'Shueisha',
          url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
        },
      ],
      licensors: [
        {
          mal_id: 493,
          type: 'anime',
          name: 'Aniplex of America',
          url: 'https://myanimelist.net/anime/producer/493/Aniplex_of_America',
        },
      ],
      studios: [
        {
          mal_id: 43,
          type: 'anime',
          name: 'ufotable',
          url: 'https://myanimelist.net/anime/producer/43/ufotable',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'anime',
          name: 'Action',
          url: 'https://myanimelist.net/anime/genre/1/Action',
        },
        {
          mal_id: 46,
          type: 'anime',
          name: 'Award Winning',
          url: 'https://myanimelist.net/anime/genre/46/Award_Winning',
        },
        {
          mal_id: 37,
          type: 'anime',
          name: 'Supernatural',
          url: 'https://myanimelist.net/anime/genre/37/Supernatural',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 13,
          type: 'anime',
          name: 'Historical',
          url: 'https://myanimelist.net/anime/genre/13/Historical',
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: 'anime',
          name: 'Shounen',
          url: 'https://myanimelist.net/anime/genre/27/Shounen',
        },
      ],
    },
    {
      mal_id: 40456,
      url: 'https://myanimelist.net/anime/40456/Kimetsu_no_Yaiba_Movie__Mugen_Ressha-hen',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1704/106947.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1704/106947t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1704/106947l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1704/106947.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1704/106947t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1704/106947l.webp',
        },
      },
      trailer: {
        youtube_id: 'PrZ0O8Qp18s',
        url: 'https://www.youtube.com/watch?v=PrZ0O8Qp18s',
        embed_url:
          'https://www.youtube.com/embed/PrZ0O8Qp18s?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/PrZ0O8Qp18s/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/PrZ0O8Qp18s/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/PrZ0O8Qp18s/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/PrZ0O8Qp18s/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/PrZ0O8Qp18s/maxresdefault.jpg',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen',
        },
        {
          type: 'Synonym',
          title: 'Gekijouban Kimetsu no Yaiba: Mugen Ressha-hen',
        },
        {
          type: 'Synonym',
          title: 'Kimetsu no Yaiba: Infinity Train',
        },
        {
          type: 'Synonym',
          title: 'Demon Slayer Movie: Infinity Train',
        },
        {
          type: 'Japanese',
          title:
            '\u5287\u5834\u7248 \u9b3c\u6ec5\u306e\u5203 \u7121\u9650\u5217\u8eca\u7de8',
        },
        {
          type: 'English',
          title: 'Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train',
        },
        {
          type: 'Spanish',
          title: 'Guardianes De La Noche - Kimetsu No Yaiba - Tren Infinito',
        },
        {
          type: 'French',
          title:
            "Demon Slayer - Kimetsu no Yaiba - Le film : Le train de l'Infini",
        },
      ],
      title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen',
      title_english: 'Demon Slayer: Kimetsu no Yaiba - The Movie: Mugen Train',
      title_japanese:
        '\u5287\u5834\u7248 \u9b3c\u6ec5\u306e\u5203 \u7121\u9650\u5217\u8eca\u7de8',
      title_synonyms: [
        'Gekijouban Kimetsu no Yaiba: Mugen Ressha-hen',
        'Kimetsu no Yaiba: Infinity Train',
        'Demon Slayer Movie: Infinity Train',
      ],
      type: 'Movie',
      source: 'Manga',
      episodes: 1,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2020-10-16T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 16,
            month: 10,
            year: 2020,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Oct 16, 2020',
      },
      duration: '1 hr 56 min',
      rating: 'R - 17+ (violence & profanity)',
      score: 8.56,
      scored_by: 1083998,
      rank: 112,
      popularity: 71,
      members: 1633039,
      favorites: 13307,
      synopsis:
        "After a string of mysterious disappearances begin to plague a train, the Demon Slayer Corps' multiple attempts to remedy the problem prove fruitless. To prevent further casualties, the Flame Pillar, Kyoujurou Rengoku, takes it upon himself to eliminate the threat. Accompanying him are some of the Corps' most promising new blood: Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira, who all hope to witness the fiery feats of this model demon slayer firsthand.\n\nUnbeknownst to them, the demonic forces responsible for the disappearances have already put their sinister plan in motion. Under this demonic presence, the group must muster every ounce of their willpower and draw their swords to save all two hundred passengers onboard. As things begin to spiral out of control, Tanjirou's resolve and commitment to duty are put to the test.\n\n[Written by MAL Rewrite]",
      background:
        'The worldwide box office total for Kimetsu no Yaiba Movie: Mugen Ressha-hen is over $503 million from more than 41 million tickets sold, making it the highest-grossing film of 2020 as well as the highest-grossing anime and Japanese film of all time. It was the first time in the history of cinema that a non-Hollywood production topped the annual worldwide box office. It also became the highest-grossing R-rated animated film of all time.',
      season: null,
      year: null,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: null,
      },
      producers: [
        {
          mal_id: 17,
          type: 'anime',
          name: 'Aniplex',
          url: 'https://myanimelist.net/anime/producer/17/Aniplex',
        },
        {
          mal_id: 1365,
          type: 'anime',
          name: 'Shueisha',
          url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
        },
      ],
      licensors: [
        {
          mal_id: 493,
          type: 'anime',
          name: 'Aniplex of America',
          url: 'https://myanimelist.net/anime/producer/493/Aniplex_of_America',
        },
      ],
      studios: [
        {
          mal_id: 43,
          type: 'anime',
          name: 'ufotable',
          url: 'https://myanimelist.net/anime/producer/43/ufotable',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'anime',
          name: 'Action',
          url: 'https://myanimelist.net/anime/genre/1/Action',
        },
        {
          mal_id: 37,
          type: 'anime',
          name: 'Supernatural',
          url: 'https://myanimelist.net/anime/genre/37/Supernatural',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 13,
          type: 'anime',
          name: 'Historical',
          url: 'https://myanimelist.net/anime/genre/13/Historical',
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: 'anime',
          name: 'Shounen',
          url: 'https://myanimelist.net/anime/genre/27/Shounen',
        },
      ],
    },
    {
      mal_id: 49926,
      url: 'https://myanimelist.net/anime/49926/Kimetsu_no_Yaiba__Mugen_Ressha-hen',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1065/118763.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1065/118763t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1065/118763l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1065/118763.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1065/118763t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1065/118763l.webp',
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Kimetsu no Yaiba: Mugen Ressha-hen',
        },
        {
          type: 'Synonym',
          title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen (TV)',
        },
        {
          type: 'Japanese',
          title: '\u9b3c\u6ec5\u306e\u5203 \u7121\u9650\u5217\u8eca\u7de8',
        },
        {
          type: 'English',
          title: 'Demon Slayer: Kimetsu no Yaiba Mugen Train Arc',
        },
      ],
      title: 'Kimetsu no Yaiba: Mugen Ressha-hen',
      title_english: 'Demon Slayer: Kimetsu no Yaiba Mugen Train Arc',
      title_japanese: '\u9b3c\u6ec5\u306e\u5203 \u7121\u9650\u5217\u8eca\u7de8',
      title_synonyms: ['Kimetsu no Yaiba Movie: Mugen Ressha-hen (TV)'],
      type: 'TV',
      source: 'Manga',
      episodes: 7,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2021-10-10T00:00:00+00:00',
        to: '2021-11-28T00:00:00+00:00',
        prop: {
          from: {
            day: 10,
            month: 10,
            year: 2021,
          },
          to: {
            day: 28,
            month: 11,
            year: 2021,
          },
        },
        string: 'Oct 10, 2021 to Nov 28, 2021',
      },
      duration: '24 min per ep',
      rating: 'R - 17+ (violence & profanity)',
      score: 8.35,
      scored_by: 508112,
      rank: 234,
      popularity: 230,
      members: 845074,
      favorites: 4437,
      synopsis:
        'A mysterious string of disappearances on a certain train has caught the attention of the Demon Slayer Corps, and they have sent one of their best to exterminate what can only be a demon responsible. However, the plan to board the Mugen Train is delayed by a lesser demon who is terrorizing the mechanics and targeting a kind, elderly woman and her granddaughter. Kyoujurou Rengoku, the Flame Hashira, must eliminate the threat before boarding the train.\n\nSent to assist the Hashira, Tanjirou Kamado, Inosuke Hashira, and Zenitsu Agatsuma enter the train prepared to fight. But their monstrous target already has a devious plan in store for them and the two hundred passengers: by delving deep into their consciousness, the demon intends to obliterate everyone in a stunning display of the power held by the Twelve Kizuki. \n\n[Written by MAL Rewrite]',
      background:
        'Mugen Ressha-hen adapts chapters 54 to 66 of the manga. The first episode is original to the anime.',
      season: 'fall',
      year: 2021,
      broadcast: {
        day: 'Sundays',
        time: '23:15',
        timezone: 'Asia/Tokyo',
        string: 'Sundays at 23:15 (JST)',
      },
      producers: [
        {
          mal_id: 17,
          type: 'anime',
          name: 'Aniplex',
          url: 'https://myanimelist.net/anime/producer/17/Aniplex',
        },
        {
          mal_id: 1365,
          type: 'anime',
          name: 'Shueisha',
          url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
        },
      ],
      licensors: [],
      studios: [
        {
          mal_id: 43,
          type: 'anime',
          name: 'ufotable',
          url: 'https://myanimelist.net/anime/producer/43/ufotable',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'anime',
          name: 'Action',
          url: 'https://myanimelist.net/anime/genre/1/Action',
        },
        {
          mal_id: 37,
          type: 'anime',
          name: 'Supernatural',
          url: 'https://myanimelist.net/anime/genre/37/Supernatural',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 13,
          type: 'anime',
          name: 'Historical',
          url: 'https://myanimelist.net/anime/genre/13/Historical',
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: 'anime',
          name: 'Shounen',
          url: 'https://myanimelist.net/anime/genre/27/Shounen',
        },
      ],
    },
    {
      mal_id: 47398,
      url: 'https://myanimelist.net/anime/47398/Chuukou_Ikkan_Kimetsu_Gakuen_Monogatari__Valentine-hen',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1722/120098.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1722/120098t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1722/120098l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1722/120098.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1722/120098t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1722/120098l.webp',
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Chuukou Ikkan!! Kimetsu Gakuen Monogatari: Valentine-hen',
        },
        {
          type: 'Synonym',
          title: 'Kimetsu Gakuen: Valentine-hen',
        },
        {
          type: 'Japanese',
          title:
            '\u30ad\u30e1\u30c4\u5b66\u5712 \u30d0\u30ec\u30f3\u30bf\u30a4\u30f3\u7de8',
        },
        {
          type: 'English',
          title:
            'Junior High and High School!! Kimetsu Academy Story: Valentine Edition',
        },
      ],
      title: 'Chuukou Ikkan!! Kimetsu Gakuen Monogatari: Valentine-hen',
      title_english:
        'Junior High and High School!! Kimetsu Academy Story: Valentine Edition',
      title_japanese:
        '\u30ad\u30e1\u30c4\u5b66\u5712 \u30d0\u30ec\u30f3\u30bf\u30a4\u30f3\u7de8',
      title_synonyms: ['Kimetsu Gakuen: Valentine-hen'],
      type: 'ONA',
      source: 'Manga',
      episodes: 4,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2021-02-14T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 14,
            month: 2,
            year: 2021,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Feb 14, 2021',
      },
      duration: '2 min per ep',
      rating: 'PG-13 - Teens 13 or older',
      score: 6.68,
      scored_by: 23550,
      rank: 6008,
      popularity: 3360,
      members: 47947,
      favorites: 119,
      synopsis:
        "Zenitsu Agatsuma is determined to be the subject of adoration by receiving chocolates on Valentine\u2019s Day\u2014and this year, he is taking no chances. Enlisting the help of his friend Tanjirou Kamado, the two are prepared to learn from some of Kimetsu Academy's most popular figures. Together, they ask Kyoujurou Rengoku, the history teacher; Giyuu Tomioka, the PE teacher; and Tengen Uzui, the art teacher, about the secrets to their popularity. However, only time will tell if following their advice will bring the same success for Zenitsu.\n\n[Written by MAL Rewrite]",
      background:
        "Kimetsu Gakuen: Valentine-hen is a series of Valentine's Day specials for Kimetsu no Yaiba. The first three episodes were released to Aniplex's official YouTube channel, with the fourth being streamed during the Kimetsu Matsuri Online: Anime 2nd Anniversary Festival.",
      season: null,
      year: null,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: null,
      },
      producers: [],
      licensors: [],
      studios: [
        {
          mal_id: 43,
          type: 'anime',
          name: 'ufotable',
          url: 'https://myanimelist.net/anime/producer/43/ufotable',
        },
      ],
      genres: [
        {
          mal_id: 4,
          type: 'anime',
          name: 'Comedy',
          url: 'https://myanimelist.net/anime/genre/4/Comedy',
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [],
    },
    {
      mal_id: 48861,
      url: 'https://myanimelist.net/anime/48861/Chuukou_Ikkan_Kimetsu_Gakuen_Monogatari__Kimetsu_no_Utage_Tokubetsu-hen',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1666/125846.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1666/125846t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1666/125846l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1666/125846.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1666/125846t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1666/125846l.webp',
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title:
            'Chuukou Ikkan!! Kimetsu Gakuen Monogatari: Kimetsu no Utage Tokubetsu-hen',
        },
        {
          type: 'Synonym',
          title: 'Kimetsu Academy: Kimetsu no Utage Special Edition',
        },
        {
          type: 'Synonym',
          title: "Kimetsu Gakuen Monogatari: Demon's Banquet Special Arc",
        },
        {
          type: 'Japanese',
          title:
            '\u4e2d\u9ad8\u4e00\u8cab!!\u30ad\u30e1\u30c4\u5b66\u5712\u7269\u8a9e \uff5e\u9b3c\u6ec5\u306e\u5bb4=\u7279\u5225\u7de8=\uff5e',
        },
        {
          type: 'English',
          title: 'Junior High and High School!! Kimetsu Academy Story',
        },
      ],
      title:
        'Chuukou Ikkan!! Kimetsu Gakuen Monogatari: Kimetsu no Utage Tokubetsu-hen',
      title_english: 'Junior High and High School!! Kimetsu Academy Story',
      title_japanese:
        '\u4e2d\u9ad8\u4e00\u8cab!!\u30ad\u30e1\u30c4\u5b66\u5712\u7269\u8a9e \uff5e\u9b3c\u6ec5\u306e\u5bb4=\u7279\u5225\u7de8=\uff5e',
      title_synonyms: [
        'Kimetsu Academy: Kimetsu no Utage Special Edition',
        "Kimetsu Gakuen Monogatari: Demon's Banquet Special Arc",
      ],
      type: 'Special',
      source: 'Manga',
      episodes: 3,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2020-08-26T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 26,
            month: 8,
            year: 2020,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Aug 26, 2020',
      },
      duration: '1 min per ep',
      rating: 'PG-13 - Teens 13 or older',
      score: 6.67,
      scored_by: 4848,
      rank: 6079,
      popularity: 6971,
      members: 9169,
      favorites: 13,
      synopsis:
        'These specials were originally shown at the Kimetsu no Utage live event which was held on October 20th 2019 in Tokyo. The cast members present at the event did a live dubbing of the characters.\n\nA version with a newly recorded dub was later featured on the DVD &amp; Blu-ray releases containing a recording of the event which came out on August 26th 2020.',
      background: '',
      season: null,
      year: null,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: null,
      },
      producers: [],
      licensors: [],
      studios: [
        {
          mal_id: 43,
          type: 'anime',
          name: 'ufotable',
          url: 'https://myanimelist.net/anime/producer/43/ufotable',
        },
      ],
      genres: [
        {
          mal_id: 4,
          type: 'anime',
          name: 'Comedy',
          url: 'https://myanimelist.net/anime/genre/4/Comedy',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 23,
          type: 'anime',
          name: 'School',
          url: 'https://myanimelist.net/anime/genre/23/School',
        },
      ],
      demographics: [],
    },
    {
      mal_id: 47778,
      url: 'https://myanimelist.net/anime/47778/Kimetsu_no_Yaiba__Yuukaku-hen',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1908/120036.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1908/120036t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1908/120036l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1908/120036.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1908/120036t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1908/120036l.webp',
        },
      },
      trailer: {
        youtube_id: 'QwvWdnd2Ktg',
        url: 'https://www.youtube.com/watch?v=QwvWdnd2Ktg',
        embed_url:
          'https://www.youtube.com/embed/QwvWdnd2Ktg?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/QwvWdnd2Ktg/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/QwvWdnd2Ktg/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/QwvWdnd2Ktg/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/QwvWdnd2Ktg/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/QwvWdnd2Ktg/maxresdefault.jpg',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Kimetsu no Yaiba: Yuukaku-hen',
        },
        {
          type: 'Japanese',
          title: '\u9b3c\u6ec5\u306e\u5203 \u904a\u90ed\u7de8',
        },
        {
          type: 'English',
          title: 'Demon Slayer: Kimetsu no Yaiba Entertainment District Arc',
        },
      ],
      title: 'Kimetsu no Yaiba: Yuukaku-hen',
      title_english:
        'Demon Slayer: Kimetsu no Yaiba Entertainment District Arc',
      title_japanese: '\u9b3c\u6ec5\u306e\u5203 \u904a\u90ed\u7de8',
      title_synonyms: [],
      type: 'TV',
      source: 'Manga',
      episodes: 11,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2021-12-05T00:00:00+00:00',
        to: '2022-02-13T00:00:00+00:00',
        prop: {
          from: {
            day: 5,
            month: 12,
            year: 2021,
          },
          to: {
            day: 13,
            month: 2,
            year: 2022,
          },
        },
        string: 'Dec 5, 2021 to Feb 13, 2022',
      },
      duration: '26 min per ep',
      rating: 'R - 17+ (violence & profanity)',
      score: 8.73,
      scored_by: 989015,
      rank: 51,
      popularity: 78,
      members: 1553215,
      favorites: 24796,
      synopsis:
        "The devastation of the Mugen Train incident still weighs heavily on the members of the Demon Slayer Corps. Despite being given time to recover, life must go on, as the wicked never sleep: a vicious demon is terrorizing the alluring women of the Yoshiwara Entertainment District. The Sound Hashira, Tengen Uzui, and his three wives are on the case. However, when he soon loses contact with his spouses, Tengen fears the worst and enlists the help of Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira to infiltrate the district's most prominent houses and locate the depraved Upper Rank Demon.\n\n[Written by MAL Rewrite]",
      background:
        'Kimetsu no Yaiba: Yuukaku-hen adapts chapters 67 to 97 of the original manga.',
      season: 'winter',
      year: 2022,
      broadcast: {
        day: 'Sundays',
        time: '23:15',
        timezone: 'Asia/Tokyo',
        string: 'Sundays at 23:15 (JST)',
      },
      producers: [
        {
          mal_id: 17,
          type: 'anime',
          name: 'Aniplex',
          url: 'https://myanimelist.net/anime/producer/17/Aniplex',
        },
        {
          mal_id: 719,
          type: 'anime',
          name: 'Studio Mausu',
          url: 'https://myanimelist.net/anime/producer/719/Studio_Mausu',
        },
        {
          mal_id: 1365,
          type: 'anime',
          name: 'Shueisha',
          url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
        },
      ],
      licensors: [
        {
          mal_id: 493,
          type: 'anime',
          name: 'Aniplex of America',
          url: 'https://myanimelist.net/anime/producer/493/Aniplex_of_America',
        },
        {
          mal_id: 1468,
          type: 'anime',
          name: 'Crunchyroll',
          url: 'https://myanimelist.net/anime/producer/1468/Crunchyroll',
        },
      ],
      studios: [
        {
          mal_id: 43,
          type: 'anime',
          name: 'ufotable',
          url: 'https://myanimelist.net/anime/producer/43/ufotable',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'anime',
          name: 'Action',
          url: 'https://myanimelist.net/anime/genre/1/Action',
        },
        {
          mal_id: 37,
          type: 'anime',
          name: 'Supernatural',
          url: 'https://myanimelist.net/anime/genre/37/Supernatural',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 13,
          type: 'anime',
          name: 'Historical',
          url: 'https://myanimelist.net/anime/genre/13/Historical',
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: 'anime',
          name: 'Shounen',
          url: 'https://myanimelist.net/anime/genre/27/Shounen',
        },
      ],
    },
    {
      mal_id: 51019,
      url: 'https://myanimelist.net/anime/51019/Kimetsu_no_Yaiba__Katanakaji_no_Sato-hen',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1765/135099.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1765/135099t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1765/135099l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1765/135099.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1765/135099t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1765/135099l.webp',
        },
      },
      trailer: {
        youtube_id: 'a9tq0aS5Zu8',
        url: 'https://www.youtube.com/watch?v=a9tq0aS5Zu8',
        embed_url:
          'https://www.youtube.com/embed/a9tq0aS5Zu8?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/a9tq0aS5Zu8/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/a9tq0aS5Zu8/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/a9tq0aS5Zu8/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/a9tq0aS5Zu8/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/a9tq0aS5Zu8/maxresdefault.jpg',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Kimetsu no Yaiba: Katanakaji no Sato-hen',
        },
        {
          type: 'Japanese',
          title:
            '\u9b3c\u6ec5\u306e\u5203 \u5200\u935b\u51b6\u306e\u91cc\u7de8',
        },
        {
          type: 'English',
          title: 'Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc',
        },
      ],
      title: 'Kimetsu no Yaiba: Katanakaji no Sato-hen',
      title_english: 'Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc',
      title_japanese:
        '\u9b3c\u6ec5\u306e\u5203 \u5200\u935b\u51b6\u306e\u91cc\u7de8',
      title_synonyms: [],
      type: 'TV',
      source: 'Manga',
      episodes: 11,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2023-04-09T00:00:00+00:00',
        to: '2023-06-18T00:00:00+00:00',
        prop: {
          from: {
            day: 9,
            month: 4,
            year: 2023,
          },
          to: {
            day: 18,
            month: 6,
            year: 2023,
          },
        },
        string: 'Apr 9, 2023 to Jun 18, 2023',
      },
      duration: '28 min per ep',
      rating: 'R - 17+ (violence & profanity)',
      score: 8.2,
      scored_by: 557521,
      rank: 386,
      popularity: 189,
      members: 944779,
      favorites: 9536,
      synopsis:
        "For centuries, the Demon Slayer Corps has sacredly kept the location of Swordsmith Village a secret. As the village of the greatest forgers, it provides Demon Slayers with the finest weapons, which allow them to fight night-crawling fiends and ensure the safety of humans. After his sword was chipped and deemed useless, Tanjirou Kamado, along with his precious little sister Nezuko, is escorted to the village to receive a new one.\n\nMeanwhile, the death of an Upper Rank Demon disturbs the idle order in the demon world. As Tanjirou becomes acquainted with Mist Hashira Muichirou Tokitou and Love Hashira Mitsuri Kanroji, ferocious powers creep from the shadows and threaten to shatter the Demon Slayers' greatest line of defense.\n\n[Written by MAL Rewrite]",
      background:
        'Katanakaji no Sato-hen adapts chapters 98 to 127 of the manga.',
      season: 'spring',
      year: 2023,
      broadcast: {
        day: 'Sundays',
        time: '23:15',
        timezone: 'Asia/Tokyo',
        string: 'Sundays at 23:15 (JST)',
      },
      producers: [
        {
          mal_id: 17,
          type: 'anime',
          name: 'Aniplex',
          url: 'https://myanimelist.net/anime/producer/17/Aniplex',
        },
        {
          mal_id: 1365,
          type: 'anime',
          name: 'Shueisha',
          url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
        },
      ],
      licensors: [
        {
          mal_id: 493,
          type: 'anime',
          name: 'Aniplex of America',
          url: 'https://myanimelist.net/anime/producer/493/Aniplex_of_America',
        },
      ],
      studios: [
        {
          mal_id: 43,
          type: 'anime',
          name: 'ufotable',
          url: 'https://myanimelist.net/anime/producer/43/ufotable',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'anime',
          name: 'Action',
          url: 'https://myanimelist.net/anime/genre/1/Action',
        },
        {
          mal_id: 37,
          type: 'anime',
          name: 'Supernatural',
          url: 'https://myanimelist.net/anime/genre/37/Supernatural',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 13,
          type: 'anime',
          name: 'Historical',
          url: 'https://myanimelist.net/anime/genre/13/Historical',
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: 'anime',
          name: 'Shounen',
          url: 'https://myanimelist.net/anime/genre/27/Shounen',
        },
      ],
    },
    {
      mal_id: 55701,
      url: 'https://myanimelist.net/anime/55701/Kimetsu_no_Yaiba__Hashira_Geiko-hen',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1565/142711.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1565/142711t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1565/142711l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1565/142711.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1565/142711t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1565/142711l.webp',
        },
      },
      trailer: {
        youtube_id: 'Tf31dGdlWxE',
        url: 'https://www.youtube.com/watch?v=Tf31dGdlWxE',
        embed_url:
          'https://www.youtube.com/embed/Tf31dGdlWxE?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/Tf31dGdlWxE/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/Tf31dGdlWxE/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/Tf31dGdlWxE/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/Tf31dGdlWxE/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/Tf31dGdlWxE/maxresdefault.jpg',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Kimetsu no Yaiba: Hashira Geiko-hen',
        },
        {
          type: 'Japanese',
          title: '\u9b3c\u6ec5\u306e\u5203 \u67f1\u7a3d\u53e4\u7de8',
        },
        {
          type: 'English',
          title: 'Demon Slayer: Kimetsu no Yaiba Hashira Training Arc',
        },
      ],
      title: 'Kimetsu no Yaiba: Hashira Geiko-hen',
      title_english: 'Demon Slayer: Kimetsu no Yaiba Hashira Training Arc',
      title_japanese: '\u9b3c\u6ec5\u306e\u5203 \u67f1\u7a3d\u53e4\u7de8',
      title_synonyms: [],
      type: 'TV',
      source: 'Manga',
      episodes: 8,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2024-05-12T00:00:00+00:00',
        to: '2024-06-30T00:00:00+00:00',
        prop: {
          from: {
            day: 12,
            month: 5,
            year: 2024,
          },
          to: {
            day: 30,
            month: 6,
            year: 2024,
          },
        },
        string: 'May 12, 2024 to Jun 30, 2024',
      },
      duration: '29 min per ep',
      rating: 'R - 17+ (violence & profanity)',
      score: 8.12,
      scored_by: 304029,
      rank: 492,
      popularity: 401,
      members: 577511,
      favorites: 4518,
      synopsis:
        'After a series of mighty clashes with Upper Rank Demons, the Ubuyashiki clan prepares for one last battle with the hellish forces of Muzan Kibutsuji. In order to finally defeat the Demon leader once and for all, the clan devises a training camp for the Demon Slayer Corps, one led by the remaining Hashira\u2014the most elite warriors in the organization. Each Hashira forms a specialized exercise that will hone both their own abilities and the skills of the ordinary soldiers.\n\nTanjirou Kamado, a boy at the heart of the brewing conflict, recovers from wounds received in a recent fight. While his half-Demon sister Nezuko is studied by researchers like Shinobu Kochou, Tanjirou embarks to train with the Hashira, seeking mastery in each of their assigned areas of expertise to be best prepared for the coming war\u2014skills vital to Tanjirou, as he has vowed to be the very warrior who will eliminate Muzan for good.\n\n[Written by MAL Rewrite]',
      background:
        'Kimetsu no Yaiba: Hashira Geiko-hen was released on Blu-ray and DVD in four volumes from July 3, 2024, to October 2, 2024.',
      season: 'spring',
      year: 2024,
      broadcast: {
        day: 'Sundays',
        time: '23:15',
        timezone: 'Asia/Tokyo',
        string: 'Sundays at 23:15 (JST)',
      },
      producers: [
        {
          mal_id: 17,
          type: 'anime',
          name: 'Aniplex',
          url: 'https://myanimelist.net/anime/producer/17/Aniplex',
        },
        {
          mal_id: 1365,
          type: 'anime',
          name: 'Shueisha',
          url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
        },
      ],
      licensors: [
        {
          mal_id: 493,
          type: 'anime',
          name: 'Aniplex of America',
          url: 'https://myanimelist.net/anime/producer/493/Aniplex_of_America',
        },
      ],
      studios: [
        {
          mal_id: 43,
          type: 'anime',
          name: 'ufotable',
          url: 'https://myanimelist.net/anime/producer/43/ufotable',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'anime',
          name: 'Action',
          url: 'https://myanimelist.net/anime/genre/1/Action',
        },
        {
          mal_id: 37,
          type: 'anime',
          name: 'Supernatural',
          url: 'https://myanimelist.net/anime/genre/37/Supernatural',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 13,
          type: 'anime',
          name: 'Historical',
          url: 'https://myanimelist.net/anime/genre/13/Historical',
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: 'anime',
          name: 'Shounen',
          url: 'https://myanimelist.net/anime/genre/27/Shounen',
        },
      ],
    },
    {
      mal_id: 59192,
      url: 'https://myanimelist.net/anime/59192/Kimetsu_no_Yaiba_Movie__Mugen_Jou-hen',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1687/143891.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1687/143891t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1687/143891l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1687/143891.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1687/143891t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1687/143891l.webp',
        },
      },
      trailer: {
        youtube_id: 'rzXxaJ4fOcc',
        url: 'https://www.youtube.com/watch?v=rzXxaJ4fOcc',
        embed_url:
          'https://www.youtube.com/embed/rzXxaJ4fOcc?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/rzXxaJ4fOcc/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/rzXxaJ4fOcc/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/rzXxaJ4fOcc/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/rzXxaJ4fOcc/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/rzXxaJ4fOcc/maxresdefault.jpg',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Kimetsu no Yaiba Movie: Mugen Jou-hen',
        },
        {
          type: 'Japanese',
          title:
            '\u5287\u5834\u7248 \u9b3c\u6ec5\u306e\u5203 \u7121\u9650\u57ce\u7de8',
        },
        {
          type: 'English',
          title: 'Demon Slayer: Kimetsu no Yaiba Infinity Castle',
        },
      ],
      title: 'Kimetsu no Yaiba Movie: Mugen Jou-hen',
      title_english: 'Demon Slayer: Kimetsu no Yaiba Infinity Castle',
      title_japanese:
        '\u5287\u5834\u7248 \u9b3c\u6ec5\u306e\u5203 \u7121\u9650\u57ce\u7de8',
      title_synonyms: [],
      type: 'Movie',
      source: 'Manga',
      episodes: 3,
      status: 'Not yet aired',
      airing: false,
      aired: {
        from: '2025-01-01T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 1,
            month: 1,
            year: 2025,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: '2025 to ?',
      },
      duration: 'Unknown',
      rating: 'R - 17+ (violence & profanity)',
      score: null,
      scored_by: null,
      rank: null,
      popularity: 1983,
      members: 117179,
      favorites: 707,
      synopsis: 'Anime movie trilogy adaptation of the Infinity Castle Arc.',
      background: '',
      season: null,
      year: null,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: null,
      },
      producers: [
        {
          mal_id: 17,
          type: 'anime',
          name: 'Aniplex',
          url: 'https://myanimelist.net/anime/producer/17/Aniplex',
        },
      ],
      licensors: [],
      studios: [
        {
          mal_id: 43,
          type: 'anime',
          name: 'ufotable',
          url: 'https://myanimelist.net/anime/producer/43/ufotable',
        },
      ],
      genres: [
        {
          mal_id: 1,
          type: 'anime',
          name: 'Action',
          url: 'https://myanimelist.net/anime/genre/1/Action',
        },
        {
          mal_id: 37,
          type: 'anime',
          name: 'Supernatural',
          url: 'https://myanimelist.net/anime/genre/37/Supernatural',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 13,
          type: 'anime',
          name: 'Historical',
          url: 'https://myanimelist.net/anime/genre/13/Historical',
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: 'anime',
          name: 'Shounen',
          url: 'https://myanimelist.net/anime/genre/27/Shounen',
        },
      ],
    },
    {
      mal_id: 38753,
      url: 'https://myanimelist.net/anime/38753/Araburu_Kisetsu_no_Otome-domo_yo',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1622/111483.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1622/111483t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1622/111483l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1622/111483.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1622/111483t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1622/111483l.webp',
        },
      },
      trailer: {
        youtube_id: 'f-lS_fWGUZE',
        url: 'https://www.youtube.com/watch?v=f-lS_fWGUZE',
        embed_url:
          'https://www.youtube.com/embed/f-lS_fWGUZE?enablejsapi=1&wmode=opaque&autoplay=1',
        images: {
          image_url: 'https://img.youtube.com/vi/f-lS_fWGUZE/default.jpg',
          small_image_url:
            'https://img.youtube.com/vi/f-lS_fWGUZE/sddefault.jpg',
          medium_image_url:
            'https://img.youtube.com/vi/f-lS_fWGUZE/mqdefault.jpg',
          large_image_url:
            'https://img.youtube.com/vi/f-lS_fWGUZE/hqdefault.jpg',
          maximum_image_url:
            'https://img.youtube.com/vi/f-lS_fWGUZE/maxresdefault.jpg',
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Araburu Kisetsu no Otome-domo yo.',
        },
        {
          type: 'Synonym',
          title: 'Maidens of the Savage Season',
        },
        {
          type: 'Japanese',
          title:
            '\u8352\u3076\u308b\u5b63\u7bc0\u306e\u4e59\u5973\u3069\u3082\u3088\u3002',
        },
        {
          type: 'English',
          title: 'O Maidens in Your Savage Season',
        },
      ],
      title: 'Araburu Kisetsu no Otome-domo yo.',
      title_english: 'O Maidens in Your Savage Season',
      title_japanese:
        '\u8352\u3076\u308b\u5b63\u7bc0\u306e\u4e59\u5973\u3069\u3082\u3088\u3002',
      title_synonyms: ['Maidens of the Savage Season'],
      type: 'TV',
      source: 'Manga',
      episodes: 12,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2019-07-06T00:00:00+00:00',
        to: '2019-09-21T00:00:00+00:00',
        prop: {
          from: {
            day: 6,
            month: 7,
            year: 2019,
          },
          to: {
            day: 21,
            month: 9,
            year: 2019,
          },
        },
        string: 'Jul 6, 2019 to Sep 21, 2019',
      },
      duration: '24 min per ep',
      rating: 'PG-13 - Teens 13 or older',
      score: 7.3,
      scored_by: 158326,
      rank: 2823,
      popularity: 705,
      members: 356799,
      favorites: 1650,
      synopsis:
        "When they were little kids laughing and playing together, Izumi Norimoto and Kazusa Onodera were like siblings. But as their bodies matured into middle school, Kazusa began seeing him as something different; unfortunately for her, so did the other girls. Ostracized, Kazusa had no choice but to distance herself from him going into high school. After joining the literature club, however, she finds friends that keep her mind occupied. Known throughout the school for reading aloud sex scenes in literature novels, the club's reputation has kept all teachers from accepting the task of being their adviser.\n    \nDuring a discussion about what they would put on their bucket list, one of the girls says one thing: sex. This single word sends ripples throughout the five girls, as the thought of sex begins taking over their daily lives. And, after walking in on Izumi during a very private moment, Kazusa is sent into a spiral of emotion that forces her to face her true feelings for him. Now, with their hearts racing and the literature club facing immediate disbandment, the five girls must work hard to keep both their sanities and their club alive.\n\n[Written by MAL Rewrite]",
      background: '',
      season: 'summer',
      year: 2019,
      broadcast: {
        day: 'Saturdays',
        time: '02:25',
        timezone: 'Asia/Tokyo',
        string: 'Saturdays at 02:25 (JST)',
      },
      producers: [
        {
          mal_id: 143,
          type: 'anime',
          name: 'Mainichi Broadcasting System',
          url: 'https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System',
        },
        {
          mal_id: 159,
          type: 'anime',
          name: 'Kodansha',
          url: 'https://myanimelist.net/anime/producer/159/Kodansha',
        },
        {
          mal_id: 1671,
          type: 'anime',
          name: 'DMM pictures',
          url: 'https://myanimelist.net/anime/producer/1671/DMM_pictures',
        },
      ],
      licensors: [
        {
          mal_id: 376,
          type: 'anime',
          name: 'Sentai Filmworks',
          url: 'https://myanimelist.net/anime/producer/376/Sentai_Filmworks',
        },
      ],
      studios: [
        {
          mal_id: 1087,
          type: 'anime',
          name: 'Lay-duce',
          url: 'https://myanimelist.net/anime/producer/1087/Lay-duce',
        },
      ],
      genres: [
        {
          mal_id: 8,
          type: 'anime',
          name: 'Drama',
          url: 'https://myanimelist.net/anime/genre/8/Drama',
        },
        {
          mal_id: 22,
          type: 'anime',
          name: 'Romance',
          url: 'https://myanimelist.net/anime/genre/22/Romance',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 23,
          type: 'anime',
          name: 'School',
          url: 'https://myanimelist.net/anime/genre/23/School',
        },
      ],
      demographics: [
        {
          mal_id: 27,
          type: 'anime',
          name: 'Shounen',
          url: 'https://myanimelist.net/anime/genre/27/Shounen',
        },
      ],
    },
    {
      mal_id: 675,
      url: 'https://myanimelist.net/anime/675/One__Kagayaku_Kisetsu_e',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/5/25086.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/5/25086t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/5/25086l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/5/25086.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/5/25086t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/5/25086l.webp',
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'One: Kagayaku Kisetsu e',
        },
        {
          type: 'Synonym',
          title: 'One: To a Shining Season',
        },
        {
          type: 'Japanese',
          title: 'ONE \uff5e\u8f1d\u304f\u5b63\u7bc0\u3078\uff5e',
        },
      ],
      title: 'One: Kagayaku Kisetsu e',
      title_english: null,
      title_japanese: 'ONE \uff5e\u8f1d\u304f\u5b63\u7bc0\u3078\uff5e',
      title_synonyms: ['One: To a Shining Season'],
      type: 'OVA',
      source: 'Visual novel',
      episodes: 4,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2001-08-10T00:00:00+00:00',
        to: '2002-05-24T00:00:00+00:00',
        prop: {
          from: {
            day: 10,
            month: 8,
            year: 2001,
          },
          to: {
            day: 24,
            month: 5,
            year: 2002,
          },
        },
        string: 'Aug 10, 2001 to May 24, 2002',
      },
      duration: '27 min per ep',
      rating: 'PG-13 - Teens 13 or older',
      score: 5.05,
      scored_by: 1680,
      rank: 13112,
      popularity: 9151,
      members: 4589,
      favorites: 7,
      synopsis:
        "Orihara Kouhei returns to his town after a long disappearance to fullfil the promises he made to several girls in his childhood. He suffered from memory loss, and carries a tragic past. An strange ambience surrounds the OVA...It's almost like a dream, like memories from the past trying to come together in one piece but without being able to...\n\n(Source: ANN)",
      background: '',
      season: null,
      year: null,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: null,
      },
      producers: [
        {
          mal_id: 50,
          type: 'anime',
          name: 'KSS',
          url: 'https://myanimelist.net/anime/producer/50/KSS',
        },
      ],
      licensors: [],
      studios: [
        {
          mal_id: 38,
          type: 'anime',
          name: 'Arms',
          url: 'https://myanimelist.net/anime/producer/38/Arms',
        },
      ],
      genres: [
        {
          mal_id: 8,
          type: 'anime',
          name: 'Drama',
          url: 'https://myanimelist.net/anime/genre/8/Drama',
        },
        {
          mal_id: 37,
          type: 'anime',
          name: 'Supernatural',
          url: 'https://myanimelist.net/anime/genre/37/Supernatural',
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [],
    },
    {
      mal_id: 3483,
      url: 'https://myanimelist.net/anime/3483/Maison_Ikkoku__Shiki_Utsuriyuku_Kisetsu_no_Naka_de',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/11/30539.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/11/30539t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/11/30539l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/11/30539.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/11/30539t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/11/30539l.webp',
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Maison Ikkoku: Shiki Utsuriyuku Kisetsu no Naka de',
        },
        {
          type: 'Synonym',
          title: 'Maison Ikkoku: Four Seasons Through the Passing Seasons',
        },
        {
          type: 'Synonym',
          title: 'Maison Ikkoku: Through the Passing of the Seasons',
        },
        {
          type: 'Japanese',
          title:
            '\u3081\u305e\u3093\u4e00\u523b\uff5e\u79fb\u308a\u3086\u304f\u5b63\u7bc0\u306e\u4e2d\u3067\uff5e',
        },
      ],
      title: 'Maison Ikkoku: Shiki Utsuriyuku Kisetsu no Naka de',
      title_english: null,
      title_japanese:
        '\u3081\u305e\u3093\u4e00\u523b\uff5e\u79fb\u308a\u3086\u304f\u5b63\u7bc0\u306e\u4e2d\u3067\uff5e',
      title_synonyms: [
        'Maison Ikkoku: Four Seasons Through the Passing Seasons',
        'Maison Ikkoku: Through the Passing of the Seasons',
      ],
      type: 'OVA',
      source: 'Manga',
      episodes: 1,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '1988-12-21T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 21,
            month: 12,
            year: 1988,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Dec 21, 1988',
      },
      duration: '1 hr 30 min',
      rating: 'PG-13 - Teens 13 or older',
      score: 6.94,
      scored_by: 1325,
      rank: 4616,
      popularity: 9692,
      members: 3847,
      favorites: 4,
      synopsis:
        'A recap of the Maison Ikkoku series that focuses on the relationship between Godai and Kyoko. The entire special is taken from footage of the TV series.',
      background: '',
      season: null,
      year: null,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: null,
      },
      producers: [
        {
          mal_id: 99,
          type: 'anime',
          name: 'Kitty Films',
          url: 'https://myanimelist.net/anime/producer/99/Kitty_Films',
        },
      ],
      licensors: [],
      studios: [
        {
          mal_id: 37,
          type: 'anime',
          name: 'Studio Deen',
          url: 'https://myanimelist.net/anime/producer/37/Studio_Deen',
        },
      ],
      genres: [
        {
          mal_id: 4,
          type: 'anime',
          name: 'Comedy',
          url: 'https://myanimelist.net/anime/genre/4/Comedy',
        },
        {
          mal_id: 8,
          type: 'anime',
          name: 'Drama',
          url: 'https://myanimelist.net/anime/genre/8/Drama',
        },
        {
          mal_id: 22,
          type: 'anime',
          name: 'Romance',
          url: 'https://myanimelist.net/anime/genre/22/Romance',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 50,
          type: 'anime',
          name: 'Adult Cast',
          url: 'https://myanimelist.net/anime/genre/50/Adult_Cast',
        },
      ],
      demographics: [
        {
          mal_id: 42,
          type: 'anime',
          name: 'Seinen',
          url: 'https://myanimelist.net/anime/genre/42/Seinen',
        },
      ],
    },
    {
      mal_id: 50041,
      url: 'https://myanimelist.net/anime/50041/Uchuu_no_Kisetsu',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1571/118599.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1571/118599t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1571/118599l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1571/118599.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1571/118599t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1571/118599l.webp',
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Uchuu no Kisetsu',
        },
        {
          type: 'Synonym',
          title: 'Space Season',
        },
        {
          type: 'Japanese',
          title: '\u5b87\u5b99\u306e\u5b63\u7bc0',
        },
      ],
      title: 'Uchuu no Kisetsu',
      title_english: null,
      title_japanese: '\u5b87\u5b99\u306e\u5b63\u7bc0',
      title_synonyms: ['Space Season'],
      type: 'Music',
      source: 'Original',
      episodes: 1,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2021-07-26T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 26,
            month: 7,
            year: 2021,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Jul 26, 2021',
      },
      duration: '4 min',
      rating: 'PG-13 - Teens 13 or older',
      score: 6.62,
      scored_by: 488,
      rank: null,
      popularity: 14446,
      members: 926,
      favorites: 1,
      synopsis:
        'Music video for the song Uchuu no Kisetsu by Lanndo (nulut) feat. Eve and suis (of Yorushika).',
      background: '',
      season: null,
      year: null,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: null,
      },
      producers: [],
      licensors: [],
      studios: [],
      genres: [],
      explicit_genres: [],
      themes: [
        {
          mal_id: 19,
          type: 'anime',
          name: 'Music',
          url: 'https://myanimelist.net/anime/genre/19/Music',
        },
      ],
      demographics: [],
    },
    {
      mal_id: 48994,
      url: 'https://myanimelist.net/anime/48994/Closure_no_Kimitsu_File',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1852/131810.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1852/131810t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1852/131810l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1852/131810.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1852/131810t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1852/131810l.webp',
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Closure no Kimitsu File',
        },
        {
          type: 'Synonym',
          title: "Closure's Secret Files",
        },
        {
          type: 'Japanese',
          title:
            '\u30af\u30ed\u30fc\u30b8\u30e3\u306e\u6a5f\u5bc6\u30d5\u30a1\u30a4\u30eb',
        },
        {
          type: 'English',
          title: "Closure's Secret Files",
        },
      ],
      title: 'Closure no Kimitsu File',
      title_english: "Closure's Secret Files",
      title_japanese:
        '\u30af\u30ed\u30fc\u30b8\u30e3\u306e\u6a5f\u5bc6\u30d5\u30a1\u30a4\u30eb',
      title_synonyms: ["Closure's Secret Files"],
      type: 'ONA',
      source: 'Game',
      episodes: 17,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2021-05-16T00:00:00+00:00',
        to: '2021-11-21T00:00:00+00:00',
        prop: {
          from: {
            day: 16,
            month: 5,
            year: 2021,
          },
          to: {
            day: 21,
            month: 11,
            year: 2021,
          },
        },
        string: 'May 16, 2021 to Nov 21, 2021',
      },
      duration: '2 min per ep',
      rating: 'G - All Ages',
      score: 6.07,
      scored_by: 180,
      rank: 9559,
      popularity: 17324,
      members: 461,
      favorites: 1,
      synopsis: 'Animated shorts showing the daily life on Rhodes Island.',
      background: '',
      season: null,
      year: null,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: null,
      },
      producers: [],
      licensors: [],
      studios: [
        {
          mal_id: 2009,
          type: 'anime',
          name: 'Yostar Pictures',
          url: 'https://myanimelist.net/anime/producer/2009/Yostar_Pictures',
        },
      ],
      genres: [
        {
          mal_id: 4,
          type: 'anime',
          name: 'Comedy',
          url: 'https://myanimelist.net/anime/genre/4/Comedy',
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [],
    },
    {
      mal_id: 41171,
      url: 'https://myanimelist.net/anime/41171/Muku_na_Kisetsu',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1523/105693.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1523/105693t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1523/105693l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1523/105693.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1523/105693t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1523/105693l.webp',
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Muku na Kisetsu',
        },
        {
          type: 'Japanese',
          title: '\u7121\u57a2\u306a\u5b63\u7bc0',
        },
      ],
      title: 'Muku na Kisetsu',
      title_english: null,
      title_japanese: '\u7121\u57a2\u306a\u5b63\u7bc0',
      title_synonyms: [],
      type: 'Music',
      source: 'Original',
      episodes: 1,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2015-10-14T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 14,
            month: 10,
            year: 2015,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Oct 14, 2015',
      },
      duration: '3 min',
      rating: 'G - All Ages',
      score: 5.68,
      scored_by: 133,
      rank: null,
      popularity: 20390,
      members: 254,
      favorites: 0,
      synopsis:
        'Music video for the song Muku na Kisetsu by Japanese band Gesu no Kiwami Otome that was included in their fourth single.',
      background: '',
      season: null,
      year: null,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: null,
      },
      producers: [
        {
          mal_id: 1011,
          type: 'anime',
          name: 'Warner Music Japan',
          url: 'https://myanimelist.net/anime/producer/1011/Warner_Music_Japan',
        },
      ],
      licensors: [],
      studios: [
        {
          mal_id: 1717,
          type: 'anime',
          name: 'Onionskin',
          url: 'https://myanimelist.net/anime/producer/1717/Onionskin',
        },
      ],
      genres: [],
      explicit_genres: [],
      themes: [
        {
          mal_id: 19,
          type: 'anime',
          name: 'Music',
          url: 'https://myanimelist.net/anime/genre/19/Music',
        },
      ],
      demographics: [],
    },
    {
      mal_id: 26261,
      url: 'https://myanimelist.net/anime/26261/Tabi_no_Kisetsu',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/3/66199.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/3/66199t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/3/66199l.jpg',
        },
        webp: {
          image_url: 'https://cdn.myanimelist.net/images/anime/3/66199.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/3/66199t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/3/66199l.webp',
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Tabi no Kisetsu',
        },
        {
          type: 'Japanese',
          title: '\u8db3\u888b\u306e\u5b63\u7bc0',
        },
      ],
      title: 'Tabi no Kisetsu',
      title_english: null,
      title_japanese: '\u8db3\u888b\u306e\u5b63\u7bc0',
      title_synonyms: [],
      type: 'OVA',
      source: 'Unknown',
      episodes: 1,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2000-01-01T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 1,
            month: 1,
            year: 2000,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: '2000',
      },
      duration: '19 min',
      rating: 'G - All Ages',
      score: null,
      scored_by: null,
      rank: 14516,
      popularity: 20574,
      members: 244,
      favorites: 1,
      synopsis:
        'An educational film about overcoming material weakness.\n\nA poor boy short changes the poor old daifuku-mochi seller lady constantly. The guilt racks up and he goes to apologize to her with all the money he stole...only to find that she had died recently.',
      background: '',
      season: null,
      year: null,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: null,
      },
      producers: [
        {
          mal_id: 198,
          type: 'anime',
          name: 'Gakken',
          url: 'https://myanimelist.net/anime/producer/198/Gakken',
        },
      ],
      licensors: [],
      studios: [],
      genres: [
        {
          mal_id: 8,
          type: 'anime',
          name: 'Drama',
          url: 'https://myanimelist.net/anime/genre/8/Drama',
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [
        {
          mal_id: 15,
          type: 'anime',
          name: 'Kids',
          url: 'https://myanimelist.net/anime/genre/15/Kids',
        },
      ],
    },
    {
      mal_id: 43433,
      url: 'https://myanimelist.net/anime/43433/Alice_no_Kisetsu',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1662/109763.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1662/109763t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1662/109763l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1662/109763.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1662/109763t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1662/109763l.webp',
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Alice no Kisetsu',
        },
        {
          type: 'Synonym',
          title: 'Minna no Uta',
        },
        {
          type: 'Japanese',
          title: '\u30a2\u30ea\u30b9\u306e\u5b63\u7bc0',
        },
      ],
      title: 'Alice no Kisetsu',
      title_english: null,
      title_japanese: '\u30a2\u30ea\u30b9\u306e\u5b63\u7bc0',
      title_synonyms: ['Minna no Uta'],
      type: 'Music',
      source: 'Other',
      episodes: 1,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '1988-04-05T00:00:00+00:00',
        to: null,
        prop: {
          from: {
            day: 5,
            month: 4,
            year: 1988,
          },
          to: {
            day: null,
            month: null,
            year: null,
          },
        },
        string: 'Apr 5, 1988',
      },
      duration: '2 min',
      rating: 'G - All Ages',
      score: null,
      scored_by: null,
      rank: null,
      popularity: 20106,
      members: 270,
      favorites: 1,
      synopsis:
        "Music video for the song Alice no Kisetsu by Chikaco Sawada that was featured on NHK's Minna no Uta program. The song and video animated by Tsutomu Shibayama were inspired by Alice in Wonderland.",
      background: '',
      season: null,
      year: null,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: null,
      },
      producers: [
        {
          mal_id: 111,
          type: 'anime',
          name: 'NHK',
          url: 'https://myanimelist.net/anime/producer/111/NHK',
        },
      ],
      licensors: [],
      studios: [],
      genres: [
        {
          mal_id: 10,
          type: 'anime',
          name: 'Fantasy',
          url: 'https://myanimelist.net/anime/genre/10/Fantasy',
        },
      ],
      explicit_genres: [],
      themes: [
        {
          mal_id: 19,
          type: 'anime',
          name: 'Music',
          url: 'https://myanimelist.net/anime/genre/19/Music',
        },
      ],
      demographics: [
        {
          mal_id: 15,
          type: 'anime',
          name: 'Kids',
          url: 'https://myanimelist.net/anime/genre/15/Kids',
        },
      ],
    },
    {
      mal_id: 56624,
      url: 'https://myanimelist.net/anime/56624/Araburu_Kisetsu_no_Otome-domo_yo__Mini_Anime',
      images: {
        jpg: {
          image_url: 'https://cdn.myanimelist.net/images/anime/1850/138437.jpg',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1850/138437t.jpg',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1850/138437l.jpg',
        },
        webp: {
          image_url:
            'https://cdn.myanimelist.net/images/anime/1850/138437.webp',
          small_image_url:
            'https://cdn.myanimelist.net/images/anime/1850/138437t.webp',
          large_image_url:
            'https://cdn.myanimelist.net/images/anime/1850/138437l.webp',
        },
      },
      trailer: {
        youtube_id: null,
        url: null,
        embed_url: null,
        images: {
          image_url: null,
          small_image_url: null,
          medium_image_url: null,
          large_image_url: null,
          maximum_image_url: null,
        },
      },
      approved: true,
      titles: [
        {
          type: 'Default',
          title: 'Araburu Kisetsu no Otome-domo yo. Mini Anime',
        },
      ],
      title: 'Araburu Kisetsu no Otome-domo yo. Mini Anime',
      title_english: null,
      title_japanese: null,
      title_synonyms: [],
      type: 'ONA',
      source: 'Other',
      episodes: 42,
      status: 'Finished Airing',
      airing: false,
      aired: {
        from: '2019-05-20T00:00:00+00:00',
        to: '2019-09-26T00:00:00+00:00',
        prop: {
          from: {
            day: 20,
            month: 5,
            year: 2019,
          },
          to: {
            day: 26,
            month: 9,
            year: 2019,
          },
        },
        string: 'May 20, 2019 to Sep 26, 2019',
      },
      duration: '35 sec per ep',
      rating: 'PG-13 - Teens 13 or older',
      score: 5.71,
      scored_by: 122,
      rank: 11303,
      popularity: 16808,
      members: 511,
      favorites: 0,
      synopsis:
        'Mini anime released on the official Twitter account of main series.',
      background: '',
      season: null,
      year: null,
      broadcast: {
        day: null,
        time: null,
        timezone: null,
        string: null,
      },
      producers: [],
      licensors: [],
      studios: [
        {
          mal_id: 2071,
          type: 'anime',
          name: 'AQUA ARIS',
          url: 'https://myanimelist.net/anime/producer/2071/AQUA_ARIS',
        },
      ],
      genres: [
        {
          mal_id: 4,
          type: 'anime',
          name: 'Comedy',
          url: 'https://myanimelist.net/anime/genre/4/Comedy',
        },
      ],
      explicit_genres: [],
      themes: [],
      demographics: [],
    },
  ],
};

@Injectable({ providedIn: 'root' })
export class AnimeService {
  constructor(private _httpClient: HttpClient) {}

  getAnimes(): Observable<IProductCard[]> {
    /* return this._httpClient
      .get<IResponseAnime>('https://api.jikan.moe/v4/anime?q=kimetsu&sfw')
      .pipe(
        map((response) => {
          return response.data
            .filter((item) => item.synopsis)
            .map<IProductCard>((item) => ({
              urlImage: item.images.jpg.image_url,
              price: this._getNumberRandom(),
              name: item.title,
              description: item.synopsis!,
            }));
        })
      ); */

    return of(FAKE_DATA).pipe(
      map((response) => {
        return response.data
          .filter((item) => item.synopsis)
          .map<IProductCard>((item) => ({
            urlImage: item.images.jpg.image_url,
            price: this._getNumberRandom(),
            name: item.title,
            description: item.synopsis!,
          }));
      })
    );
  }

  private _getNumberRandom() {
    return Math.floor(Math.random() * (500 - 1 + 1) + 1);
  }
}
