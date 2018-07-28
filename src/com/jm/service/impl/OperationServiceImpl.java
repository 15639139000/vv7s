package com.jm.service.impl;

import java.util.List;

import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.jm.dao.OperationDao;
import com.jm.entity.Employee;
import com.jm.entity.Operation;
import com.jm.service.OperationService;

/**
 * 操作权限业务逻辑公告接口实现
 */
@Service
public class OperationServiceImpl implements OperationService{

	@Autowired
	private OperationDao operationDao;
	
	@Transactional(readOnly = true)
	@Override
	public PageInfo<Operation> getAll(Integer pageNo,Integer num)
	{
		PageHelper.startPage(pageNo, num);
		List<Operation> list = operationDao.getAll();
		PageInfo<Operation> pageInfo = new PageInfo<Operation>(list);
		return pageInfo;
	}

	@Transactional(readOnly = true)
	@Override
	public List<Operation> getOperationByDate() {
		return operationDao.getOperationByDate();
	}

	@Transactional
	@Override
	public Integer insertOperation(Operation operation) {
		Employee employee = (Employee) SecurityUtils.getSubject().getSession().getAttribute("employee");
		return operationDao.insertOperation(operation);
	}

	@Transactional
	@Override
	public Integer delOperationById(Integer oId) {
		return operationDao.delOperationById(oId);
	}

	@Transactional
	@Override
	public Integer editOperationById(Operation operation) {
		return operationDao.editOperationById(operation);
	}
	@Transactional(readOnly = true)
	@Override
	public Operation getOperationById(Integer oId) {
		return operationDao.getOperationById(oId);
	}
}
