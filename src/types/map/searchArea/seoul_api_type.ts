/**
 * @explain 서울시 주요 산책로 api type
    AREA; //부지 면적
  GUIDANCE; // 안내도
  G_LATITUDE; // Y좌표(GRS80TM)
  G_LONGITUDE; //X좌표(GRS80TM)
  LATITUDE; // Y좌표(WGS84)
  LONGITUDE; //X좌표(WGS84)
  MAIN_EQUIP; // 주요시설
  MAIN_PLANTS; // 주요식물
  OPEN_DT; // 개원일
  P_ADDR; // 주소
  P_ADMINTEL; //전화번호
  P_IDX; // 연번(공원번호)
  P_IMG; // 이미지
  P_LIST_CONTENT; // 공원개요
  P_NAME; // 관리부서
  P_PARK; // 공원명
  P_ZONE; // 지역
  TEMPLATE_URL; // 홈페이지 바로가기 url
  USE_REFER; // 이용시 참고사항
  VISIT_ROAD; // 오시는길
 */

export interface I_SearchParkInfoService {
  [key: string]: unknown;
  row: I_SeoulWalkAPi[];
}
export interface I_SeoulWalkAPi {
  AREA: string; //부지 면적
  GUIDANCE: string; // 안내도
  G_LATITUDE: string; // Y좌표(GRS80TM)
  G_LONGITUDE: string; //X좌표(GRS80TM)
  LATITUDE: string; // Y좌표(WGS84)
  LONGITUDE: string; //X좌표(WGS84)
  MAIN_EQUIP: string; // 주요시설
  MAIN_PLANTS: string; // 주요식물
  OPEN_DT: string; // 개원일
  P_ADDR: string; // 주소
  P_ADMINTEL: string; //전화번호
  P_IDX: string; // 연번(공원번호)
  P_IMG: string; // 이미지
  P_LIST_CONTENT: string; // 공원개요
  P_NAME: string; // 관리부서
  P_PARK: string; // 공원명
  P_ZONE: string; // 지역
  TEMPLATE_URL: string; // 홈페이지 바로가기 url
  USE_REFER: string; // 이용시 참고사항
  VISIT_ROAD: string; // 오시는길
}
/**
 * @explain
 * APVPERMYMD: string; // id
 * BPLCNM: string; // 상호명
 * RDNWHLADDR: string; //도로명
 * SITETEL: string; // 전화번호
 * X: string; // x축
 * Y: string; // y축
 */
export interface I_SeoulAnimalMedicineAPI {
  APVCANCELYMD: string;
  APVPERMYMD: string; // id
  BPLCNM: string; // 상호명
  CLGENDDT: string;
  CLGSTDT: string;
  DCBYMD: string;
  DTLSTATEGBN: string;
  DTLSTATENM: string;
  LASTMODTS: string;
  LINDJOBGBNNM: string;
  LINDPRCBGBNNM: string;
  LINDSEQNO: string;
  MGTNO: string;
  OPNSFTEAMCODE: string;
  RDNPOSTNO: string;
  RDNWHLADDR: string; //도로명
  RGTMBDSNO: string;
  ROPNYMD: string;
  SITEAREA: string;
  SITEPOSTNO: string;
  SITETEL: string; // 전화번호
  SITEWHLADDR: string;
  TOTEPNUM: string;
  TRDSTATEGBN: string;
  TRDSTATENM: string;
  UPDATEDT: string;
  UPDATEGBN: string;
  UPTAENM: string;
  X: string; // x축
  Y: string; // y축
}
