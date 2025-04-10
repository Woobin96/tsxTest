// src/readExcel.ts
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';

/**
 * 엑셀 파일 읽고 2차원 배열로 리턴
 */
export const readExcelData = async (): Promise<string[][]> => {
  try {
    const path = `${RNFS.DocumentDirectoryPath}/HWDAY.xlsx`;

    // 파일이 존재하는지 확인
    const exists = await RNFS.exists(path);
    if (!exists) {
      console.warn('❗ 엑셀 파일이 앱 내 문서 폴더에 존재하지 않음.');
      return [];
    }

    // 파일 읽기 (base64로)
    const fileContent = await RNFS.readFile(path, 'base64');

    // XLSX로 파싱
    const workbook = XLSX.read(fileContent, { type: 'base64' });

    // 첫 번째 시트만 사용
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // JSON 형식으로 변환 (시트 -> 배열)
    const rows: string[][] = XLSX.utils.sheet_to_json(sheet, {
      header: 1, // 2차원 배열 형식
      blankrows: false,
    });

    return rows;
  } catch (err) {
    console.error('❌ 엑셀 파일 로딩 중 에러:', err);
    return [];
  }
};
