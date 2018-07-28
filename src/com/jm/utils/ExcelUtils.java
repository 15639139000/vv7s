package com.jm.utils;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.VerticalAlignment;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Component;


/**
 * Excel 导入导出工具类
 * @author Administrator
 */
@Component
public class ExcelUtils<T> {

	@SuppressWarnings("deprecation")
	public static List<Map<String, Object>> importExcel(InputStream inputStream, String suffix)
	{
		Workbook workbook = null;
		List<Map<String, Object>> excelData = new ArrayList<Map<String, Object>>();
		try {
			if(suffix.equals(".xlsx")){
				workbook = new XSSFWorkbook(inputStream); // 2007
			}else if(suffix.equals(".xls")){
				workbook = new HSSFWorkbook(inputStream); // 2003
			}
			for(int i = 0; i < workbook.getNumberOfSheets(); i++){
				Sheet sheet = workbook.getSheetAt(i);
				if(sheet.getLastRowNum() > 0){
					int firstRowNum = sheet.getFirstRowNum();
					int lastRowNum = sheet.getLastRowNum();
					for(int j = firstRowNum + 2; j <= lastRowNum; j++){
						Map<String, Object> maps = new LinkedHashMap<String, Object>();
						Row row = sheet.getRow(j);
						short firstCellNum = row.getFirstCellNum();
						short lastCellNum = row.getLastCellNum();
						for(int k = firstCellNum; k < lastCellNum; k++){
							Cell cell = sheet.getRow(j).getCell(k);
							if(cell == null){
								maps.put(String.valueOf(j), "NULL");
							}else{
								switch (cell.getCellType()) {
								case Cell.CELL_TYPE_STRING:
									String stringValue = cell.getStringCellValue();
									maps.put(String.valueOf(k), stringValue);
									break;
								case Cell.CELL_TYPE_NUMERIC:
									if(DateUtil.isCellDateFormatted(cell)){
										Date dateValue = cell.getDateCellValue();
										maps.put(String.valueOf(k), dateValue);
									}else{
										double numberValue = cell.getNumericCellValue();
										maps.put(String.valueOf(k), numberValue);
									}
									break;
								case Cell.CELL_TYPE_FORMULA:
									String formulaValue = cell.getCellFormula();
									maps.put(String.valueOf(k), formulaValue);
									break;
								case Cell.CELL_TYPE_BOOLEAN:
									boolean booleanValue = cell.getBooleanCellValue();
									maps.put(String.valueOf(k), booleanValue);
									break;
								case Cell.CELL_TYPE_BLANK:
									maps.put(String.valueOf(k), "NULL");
									break;
								default:
									maps.put(String.valueOf(k), "ERROR");
									break;
								}
							}
						}
						excelData.add(maps);
					}
				}
			}
			return excelData;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}finally {
			try {
				if(inputStream != null){
					inputStream.close();
				}
				if(workbook != null){
					workbook.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	public static void exportExcel(OutputStream outputStream, String title, List<Map<String, Object>> dataLists, Object ... captions)
	{
		Workbook workbook = null;
		try {
			workbook = new XSSFWorkbook(); //创建工作簿
			Sheet sheet = workbook.createSheet(); // 创建工作表
			Row rowTitle = sheet.createRow(0); // 创建标题行
			rowTitle.setHeightInPoints(50); // 设置高度
			Cell cell = rowTitle.createCell(0); // 创建列
			cell.setCellValue(title); // 设置标题
			setColumnTitileStyle(workbook, cell); // 设置样式
			sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, captions.length -1)); // 合并单元格(first-row, last-row, first-column, last-column)
			
			Row rowCaption = sheet.createRow(1); // 创建表头
			rowCaption.setHeightInPoints(35); // 设置高度
			for (int i = 0; i < captions.length; i++) { // 循环添加表头列
				Cell cellColumn = rowCaption.createCell(i);
				cellColumn.setCellValue(String.valueOf(captions[i]));
				setColumnCaptionStyle(workbook, cellColumn);
				sheet.setColumnWidth(i, 4466); // 设置列宽
			}
			
			for (int i = 0; i < dataLists.size(); i++) {
				Row rowData = sheet.createRow(i + 2); // 创建数据行
				rowData.setHeightInPoints(25);
				Map<String, Object> maps = dataLists.get(i);
				for(Entry<String, Object> entry : maps.entrySet()){
					Cell cellData = rowData.createCell(Integer.valueOf(entry.getKey()) - 1);
					cellData.setCellValue(String.valueOf(entry.getValue()));
					setColumnDataStyle(workbook, cellData);
					sheet.setColumnWidth(i, 4466); // 设置列宽
				}
			}
			workbook.write(outputStream);
			outputStream.flush();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if(workbook != null){
					workbook.close();
				}
				if(outputStream != null){
					outputStream.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	public static void setColumnTitileStyle(Workbook workbook, Cell cell)
	{
		CellStyle cellStyle = workbook.createCellStyle();
		Font fontStyle = workbook.createFont();
		cellStyle.setAlignment(HorizontalAlignment.CENTER);; // 设置水平居中
//		cellStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND); // 填充颜色
		cellStyle.setVerticalAlignment(VerticalAlignment.CENTER); // 设置垂直居中
//		cellStyle.setFillForegroundColor(IndexedColors.BRIGHT_GREEN1.index); // 设置背景色
		fontStyle.setFontName("宋体"); // 宋体
		fontStyle.setBold(true); // 加粗
		fontStyle.setFontHeightInPoints((short) 22); // 大小
//		fontStyle.setColor(IndexedColors.BLACK.index); // 字体颜色
		cellStyle.setFont(fontStyle); // 应用字体样式
		cell.setCellStyle(cellStyle); // 应用列样式
	}
	
	public static void setColumnCaptionStyle(Workbook workbook, Cell cell)
	{
		CellStyle cellStyle = workbook.createCellStyle();
		Font fontStyle = workbook.createFont();
		cellStyle.setAlignment(HorizontalAlignment.CENTER);; // 设置水平居中
		cellStyle.setVerticalAlignment(VerticalAlignment.CENTER); // 设置垂直居中
		cellStyle.setBorderTop(BorderStyle.THIN);
		cellStyle.setTopBorderColor(IndexedColors.BLACK.index);
		cellStyle.setBorderBottom(BorderStyle.THIN);
		cellStyle.setBottomBorderColor(IndexedColors.BLACK.index);
		cellStyle.setBorderLeft(BorderStyle.THIN);
		cellStyle.setLeftBorderColor(IndexedColors.BLACK.index);
		cellStyle.setBorderRight(BorderStyle.THIN);
		cellStyle.setRightBorderColor(IndexedColors.BLACK.index);
		fontStyle.setFontName("宋体"); // 宋体
		fontStyle.setBold(true); // 加粗
		fontStyle.setFontHeightInPoints((short) 18); // 大小
		cellStyle.setFont(fontStyle); // 应用字体样式
		cell.setCellStyle(cellStyle); // 应用列样式
	}
	
	public static void setColumnDataStyle(Workbook workbook, Cell cell)
	{
		CellStyle cellStyle = workbook.createCellStyle();
		Font fontStyle = workbook.createFont();
		cellStyle.setAlignment(HorizontalAlignment.CENTER);
		cellStyle.setVerticalAlignment(VerticalAlignment.CENTER); 
		cellStyle.setBorderTop(BorderStyle.THIN);
		cellStyle.setTopBorderColor(IndexedColors.BLACK.index);
		cellStyle.setBorderBottom(BorderStyle.THIN);
		cellStyle.setBottomBorderColor(IndexedColors.BLACK.index);
		cellStyle.setBorderLeft(BorderStyle.THIN);
		cellStyle.setLeftBorderColor(IndexedColors.BLACK.index);
		cellStyle.setBorderRight(BorderStyle.THIN);
		cellStyle.setRightBorderColor(IndexedColors.BLACK.index);
		fontStyle.setFontName("宋体"); 
		fontStyle.setFontHeightInPoints((short) 15); 
		cellStyle.setFont(fontStyle); 
		cell.setCellStyle(cellStyle); 
	}
	
}