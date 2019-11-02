package com.kotlingraphqlexample.kotlingraphqlexample

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import graphql.servlet.GraphQLMutationProvider
import org.springframework.stereotype.Component

@Component
class PersonMutationResolver(private val personDao: PersonDao): GraphQLMutationResolver {
    fun createPerson(name: String) = personDao.createPerson(name)
}