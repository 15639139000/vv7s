package com.jm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.jm.entity.Visit;

/**
 * 访问接口
 */
public interface VisitDao {

	public List<Visit> getAllVisit();
	
	public List<Visit> getAll(@Param("stime") String stime, @Param("etime") String etime, @Param("ename") String ename ,@Param("company") String company);
	
	public List<Visit> advancedSearch(@Param("customer") String customer, @Param("customerNature") String customerNature,
			@Param("indestry") String indestry, @Param("product1") String product1, @Param("product2") String product2,
			@Param("visit") String visit, @Param("returnTime") String returnTime, @Param("nextReturnTime") String nextReturnTime);
	
	public void insertBatch(@Param("visits") List<Visit> visits);
}
