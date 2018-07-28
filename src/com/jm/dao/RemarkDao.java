package com.jm.dao;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.Remark;

/**
 * 备忘提醒接口
 */
public interface RemarkDao {

	/**
	 * 获取所有的备忘提醒
	 * @return 备忘提醒集合
	 */
	public List<Remark> getAll();
	
	/**
	 * 根据备忘时间查询备忘内容
	 * @param remark 
	 * @return 备忘提醒集合根据时间
	 */
	public List<Remark> getRemarkByDate(Remark remark);
	
	/**
	 * 添加备忘提醒
	 * @param Remark 备忘提醒实体
	 * @return 受影响的行数
	 */
	public Integer insertRemark(Remark Remark);
	
	/**
	 * 删除备忘提醒
	 * @param nId 备忘提醒编号
	 * @return 受影响的行数
	 */
	public Integer delRemarkById(@Param("reId") Integer reId);
	
	/**
	 * 编辑备忘提醒
	 * @param Remark 备忘提醒实体
	 * @return 受影响的行数
	 */
	public Integer editRemarkByDate(Remark Remark);
	/**
	 * 根据id查询公告详情
	 * @param id
	 * @return
	 */
	public Remark getRemarkById(Integer nbId);
}
