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
    title: "STadium 참관과 정식 참여 준비",
    summary:
      "다섯 과학기술특성화대가 모인 체육 교류전 STadium을 KENTECH 총학생회와 학생 20여 명이 참관했다. 이 방문을 계기로 정식 참여를 준비했다.",
    roleLead: "제2대 총학생회장 때",
    role:
      "제2대 총학생회장 때 STadium 현장을 찾았다. 2024년부터 KENTECH가 정식으로 참여할 수 있도록 준비했다.",
    // Keep this image unmodified and non-commercial under CC BY-NC-ND 4.0.
    media: {
      kind: "image",
      images: [
        {
          src: "images/archive/stadium-donghyeok-kim.jpg",
          alt: "STadium 행사장에서 촬영된 김동혁 KENTECH 제2대 총학생회장",
          local: true,
        },
      ],
      credit: "사진 권대현 기자 · DGIST신문 DNA",
      creditUrl: "https://dgistdna.com/763",
      license: "CC BY-NC-ND 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      contain: true,
    },
    sources: [
      {
        label: "원문 기사",
        publisher: "DGIST신문 DNA",
        url: "https://dgistdna.com/763",
        primary: true,
      },
    ],
  },
  {
    id: "renew-art-2023",
    date: "2023-09-26",
    category: "ART",
    title: "Renew ART 벽화 프로젝트",
    summary:
      "교수·학생·작가가 테슬라커뮤니티센터 지하 벙커에 ‘Energyverse Timepiece’ 벽화를 함께 만들었다. 에너지 연구 분야와 협업의 의미를 담은 작업이다.",
    roleLead: "학부 1기 때",
    role:
      "학부 1기 때 교수·학생·작가와 벽화를 함께 만들었다. KENTECH의 다섯 연구 트랙과 학교의 시작을 공간에 담았다.",
    media: {
      kind: "youtube",
      videos: [
        {
          id: "i4jjT7s1qW4",
          label: "Renew ART 프로젝트",
          start: 186,
        },
      ],
      credit: "한국에너지공과대학교 KENTECH",
    },
    sources: [
      {
        label: "공식 영상",
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
    title: "나주배 129상자 공동구매",
    summary:
      "KENTECH 제2대 총학생회가 나주배 129상자를 공동구매해 지역 농가의 판로를 도왔다.",
    roleLead: "총학생회장 때",
    role:
      "총학생회장 때 나주배 공동구매를 기획했다. 대학과 지역이 함께할 수 있는 일을 더 만들고 싶었다.",
    media: {
      kind: "stat",
      eyebrow: "LOCAL PARTNERSHIP",
      value: "129",
      label: "상자의 나주배 공동구매",
      note: "지역 농가의 판로와 대학 공동체를 연결한 학생 주도 프로젝트",
    },
    sources: [
      {
        label: "공식 보도자료",
        publisher: "KENTECH",
        url: "https://kentech.ac.kr/detail.do?board_seq=5990&menuurl=ewqEXIJgqdAxm80DGyH78g%3D%3D",
        primary: true,
      },
      {
        label: "관련 보도",
        publisher: "에너지경제",
        url: "https://m.ekn.kr/view.php?key=20230925010007252",
      },
      {
        label: "배포 사진 1",
        publisher: "KENTECH",
        url: "https://kentech.ac.kr/file/imageSrc.do?sfn=20230925110534224_%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C%EB%B0%B0%ED%8F%AC%EC%82%AC%EC%A7%841.jpg&contentType=image/jpeg&ofn=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C%EB%B0%B0%ED%8F%AC%EC%82%AC%EC%A7%841.jpg",
      },
      {
        label: "배포 사진 2",
        publisher: "KENTECH",
        url: "https://kentech.ac.kr/file/imageSrc.do?sfn=20230925110549547_%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C%EB%B0%B0%ED%8F%AC%EC%82%AC%EC%A7%842.jpg&contentType=image/jpeg&ofn=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C%EB%B0%B0%ED%8F%AC%EC%82%AC%EC%A7%842.jpg",
      },
    ],
  },
  {
    id: "specialized-university-interview-2023",
    date: "2023-09-13",
    category: "PROFILE",
    title: "KENTECH를 선택한 이유와 앞으로의 계획",
    summary:
      "과학기술특성화대 재학생들이 대학을 선택한 이유, 입시 경험, 수업과 앞으로의 진로에 관해 답한 인터뷰다.",
    roleLead: "KENTECH 1기로",
    role:
      "KENTECH 1기로 학교를 선택한 이유와 면접 경험, 전력망 프로젝트, 앞으로 해보고 싶은 환경·에너지 창업 이야기를 나눴다.",
    media: {
      kind: "image",
      images: [
        {
          src: "images/donghyeok-kim-cutout.webp",
          alt: "김동혁 인물 사진",
          local: true,
        },
      ],
      credit: "Donghyeok Kim",
      contain: true,
    },
    sources: [
      {
        label: "인터뷰 원문",
        publisher: "내일신문·내일교육",
        url: "https://www.naeil.com/news/read/473516",
        primary: true,
      },
      {
        label: "공식 보도 색인",
        publisher: "KENTECH",
        url: "https://kentech.ac.kr/submenu.do?boardid=77&categoryid=203&menuurl=O3k95AMLmcQ0%2BynBFWcOnQ%3D%3D&pageNo=1&searchNo=1&searchtext=%EA%B9%80%EB%8F%99%ED%98%81&siteName=AD",
      },
    ],
  },
  {
    id: "summer-campus-2023",
    date: "2023-08-29",
    category: "LEADERSHIP",
    title: "여름방학, 학생 84%가 학교에 남았다",
    summary:
      "여름방학에도 학생 84%가 기숙사에 머물렀다. 학생들은 학부연구·계절학기·창업·RC 등 20여 개 프로그램에 참여했다.",
    roleLead: "2학년 총학생회장 때",
    role:
      "2학년 총학생회장 때 방학에도 학교에 남아 연구하고 활동하던 학생들의 모습을 전했다.",
    media: {
      kind: "stat",
      eyebrow: "THE CAMPUS IN SUMMER",
      value: "84%",
      label: "방학 중 기숙사 체류 학생",
      note: "학부연구·계절학기·창업·RC 등 20여 개 프로그램",
    },
    sources: [
      {
        label: "공식 보도자료",
        publisher: "KENTECH",
        url: "https://kentech.ac.kr/detail.do?board_seq=5871&menuurl=ewqEXIJgqdAxm80DGyH78g%3D%3D",
        primary: true,
      },
      {
        label: "관련 보도",
        publisher: "머니투데이",
        url: "https://www.mt.co.kr/policy/2023/08/29/2023082914035359949",
      },
      {
        label: "관련 보도",
        publisher: "베리타스알파",
        url: "https://www.veritas-a.com/news/articleView.html?idxno=470401",
      },
      {
        label: "관련 보도",
        publisher: "화순글로벌뉴스",
        url: "https://m.hsgnews.kr/article.php?aid=310321794",
      },
      {
        label: "관련 보도",
        publisher: "네이트",
        url: "https://news.nate.com/view/20230829n21464",
      },
    ],
  },
  {
    id: "plogging-marathon-2023",
    date: "2023-04-04",
    category: "COMMUNITY",
    title: "아침 운동에서 플로깅 마라톤까지",
    summary:
      "KENTECH 학생 20여 명이 나주영산강마라톤에 참가했다. 달리면서 쓰레기를 줍는 플로깅 봉사도 함께했다.",
    roleLead: "황의현 학생과",
    role:
      "황의현 학생과 아침 운동 프로그램을 만들었다. 학생들과 마라톤에 참가하고 플로깅 봉사도 했다.",
    media: {
      kind: "stat",
      eyebrow: "RUN · PICK · CONNECT",
      value: "20+",
      label: "학생이 함께 달린 플로깅",
      note: "아침 운동에서 마라톤과 환경 봉사로 이어진 공동체 프로젝트",
    },
    sources: [
      {
        label: "공식 보도자료",
        publisher: "KENTECH",
        url: "https://kentech.ac.kr/detail.do?board_seq=5598&menuurl=ewqEXIJgqdAxm80DGyH78g%3D%3D",
        primary: true,
      },
      {
        label: "배포 사진",
        publisher: "KENTECH",
        url: "https://kentech.ac.kr/file/imageSrc.do?sfn=20230404093326089_%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C+%EB%B0%B0%ED%8F%AC%EC%82%AC%EC%A7%84+%28111.jpg&contentType=image/jpeg&ofn=%EB%B3%B4%EB%8F%84%EC%9E%90%EB%A3%8C+%EB%B0%B0%ED%8F%AC%EC%82%AC%EC%A7%84+%28111.jpg",
      },
    ],
  },
  {
    id: "energyverse-2023",
    date: "2023-01-16",
    category: "EDUCATION",
    title: "Energyverse 1.0에서 2.0까지",
    summary:
      "에너지 5개 트랙과 기술의 연결을 보드게임으로 배우는 KENTECH 수업 프로젝트다. 1기 학생들이 버전 1.5와 2.0을 만들며 내용을 보완했다.",
    roleLead: "1기 학생 6명과",
    role:
      "1기 학생 6명과 Energyverse 1.0을 고쳤다. 특히 없던 스토리를 새로 만들었고, 프로젝트는 2.0까지 이어졌다.",
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
      credit: "한국에너지공과대학교 KENTECH",
    },
    sources: [
      {
        label: "공식 영상",
        publisher: "KENTECH · ver.1.5",
        url: "https://www.youtube.com/watch?v=-MUbpHzbKB8",
        primary: true,
      },
      {
        label: "후속 영상",
        publisher: "KENTECH · ver.2.0",
        url: "https://www.youtube.com/watch?v=9hCGDjEOShM",
      },
    ],
  },
  {
    id: "kentech-opening-2022",
    date: "2022-03-03",
    category: "INTERVIEW",
    title: "KENTECH 1기 신입생 인터뷰",
    summary:
      "한국에너지공대가 문을 연 날, 1기 신입생의 기대와 대학이 풀어야 할 과제를 함께 담은 연합뉴스TV 보도다.",
    roleLead: "1기 신입생으로",
    role:
      "1기 신입생으로 인터뷰에 참여해 에너지 산업의 미래와 학생들이 함께 만들어갈 학교에 대한 기대를 이야기했다.",
    media: {
      kind: "youtube",
      videos: [
        {
          id: "v_R2ziY8GtI",
          label: "연합뉴스TV 인터뷰",
          start: 62,
        },
      ],
      credit: "연합뉴스TV",
    },
    sources: [
      {
        label: "영상 원문",
        publisher: "연합뉴스TV",
        url: "https://www.youtube.com/watch?v=v_R2ziY8GtI",
        primary: true,
      },
      {
        label: "기사 전문",
        publisher: "네이트 뉴스",
        url: "https://news.nate.com/view/20220303n10334",
      },
    ],
  },
];
