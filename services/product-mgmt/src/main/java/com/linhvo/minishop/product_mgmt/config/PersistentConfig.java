package com.linhvo.minishop.product_mgmt.config;

import java.util.Optional;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/**
 * 
 * @author linhv
 *
 */
@Configuration
@EnableJpaAuditing(modifyOnCreate = false, auditorAwareRef = "author")
public class PersistentConfig {
	
	@Bean
	public AuditorAware<String> author(){
		return () -> Optional.of("api");
	}

}
