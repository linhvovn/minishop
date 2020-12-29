package com.linhvo.minishop.product_mgmt.entity.projection;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import com.linhvo.minishop.product_mgmt.entity.Product;

@Projection(name = "detail", types = Product.class)
public interface ProductWithGroup extends BaseEntityProjection {
	
	String getName();
	String getCode();
	String getDescription();
	
	@Value("#{target.productGroup.id}")
	String getProductGroup();
	
	@Value("#{target.productGroup.name}")
	String getProductGroupName();

}
