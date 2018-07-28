package com.jm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.Billboard;

/**
 * 龙虎榜接口
 */
public interface BillboardDao {

	/**
	 * 获取所有的龙虎榜
	 * @return 龙虎榜集合
	 */
	public List<Billboard> getAll();
	
	/**
	 * 根据时间降序返回去前七条
	 * @return 龙虎榜集合根据时间
	 */
	public List<Billboard> getBillboardByDate();
	
	/**
	 * 添加龙虎榜
	 * @param billboard 龙虎榜实体
	 * @return 受影响的行数
	 */
	public Integer insertBillboard(Billboard billboard);
	
	/**
	 * 删除龙虎榜
	 * @param nId 龙虎榜编号
	 * @return 受影响的行数
	 */
	public Integer delBillboardById(@Param("bId") Integer bId);
	
	/**
	 * 编辑龙虎榜
	 * @param billboard 龙虎榜实体
	 * @return 受影响的行数
	 */
	public Integer editBillboardById(Billboard billboard);
	/**
	 * 根据id查询龙虎榜详情
	 * @param id
	 * @return
	 */
	public Billboard getBillboardById(Integer bId);
}
