package com.jm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.News;

/**
 * 新闻接口
 */
public interface NewsDao {

	/**
	 * 获取所有的新闻
	 * @return 新闻集合
	 */
	public List<News> getAll();
	
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
	public Integer delNewsById(@Param("newsId") Integer newsId);
	
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
