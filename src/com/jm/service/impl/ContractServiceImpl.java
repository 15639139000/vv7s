package com.jm.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jm.dao.ContractDao;
import com.jm.entity.Contract;
import com.jm.service.ContractService;

@Service
public class ContractServiceImpl implements ContractService{

	@Autowired
	private ContractDao contractDao;
	
	@Override
	public List<Contract> getAllContract() {
		return contractDao.getAllContract();
	}

	@Override
	public void insertBatch(List<Contract> contracts) {
		contractDao.insertBatch(contracts);
	}

}
