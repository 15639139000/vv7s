package com.jm.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jm.dao.JurisdictionDao;
import com.jm.entity.Jurisdiction;
import com.jm.service.JurisdictionService;
import com.jm.service.RoleService;

/**
 * 权限接口实现类，处理逻辑
 */
@Service
public class JurisdictionServiceImpl implements JurisdictionService{

	@Autowired
	private JurisdictionDao jurisdictionDao;
	
	@Autowired
	private RoleService roleService;
	
	@Transactional(readOnly = true)
	@Override
	public List<Jurisdiction> getAll() {
		return jurisdictionDao.getAll();
	}

	@Transactional(readOnly = true)
	@Override
	public List<Jurisdiction> getParentNode() {
		List<Jurisdiction> parentNode = jurisdictionDao.getParentNode();
		for (Jurisdiction jurisdiction : parentNode) {
			Integer id = jurisdiction.getjId();
			List<Jurisdiction> childrenNode = getChildrenNode(id);
			//子节点的集合
			List<Jurisdiction> children = new ArrayList<>();
			List<String> roles = roleService.getRoleByJid(id);
			for (Jurisdiction jurChildren : childrenNode) {
				Integer childrenId = jurChildren.getjId();
				List<String> childrenRoles = roleService.getRoleByJid(childrenId);
				String childrenStrs = "";
				if(childrenRoles != null && childrenRoles.size() > 0)
				{
					for (String string : childrenRoles) {
						childrenStrs += string + ",";
					}
				}
				//拥有子节点的权限角色
				jurChildren.setChildrenRoles(childrenStrs);
				children.add(jurChildren);
			}
			jurisdiction.setChildren(children);
			String strs = "";
			if(roles != null && roles.size() > 0)
			{
				for (String string : roles) {
					strs += string + ",";
				}
			}
			jurisdiction.setRoles(strs);
		}
		return parentNode;
	}

	@Transactional(readOnly = true)
	@Override
	public List<Jurisdiction> getChildrenNode(Integer jParent) {
		return jurisdictionDao.getChildrenNode(jParent);
	}

}
