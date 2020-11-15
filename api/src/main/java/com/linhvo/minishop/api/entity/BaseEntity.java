package com.linhvo.minishop.api.entity;

import java.io.Serializable;

/**
 * Base entity
 * 
 * @author linhv
 *
 */
public interface BaseEntity extends Serializable {
	
	/**
	 * Get entity ID
	 * @return
	 */
	Long getId();
	
	/**
	 * Set entity ID
	 * @param id
	 */
	void setId(Long id);

}
