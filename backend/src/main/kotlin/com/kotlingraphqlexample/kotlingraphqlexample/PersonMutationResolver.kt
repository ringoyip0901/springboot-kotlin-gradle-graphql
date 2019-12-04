package com.kotlingraphqlexample.kotlingraphqlexample

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import org.springframework.stereotype.Component

@Component
class PersonMutationResolver(private val personDao: PersonDao) : GraphQLMutationResolver {
    fun createPerson(name: String, image: String) = personDao.createPerson(name, image)
}
