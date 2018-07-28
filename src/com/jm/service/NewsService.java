package com.jm.service;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.jm.entity.News;

/**
 * 新闻业务逻辑接口
 */
public interface NewsService {

	/**
	 * 获取所有的新闻
	 * @param pageNo 
	 * @param num 
	 * @return 新闻集合
	 */
	public PageInfo<News> getAll(Integer pageNo, Integer num);
	
	/**
	 * 根据时间降序返回去前七条
	 * @return 新闻集合根据时间
	 */
	public List<News> getNewsByDate();
	
	/**
	 * 添加新闻
	 * @param news 新闻实体
	 * @return 受影响的行数
	 */
	public Integer insertNews(News news);
	
	/**
	 * 删除新闻
	 * @param nId 新闻编号
	 * @return 受影响的行数
	 */
	public Integer delNewsById(Integer newsId);
	
	/**
	 * 编辑新闻
	 * @param news 新闻实体
	 * @return 受影响的行数
	 */
	public Integer editNewsById(News news);
	
	/**
	 * 根据id查询公告详情
	 * @param id
	 * @return
	 */
	public News getNewsById(Integer newsId);
	
}
