package com.kotlingraphqlexample.kotlingraphqlexample
import com.coxautodev.graphql.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component

@Component
class Query: GraphQLQueryResolver {
    fun version(): String = "1.0.1"
    fun message(): String = "Hey there from Query class"
    fun relayId(): Int = 1
}