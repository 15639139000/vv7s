package com.jm.listener;

import org.activiti.engine.delegate.DelegateTask;
import org.activiti.engine.delegate.TaskListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.jm.dao.EmployeeDao;
import com.jm.entity.Employee;

@SuppressWarnings("serial")
@Component("taskListenerImpl4")
public class TaskListenerImpl4 implements TaskListener{

	@Autowired
	private EmployeeDao employeeDao;
	
	@Override
	public void notify(DelegateTask delegateTask) {
		if(delegateTask.getEventName().equals("create")){
			String eName = (String) delegateTask.getVariables().get("nextPerson");
			Employee employee = employeeDao.getEmployeeByEname(eName);
			delegateTask.setAssignee(employee.geteName());
		}
	}

}
