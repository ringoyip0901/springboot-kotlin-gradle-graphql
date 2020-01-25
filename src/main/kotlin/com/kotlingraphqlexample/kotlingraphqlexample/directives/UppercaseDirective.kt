package com.kotlingraphqlexample.kotlingraphqlexample.directives

//import com.expediagroup.graphql.directives.KotlinFieldDirectiveEnvironment
//import com.expediagroup.graphql.directives.KotlinSchemaDirectiveWiring
import graphql.schema.*
import graphql.schema.idl.SchemaDirectiveWiring
import graphql.schema.idl.SchemaDirectiveWiringEnvironment
import java.util.function.BiFunction

//example
//https://github.com/graphql-java-kickstart/samples/blob/master/directives/src/main/java/directives/UppercaseDirective.java

//class UppercaseDirective : SchemaDirectiveWiring {
//  override fun onField(env: SchemaDirectiveWiringEnvironment<GraphQLFieldDefinition>): GraphQLFieldDefinition {
//    val field = env.element;
//    val parentType: GraphQLFieldsContainer = env.getFieldsContainer();
//    // build a data fetcher that transforms the given value to uppercase
//    val originalFetcher: DataFetcher<*> = env.registry.getDataFetcher(parentType, field)
//    val dataFetcher = DataFetcherFactories
//        .wrapDataFetcher(originalFetcher, label@ BiFunction { dataFetchingEnvironment: DataFetchingEnvironment?, value: Any? ->
//          if (value is String) {
//            return@label value.toUpperCase()
//          }
//          value
//        })
//    // now change the field definition to use the new uppercase data fetcher
//    env.getCodeRegistry().dataFetcher(parentType, field, dataFetcher)
//    return field
//  }
//}