package com.kotlingraphqlexample.kotlingraphqlexample.resolvers
import com.coxautodev.graphql.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component

data class Version(val current: String, val previous: String)

@Component
class Query: GraphQLQueryResolver {
    fun version(): Version = Version("1.0.1", "1.0.0")
    fun message(): String = "Hey there from Query class"
    fun relayId(): Int = 1
}