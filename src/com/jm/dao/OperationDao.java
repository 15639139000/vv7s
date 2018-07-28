package com.jm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.Operation;

/**
 * 操作权限接口
 */
public interface OperationDao {

	/**
	 * 获取所有的操作权限
	 * @return 操作权限集合
	 */
	public List<Operation> getAll();
	
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
	public Integer delOperationById(@Param("oId") Integer oId);
	
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
