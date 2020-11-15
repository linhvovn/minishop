package com.linhvo.minishop.api.entity.converter;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.linhvo.minishop.api.entity.BaseEntity;

/**
 * 
 * @author linhv
 *
 */
public class EntityRelationshipDeserializer extends JsonDeserializer<BaseEntity>{

	@Override
	public BaseEntity deserialize(JsonParser p, DeserializationContext ctxt)
			throws IOException, JsonProcessingException {
		// TODO Auto-generated method stub
		return null;
	}

}
