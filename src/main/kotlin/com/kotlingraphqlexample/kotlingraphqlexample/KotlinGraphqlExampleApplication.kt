package com.kotlingraphqlexample.kotlingraphqlexample

import graphql.schema.idl.SchemaDirectiveWiring
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.web.servlet.FilterRegistrationBean
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.Ordered
import org.springframework.transaction.annotation.EnableTransactionManagement
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter
import java.util.*
import javax.servlet.Filter


@SpringBootApplication
@Configuration
@EnableTransactionManagement
class KotlinGraphqlExampleApplication {
  @Bean
  fun simpleCorsFilter(): FilterRegistrationBean<*> {
    val source = UrlBasedCorsConfigurationSource()
    val config = CorsConfiguration()
    config.allowCredentials = true
    // *** URL below needs to match the Vue client URL and port ***
    config.allowedOrigins = Collections.singletonList("*")
    config.allowedMethods = Collections.singletonList("*")
    config.allowedHeaders = Collections.singletonList("*")
    source.registerCorsConfiguration("/**", config)
    val bean = FilterRegistrationBean<Filter>(CorsFilter(source) as Filter?)
    bean.setOrder(Ordered.HIGHEST_PRECEDENCE)
    return bean
  }
}

fun main(args: Array<String>) {
  runApplication<KotlinGraphqlExampleApplication>(*args)
} 
