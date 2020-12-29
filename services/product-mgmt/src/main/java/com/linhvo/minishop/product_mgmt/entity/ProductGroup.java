package com.linhvo.minishop.product_mgmt.entity;


import javax.persistence.Entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @author linhv
 *
 */
@Entity
@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = true)
public class ProductGroup extends BaseEntityImpl {
	
	private static final long serialVersionUID = 5893351938456374580L;
	
	private String name;

}
