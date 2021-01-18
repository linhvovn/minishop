package com.linhvo.minishop.product_mgmt.entity;


import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Version;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 
 * @author linhv
 *
 */
@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = true)
@Entity
public class Product extends BaseEntityImpl {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7155230000783121616L;

	@NotBlank
	private String name;
	
	@NotBlank
	private String code;
	
	private String description;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "productGroup")
	private ProductGroup productGroup;
	
	@NotNull
	@Enumerated(EnumType.ORDINAL)
	private ProductStatus status;
	
	@NotNull
	@Enumerated(EnumType.ORDINAL)
	private ProductType type;
	
	@Version
	private Long version;
	
	/**
	 * Product status
	 * @author linhv
	 *
	 */
	public enum ProductStatus {
		ACTIVE,
		INACTIVE;
	}
	
	/**
	 * 
	 * @author linhv
	 *
	 */
	public enum ProductType {
		PRODUCT,
		SERVICE;
	}

}
