package com.linhvo.minishop.product_mgmt.entity.projection;

import java.time.LocalDateTime;

public interface BaseEntityProjection {
	
	Long getId();
	
	LocalDateTime getCreatedAt();
	
	LocalDateTime getModifiedAt();
	
	String getCreatedBy();
	
	String getModifiedBy();

}
