package com.linhvo.minishop.product_mgmt.entity.mixin;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.linhvo.minishop.product_mgmt.entity.ProductGroup;

import lombok.Getter;
import lombok.Setter;

/**
 * Mixin for product
 * @author linhv
 *
 */
@Getter
@Setter
public abstract class ProductMixin {
	
	@JsonIdentityReference(alwaysAsId = true)
	@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
	private ProductGroup productGroup;
	
}
