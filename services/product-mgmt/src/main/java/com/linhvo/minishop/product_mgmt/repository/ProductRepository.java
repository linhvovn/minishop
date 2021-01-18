package com.linhvo.minishop.product_mgmt.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.linhvo.minishop.product_mgmt.config.EnpointReference;
import com.linhvo.minishop.product_mgmt.entity.Product;
import com.linhvo.minishop.product_mgmt.entity.Product.ProductStatus;
import com.linhvo.minishop.product_mgmt.entity.projection.ProductWithGroup;

/**
 * 
 * @author linhv
 *
 */
@RepositoryRestResource(collectionResourceRel = EnpointReference.PRODUCTS, path = EnpointReference.PRODUCTS, excerptProjection = ProductWithGroup.class)
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {

	  List<Product> findByStatus(@Param("status") ProductStatus status);
	  
}
