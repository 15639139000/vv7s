package com.jm.service;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.jm.entity.Billboard;

/**
 * 龙虎榜业务逻辑接口
 */
public interface BillboardService {

	/**
	 * 获取所有的龙虎榜
	 * @param num 
	 * @param pageNo 
	 * @return 龙虎榜集合
	 */
	public PageInfo<Billboard> getAll(Integer pageNo, Integer num);
	
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
	public Integer delBillboardById(Integer nbId);
	
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
	public Billboard getBillboardById(Integer nbId);
	
}
