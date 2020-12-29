package com.linhvo.minishop.product_mgmt.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.linhvo.minishop.product_mgmt.config.EnpointReference;
import com.linhvo.minishop.product_mgmt.entity.ProductGroup;

@RepositoryRestResource(collectionResourceRel = EnpointReference.PRODUCT_GROUPS, path = EnpointReference.PRODUCT_GROUPS)
public interface ProductGroupRepository extends CrudRepository<ProductGroup, Long> {

}
