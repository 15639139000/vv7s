package com.jm.service;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.jm.entity.Remark;

/**
 * 备忘业务逻辑接口
 */
public interface RemarkService {

	/**
	 * 获取所有的备忘
	 * @param pageNo 
	 * @param num 
	 * @return 备忘集合
	 */
	public PageInfo<Remark> getAll(Integer pageNo, Integer num);
	
	/**
	 * @param redateStr 
	 * @return 备忘集合根据时间
	 */
	public List<Remark> getRemarkByDate(String redateStr);
	
	/**
	 * 添加备忘
	 * @param remark 备忘实体
	 * @return 受影响的行数
	 */
	public Integer insertRemark(Remark remark);
	
	/**
	 * 删除备忘
	 * @param nId 备忘编号
	 * @return 受影响的行数
	 */
	public Integer delRemarkById(Integer reId);
	
	/**
	 * 编辑备忘
	 * @param remark 备忘实体
	 * @return 受影响的行数
	 */
	public Integer editRemarkByDate(Remark remark);
	
	/**
	 * 根据id查询公告详情
	 * @param id
	 * @return
	 */
	public Remark getRemarkById(Integer nbId);
	
}
