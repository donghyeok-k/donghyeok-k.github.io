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
  role: string;
  media: ArchiveMedia;
  sources: ArchiveSource[];
}

export const archiveItems: ArchiveItem[] = [
  {
    id: "stadium-2023",
    date: "2023-11-18",
    category: "LEADERSHIP",
    title: "KENTECH의 STadium 합류를 준비하다",
    summary:
      "다섯 과학기술특성화대 체육 교류전 STadium을 KENTECH 총학생회와 학생 20여 명이 참관하며 향후 정식 참여를 준비했다.",
    role:
      "김동혁은 제2대 총학생회장으로 교류전의 취지에 공감하고, 3기 신입생이 입학하는 2024년부터 정식 참여하겠다는 목표를 제시했다.",
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
    title: "에너지의 시간을 벽화로 만들다",
    summary:
      "교수·학생·작가가 테슬라커뮤니티센터 지하 벙커에 에너지 연구 분야와 협업의 의미를 담은 ‘Energyverse Timepiece’ 벽화를 완성했다.",
    role:
      "김동혁은 학부 1기 참여자로 교수·학생·작가와 협업해, KENTECH의 다섯 연구 트랙과 함께 만드는 역사를 공간에 표현했다.",
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
    title: "129상자의 나주배, 지역과 대학을 잇다",
    summary:
      "KENTECH 제2대 총학생회가 나주배 공동구매 129상자를 성사시켜 지역 농가의 판로 확보와 소득 증대를 지원한 상생 프로젝트다.",
    role:
      "김동혁은 총학생회장으로 대학과 지역사회의 상생을 목표로 공동구매를 기획하고, 교육·축제·문화 활동으로 협력을 넓히겠다고 밝혔다.",
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
    title: "최적화에서 환경·에너지 창업까지",
    summary:
      "과학기술특성화대 재학생들이 대학 선택, 합격 전략, 수업 경험과 진로 계획을 문답 형식으로 들려주는 장문 인터뷰다.",
    role:
      "김동혁은 1기로 KENTECH를 택한 이유, 게임이론·최적화 면접, 전력망 프로젝트와 환경·에너지 창업 구상을 밝혔다.",
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
    title: "방학에도 움직이는 캠퍼스의 목소리",
    summary:
      "여름방학에도 학생 84%가 기숙사에 머물며 학부연구·계절학기·창업·RC 등 20여 개 교육 프로그램에 참여한 캠퍼스 기록이다.",
    role:
      "김동혁은 2학년 총학생회장으로 학생들이 방학에도 나주에서 배우고 즐기며 알차게 지낸 학교생활의 분위기를 대표해 전했다.",
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
    title: "달리기와 봉사를 연결한 플로깅 프로젝트",
    summary:
      "KENTECH 재학생 20여 명이 나주영산강마라톤에 참가해 달리는 동안 쓰레기를 줍는 플로깅 봉사와 공동체 활동을 함께 진행했다.",
    role:
      "김동혁은 황의현 학생과 공대생의 생활 습관 개선과 활력을 위한 아침 운동 프로그램을 기획하고, 마라톤 참가를 목표로 세웠다.",
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
    title: "Energyverse를 1.0에서 2.0으로",
    summary:
      "에너지 5개 트랙과 기술 간 연관성을 보드게임으로 익히는 KENTECH 고유 교육 프로젝트가 버전 1.5와 2.0으로 발전한 과정이다.",
    role:
      "김동혁은 1기 학생 6인 팀의 일원으로, 교수진이 만든 Energyverse 1.0을 방학 동안 두 차례 개선해 2.0까지 발전시켰다.",
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
    title: "KENTECH 1기 신입생으로 시작",
    summary:
      "한국에너지공대가 첫 학부생 107명과 함께 개교하고, 에너지 분야 세계 10위 대학이라는 목표와 초기 과제를 알린 현장 보도다.",
    role:
      "김동혁은 1기 신입생 인터뷰에서 에너지 산업의 미래를 낙관하며, 학생들과 함께 좋은 학교를 만들겠다는 포부를 밝혔다.",
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
