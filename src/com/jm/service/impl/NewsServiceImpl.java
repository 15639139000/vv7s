package com.jm.service.impl;

import java.util.List;

import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.jm.dao.NewsDao;
import com.jm.entity.Employee;
import com.jm.entity.News;
import com.jm.service.NewsService;

/**
 * 新闻逻辑接口实现
 */
@Service
public class NewsServiceImpl implements NewsService{

	@Autowired
	private NewsDao newsDao;
	
	@Transactional(readOnly = true)
	@Override
	public PageInfo<News> getAll(Integer pageNo,Integer num)
	{
		PageHelper.startPage(pageNo, num);
		List<News> list = newsDao.getAll();
		PageInfo<News> pageInfo = new PageInfo<News>(list);
		return pageInfo;
	}

	@Transactional(readOnly = true)
	@Override
	public List<News> getNewsByDate() {
		return newsDao.getNewsByDate();
	}

	@Transactional
	@Override
	public Integer insertNews(News news) {
		Employee employee = (Employee) SecurityUtils.getSubject().getSession().getAttribute("employee");
		news.setCompany(employee.getDept().getCompany());
		news.setDept(employee.getDept());
		news.setEmployee(employee);
		return newsDao.insertNews(news);
	}

	@Transactional
	@Override
	public Integer delNewsById(Integer nbId) {
		return newsDao.delNewsById(nbId);
	}

	@Transactional
	@Override
	public Integer editNewsById(News news) {
		Employee employee = (Employee) SecurityUtils.getSubject().getSession().getAttribute("employee");
		news.setCompany(employee.getDept().getCompany());
		news.setDept(employee.getDept());
		news.setEmployee(employee);
		return newsDao.editNewsById(news);
	}
	@Transactional(readOnly = true)
	@Override
	public News getNewsById(Integer nbId) {
		return newsDao.getNewsById(nbId);
	}
}
