package com.jm.service.impl;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;

import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.jm.dao.RemarkDao;
import com.jm.entity.Employee;
import com.jm.entity.Remark;
import com.jm.service.RemarkService;

/**
 * 备忘提醒接口实现
 */
@Service
public class RemarkServiceImpl implements RemarkService {

	@Autowired
	private RemarkDao remarkDao;

	@Transactional(readOnly = true)
	@Override
	public PageInfo<Remark> getAll(Integer pageNo, Integer num) {
		PageHelper.startPage(pageNo, num);
		List<Remark> list = remarkDao.getAll();
		PageInfo<Remark> pageInfo = new PageInfo<Remark>(list);
		return pageInfo;
	}

	@Transactional(readOnly = true)
	@Override
	public List<Remark> getRemarkByDate(String reDateStr) {
		Employee employee = (Employee) SecurityUtils.getSubject().getSession().getAttribute("employee");
		Remark remark = new Remark();
		remark.setEmployee(employee);
		Date reSqlDate = null;
		try {
			reSqlDate=Date.valueOf(reDateStr);
		} catch (Exception e) {
			e.printStackTrace();
		}
		remark.setReCallDate(reSqlDate);
		return remarkDao.getRemarkByDate(remark);
	}

	@Transactional
	@Override
	public Integer insertRemark(Remark remark) {
		Employee employee = (Employee) SecurityUtils.getSubject().getSession().getAttribute("employee");
		remark.setEmployee(employee);
		return remarkDao.insertRemark(remark);
	}

	@Transactional
	@Override
	public Integer delRemarkById(Integer reId) {
		return remarkDao.delRemarkById(reId);
	}

	@Transactional
	@Override
	public Integer editRemarkByDate(Remark remark) {
		Employee employee = (Employee) SecurityUtils.getSubject().getSession().getAttribute("employee");
		remark.setEmployee(employee);
		return remarkDao.editRemarkByDate(remark);
	}

	@Transactional(readOnly = true)
	@Override
	public Remark getRemarkById(Integer nbId) {
		return remarkDao.getRemarkById(nbId);
	}
}
