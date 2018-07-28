package com.jm.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.github.pagehelper.PageInfo;
import com.jm.entity.News;
import com.jm.service.NewsService;
import com.jm.utils.RandomUtils;

@Controller
@RequestMapping(value = "news")
public class NewsController {

	@Lazy
	@Autowired
	private NewsService newsService;
	
	@RequestMapping(value = "getNewsById", method = RequestMethod.GET, produces = "application/json;charset=utf-8")
	public String getNewsById(@RequestParam(value = "newsId") Integer newsId,Model model)
	{
		News news = newsService.getNewsById(newsId);
		model.addAttribute("news",news);
		return "newsDetail";
	}
	
	@ResponseBody
	@RequestMapping(value = "getAll", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public PageInfo<News> getAll(@RequestParam(value = "pageNo", required = false, defaultValue = "1") Integer pageNo,Integer num)
	{
		return newsService.getAll(pageNo,num);
	}
	
	@ResponseBody
	@RequestMapping(value = "getNewsByDate", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public List<News> getNewsByDate()
	{
		return newsService.getNewsByDate();
	}
	
	@ResponseBody
	@RequestMapping(value = "editNewsById", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer editNewsById(News news)
	{
		return newsService.editNewsById(news);
	}
	
	@ResponseBody
	@RequestMapping(value = "delNewsById", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer delNewsById(@RequestParam(value = "newsId") Integer newsId)
	{
		return newsService.delNewsById(newsId);
	}
	
	@ResponseBody
	@RequestMapping(value = "insertNews", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public Integer insertNews(News news)
	{
		return newsService.insertNews(news);
	}
}
