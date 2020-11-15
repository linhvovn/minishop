package com.linhvo.minishop.api.entity.projection;

import org.springframework.beans.factory.annotation.Value;

public interface ProductWithGroup {
	
	String getName();
	String getCode();
	String getDescription();
	
	@Value("#{target.productGroup.id}")
	String getProductGroup();
	
	@Value("#{target.productGroup.name}")
	String getProductGroupName();

}
