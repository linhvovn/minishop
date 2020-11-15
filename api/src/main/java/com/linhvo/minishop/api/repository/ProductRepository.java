package com.linhvo.minishop.api.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.linhvo.minishop.api.config.EnpointReference;
import com.linhvo.minishop.api.entity.Product;
import com.linhvo.minishop.api.entity.projection.ProductWithGroup;
import com.linhvo.minishop.api.entity.utils.EntityUtils.ProductStatus;

/**
 * 
 * @author linhv
 *
 */
@RepositoryRestResource(collectionResourceRel = EnpointReference.PRODUCTS, path = EnpointReference.PRODUCTS, excerptProjection = ProductWithGroup.class)
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {

	  List<Product> findByStatus(@Param("status") ProductStatus status);
	  

}
