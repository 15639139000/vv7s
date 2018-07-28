package com.jm.service;

import java.util.List;

import com.jm.entity.Contract;

/**
 * 合同业务逻辑接口
 */
public interface ContractService {

	public List<Contract> getAllContract();
	
	public void insertBatch(List<Contract> contracts);
	
}
