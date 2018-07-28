package com.jm.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

@Component
public class DownLoad {

	public static void downLoad(HttpServletRequest request, HttpServletResponse response, String fileName, FileOutputStream fileOutputStream, List<Map<String, Object>> dataLists, Object ... objects) throws IOException {
		// 保存到服务器
		String realPath = request.getSession().getServletContext().getRealPath("/activiti/xlsx/");
		File uploadFile = new File(realPath + File.separator + fileName);
		fileOutputStream = new FileOutputStream(uploadFile);
		ExcelUtils.exportExcel(fileOutputStream, fileName.substring(0, fileName.indexOf(".")), dataLists, objects);

		// 执行下载
		File downloadFile = new File(realPath + File.separator + fileName);
		@SuppressWarnings("resource")
		FileInputStream fileInputStream = new FileInputStream(downloadFile);
		byte[] body = new byte[fileInputStream.available()];
		fileInputStream.read(body);
		response.setContentType("application/vnd.ms-excel");
		String userAgent = request.getHeader("user-agent").toLowerCase();
		if (userAgent.contains("msie") || userAgent.contains("like gecko")) { // 处理IE下文件名称乱码
			fileName = URLEncoder.encode(fileName, "UTF-8");
		} else {
			fileName = new String(fileName.getBytes("UTF-8"), "ISO-8859-1"); // 解决丢失后缀问题
		}
		response.addHeader("Content-Disposition", "attachment;filename=" + fileName);
		response.setContentLength(body.length);
		ServletOutputStream outputStream = response.getOutputStream();
		outputStream.write(body);
	}

}
