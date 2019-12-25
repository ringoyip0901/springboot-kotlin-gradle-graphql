package com.kotlingraphqlexample.kotlingraphqlexample.resolvers
import com.coxautodev.graphql.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component

data class Version(val current: String, val previous: String)

@Component
class Query : GraphQLQueryResolver {
    fun coffee(): String = "Coffeeeee"
}
