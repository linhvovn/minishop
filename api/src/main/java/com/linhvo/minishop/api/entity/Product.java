package com.linhvo.minishop.api.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.linhvo.minishop.api.entity.utils.EntityUtils.ProductStatus;

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

	private String name;
	private String code;
	private String description;
	
	@JsonIdentityReference(alwaysAsId = true)
	@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
	@ManyToOne
	@JoinColumn(name = "productGroup")
	private ProductGroup productGroup;
	
	@Enumerated(EnumType.ORDINAL)
	private ProductStatus status;
	
	@Enumerated(EnumType.ORDINAL)
	private ProductType type;
	
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
