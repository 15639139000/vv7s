package com.jm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.Contract;

/**
 * 合同接口
 */
public interface ContractDao {

	public List<Contract> getAllContract();
	
	public void insertBatch(@Param("contracts") List<Contract> contracts);
	
}
