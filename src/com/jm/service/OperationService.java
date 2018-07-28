package com.jm.service;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.jm.entity.Operation;

/**
 * 操作权限业务逻辑接口
 */
public interface OperationService {

	/**
	 * 获取所有的操作权限
	 * @param pageNo 
	 * @param num 
	 * @return 操作权限集合
	 */
	public PageInfo<Operation> getAll(Integer pageNo, Integer num);
	
	/**
	 * 根据时间降序返回去前七条
	 * @return 操作权限集合根据时间
	 */
	public List<Operation> getOperationByDate();
	
	/**
	 * 添加操作权限
	 * @param operation 操作权限实体
	 * @return 受影响的行数
	 */
	public Integer insertOperation(Operation operation);
	
	/**
	 * 删除操作权限
	 * @param nId 操作权限编号
	 * @return 受影响的行数
	 */
	public Integer delOperationById(Integer oId);
	
	/**
	 * 编辑操作权限
	 * @param operation 操作权限实体
	 * @return 受影响的行数
	 */
	public Integer editOperationById(Operation operation);
	
	/**
	 * 根据id查询公告详情
	 * @param id
	 * @return
	 */
	public Operation getOperationById(Integer oId);
	
}
