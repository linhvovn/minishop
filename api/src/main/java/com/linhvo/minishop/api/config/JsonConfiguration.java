package com.linhvo.minishop.api.config;

import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.databind.module.SimpleModule;

/**
 * 
 * @author linhv
 *
 */
@Configuration
public class JsonConfiguration {
	
	static class ProductModule extends SimpleModule {
		
	}
	
}
