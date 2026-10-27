export interface ArchiveSource {
  label: string;
  publisher: string;
  url: string;
  primary?: boolean;
}

export interface ArchiveVideo {
  id: string;
  label: string;
  start?: number;
}

export interface ArchiveImage {
  src: string;
  alt: string;
  local?: boolean;
}

export type ArchiveMedia =
  | {
      kind: "youtube";
      videos: ArchiveVideo[];
      credit: string;
    }
  | {
      kind: "image";
      images: ArchiveImage[];
      credit: string;
      creditUrl?: string;
      license?: string;
      licenseUrl?: string;
      contain?: boolean;
    }
  | {
      kind: "stat";
      eyebrow: string;
      value: string;
      label: string;
      note: string;
    };

export interface ArchiveItem {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  roleLead: string;
  role: string;
  media: ArchiveMedia;
  sources: ArchiveSource[];
}

export const archiveItems: ArchiveItem[] = [
  {
    id: "stadium-2023",
    date: "2023-11-18",
    category: "LEADERSHIP",
    title: "STadium: from visit to full participation",
    summary:
      "KENTECH's student council and about 20 students visited STadium, the sports exchange among Korea's five science and technology universities. The visit led to preparations for KENTECH to join formally.",
    roleLead: "As student council president,",
    role:
      "As student council president, I led the visit to STadium and prepared for KENTECH to take part officially from 2024.",
    // Keep this image unmodified and non-commercial under CC BY-NC-ND 4.0.
    media: {
      kind: "image",
      images: [
        {
          src: "images/archive/stadium-donghyeok-kim.jpg",
          alt: "Donghyeok Kim, president of the 2nd KENTECH Student Council, at STadium",
          local: true,
        },
      ],
      credit: "Photo: Kwon Dae-hyun · DGIST DNA",
      creditUrl: "https://dgistdna.com/763",
      license: "CC BY-NC-ND 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      contain: true,
    },
    sources: [
      {
        label: "Article",
        publisher: "DGIST DNA",
        url: "https://dgistdna.com/763",
        primary: true,
      },
    ],
  },
  {
    id: "renew-art-2023",
    date: "2023-09-26",
    category: "ART",
    title: "Renew ART mural project",
    summary:
      "Faculty, students and artists painted the “Energyverse Timepiece” mural together in the underground bunker of the Tesla Community Center, capturing KENTECH's research fields and the spirit of collaboration.",
    roleLead: "As a member of the first class,",
    role:
      "As a member of the first class, I made the mural with faculty, students and artists, putting KENTECH's five research tracks and the school's beginning into the space.",
    media: {
      kind: "youtube",
      videos: [
        {
          id: "i4jjT7s1qW4",
          label: "Renew ART project",
          start: 186,
        },
      ],
      credit: "KENTECH",
    },
    sources: [
      {
        label: "Video",
        publisher: "KENTECH",
        url: "https://www.youtube.com/watch?v=i4jjT7s1qW4",
        primary: true,
      },
    ],
  },
  {
    id: "naju-pear-2023",
    date: "2023-09-25",
    category: "LEADERSHIP",
    title: "129 boxes of Naju pears",
    summary:
      "KENTECH's 2nd student council organized a group purchase of 129 boxes of Naju pears, helping local farms find buyers.",
    roleLead: "As student council president,",
    role:
      "As student council president, I planned the group purchase. I wanted to create more ways for the university and the region to work together.",
    media: {
      kind: "image",
      images: [
        {
          src: "images/archive/naju-pear-community.webp",
          alt: "Four KENTECH students holding pears in a Naju pear orchard",
          local: true,
        },
      ],
      credit: "Photo: KENTECH press release",
      creditUrl:
        "https://kentech.ac.kr/detail.do?board_seq=5990&menuurl=ewqEXIJgqdAxm80DGyH78g%3D%3D",
    },
    sources: [
      {
        label: "Press release",
        publisher: "KENTECH",
        url: "https://kentech.ac.kr/detail.do?board_seq=5990&menuurl=ewqEXIJgqdAxm80DGyH78g%3D%3D",
        primary: true,
      },
      {
        label: "Coverage",
        publisher: "Energy Economic News",
        url: "https://m.ekn.kr/view.php?key=20230925010007252",
      },
      {
        label: "Photo 1",
        publisher: "KENTECH",
        url: "https://kentech.ac.kr/file/imageSrc.do?sfn=20230925110534224_%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C%EB%B0%B0%ED%8F%AC%EC%82%AC%EC%A7%841.jpg&contentType=image/jpeg&ofn=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C%EB%B0%B0%ED%8F%AC%EC%82%AC%EC%A7%841.jpg",
      },
      {
        label: "Photo 2",
        publisher: "KENTECH",
        url: "https://kentech.ac.kr/file/imageSrc.do?sfn=20230925110549547_%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C%EB%B0%B0%ED%8F%AC%EC%82%AC%EC%A7%842.jpg&contentType=image/jpeg&ofn=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C%EB%B0%B0%ED%8F%AC%EC%82%AC%EC%A7%842.jpg",
      },
    ],
  },
  {
    id: "specialized-university-interview-2023",
    date: "2023-09-13",
    category: "PROFILE",
    title: "Why I chose KENTECH, and what's next",
    summary:
      "An interview with students at Korea's science and technology universities on why they chose their school, admissions, classes, and future plans.",
    roleLead: "As a member of the first class,",
    role:
      "As a member of the first class, I talked about why I chose KENTECH, my admissions interview, a power grid project, and the environment and energy startup I hoped to build.",
    media: {
      kind: "image",
      images: [
        {
          src: "images/donghyeok-kim-cutout.webp",
          alt: "Portrait of Donghyeok Kim",
          local: true,
        },
      ],
      credit: "Donghyeok Kim",
      contain: true,
    },
    sources: [
      {
        label: "Interview",
        publisher: "Naeil News · Naeil Education",
        url: "https://www.naeil.com/news/read/473516",
        primary: true,
      },
      {
        label: "Press index",
        publisher: "KENTECH",
        url: "https://kentech.ac.kr/submenu.do?boardid=77&categoryid=203&menuurl=O3k95AMLmcQ0%2BynBFWcOnQ%3D%3D&pageNo=1&searchNo=1&searchtext=%EA%B9%80%EB%8F%99%ED%98%81&siteName=AD",
      },
    ],
  },
  {
    id: "summer-campus-2023",
    date: "2023-08-29",
    category: "LEADERSHIP",
    title: "Summer break, and 84% of students stayed",
    summary:
      "Even over summer break, 84% of students stayed in the dorms, joining some 20 programs including undergraduate research, summer session, startups and residential college.",
    roleLead: "As student council president in my second year,",
    role:
      "As student council president in my second year, I shared how students stayed on campus over the break to do research and take part in programs.",
    media: {
      kind: "image",
      images: [
        {
          src: "images/archive/summer-campus-energyverse.webp",
          alt: "KENTECH members gathered around the Energyverse board game",
          local: true,
        },
      ],
      credit: "Photo: KENTECH press release",
      creditUrl:
        "https://kentech.ac.kr/detail.do?board_seq=5871&menuurl=ewqEXIJgqdAxm80DGyH78g%3D%3D",
    },
    sources: [
      {
        label: "Press release",
        publisher: "KENTECH",
        url: "https://kentech.ac.kr/detail.do?board_seq=5871&menuurl=ewqEXIJgqdAxm80DGyH78g%3D%3D",
        primary: true,
      },
      {
        label: "Coverage",
        publisher: "Money Today",
        url: "https://www.mt.co.kr/policy/2023/08/29/2023082914035359949",
      },
      {
        label: "Coverage",
        publisher: "Veritas Alpha",
        url: "https://www.veritas-a.com/news/articleView.html?idxno=470401",
      },
      {
        label: "Coverage",
        publisher: "Hwasun Global News",
        url: "https://m.hsgnews.kr/article.php?aid=310321794",
      },
      {
        label: "Coverage",
        publisher: "Nate News",
        url: "https://news.nate.com/view/20230829n21464",
      },
    ],
  },
  {
    id: "plogging-marathon-2023",
    date: "2023-04-04",
    category: "COMMUNITY",
    title: "From morning workouts to a plogging marathon",
    summary:
      "About 20 KENTECH students ran the Naju Yeongsan River Marathon, picking up litter along the course as plogging volunteers.",
    roleLead: "With fellow student Hwang Eui-hyun,",
    role:
      "With fellow student Hwang Eui-hyun, I started a morning exercise program. We ran the marathon with other students and volunteered as ploggers.",
    media: {
      kind: "image",
      images: [
        {
          src: "images/archive/plogging-marathon.webp",
          alt: "KENTECH students and staff at the 9th Naju Yeongsan River Marathon",
          local: true,
        },
      ],
      credit: "Photo: KENTECH press release",
      creditUrl:
        "https://kentech.ac.kr/detail.do?board_seq=5598&menuurl=ewqEXIJgqdAxm80DGyH78g%3D%3D",
    },
    sources: [
      {
        label: "Press release",
        publisher: "KENTECH",
        url: "https://kentech.ac.kr/detail.do?board_seq=5598&menuurl=ewqEXIJgqdAxm80DGyH78g%3D%3D",
        primary: true,
      },
      {
        label: "Photo",
        publisher: "KENTECH",
        url: "https://kentech.ac.kr/file/imageSrc.do?sfn=20230404093326089_%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C+%EB%B0%B0%ED%8F%AC%EC%82%AC%EC%A7%84+%28111.jpg&contentType=image/jpeg&ofn=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C+%EB%B0%B0%ED%8F%AC%EC%82%AC%EC%A7%84+%28111.jpg",
      },
    ],
  },
  {
    id: "energyverse-2023",
    date: "2023-01-16",
    category: "EDUCATION",
    title: "Energyverse, from 1.0 to 2.0",
    summary:
      "A KENTECH course project that teaches how five energy tracks and their technologies connect, through a board game. First-class students improved it into versions 1.5 and 2.0.",
    roleLead: "With six classmates from the first class,",
    role:
      "With six classmates from the first class, I revised Energyverse 1.0 — above all, writing the story it didn't have. The project went on to 2.0.",
    media: {
      kind: "youtube",
      videos: [
        {
          id: "-MUbpHzbKB8",
          label: "Energyverse 1.5",
          start: 186,
        },
        {
          id: "9hCGDjEOShM",
          label: "Energyverse 2.0",
          start: 288,
        },
      ],
      credit: "KENTECH",
    },
    sources: [
      {
        label: "Video",
        publisher: "KENTECH · ver. 1.5",
        url: "https://www.youtube.com/watch?v=-MUbpHzbKB8",
        primary: true,
      },
      {
        label: "Follow-up",
        publisher: "KENTECH · ver. 2.0",
        url: "https://www.youtube.com/watch?v=9hCGDjEOShM",
      },
    ],
  },
  {
    id: "kentech-opening-2022",
    date: "2022-03-03",
    category: "INTERVIEW",
    title: "Interview as a KENTECH freshman",
    summary:
      "Yonhap News TV's report from KENTECH's opening day, covering the first freshmen's hopes and the challenges ahead for the new university.",
    roleLead: "As a freshman in the first class,",
    role:
      "As a freshman in the first class, I spoke about the future of the energy industry and the school we would build together.",
    media: {
      kind: "youtube",
      videos: [
        {
          id: "v_R2ziY8GtI",
          label: "Yonhap News TV interview",
          start: 62,
        },
      ],
      credit: "Yonhap News TV",
    },
    sources: [
      {
        label: "Video",
        publisher: "Yonhap News TV",
        url: "https://www.youtube.com/watch?v=v_R2ziY8GtI",
        primary: true,
      },
      {
        label: "Article",
        publisher: "Nate News",
        url: "https://news.nate.com/view/20220303n10334",
      },
    ],
  },
];
