package com.jm.utils;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import redis.clients.jedis.Jedis;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:spring-config.xml"})
@Component
public class RedisTest {

	@Autowired
	private RedisTemplate<Object, Object> redisTemplate;
	
	@Test
	public void testRedis()
	{
		redisTemplate.opsForValue().set("name", "张三");
		System.out.println(redisTemplate.opsForValue().get("name"));
	}
	
	public static void main(String[] args) {
		
		Jedis jedis = new Jedis("localhost");
		System.out.println(jedis.ping());
		
	}
	
}
