package com.linhvo.minishop.product_mgmt.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.databind.module.SimpleModule;
import com.linhvo.minishop.product_mgmt.entity.Product;
import com.linhvo.minishop.product_mgmt.entity.mixin.ProductMixin;

/**
 * 
 * @author linhv
 *
 */
@Configuration
public class JsonConfiguration {
	
	public @Bean ProductModule productModule() {
		return new ProductModule();
	}

	static class ProductModule extends SimpleModule {

		private static final long serialVersionUID = 1L;

		public ProductModule() {
			setMixInAnnotation(Product.class, ProductMixin.class);
		}

	}

}
