package com.kotlingraphqlexample.kotlingraphqlexample.resolvers

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import com.kotlingraphqlexample.kotlingraphqlexample.dao.PersonDao
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.stereotype.Component
import org.springframework.stereotype.Controller

@Component
class PersonMutationResolver(private val personDao: PersonDao) : GraphQLMutationResolver {
    fun createPerson(name: String, image: String) = personDao.createPerson(name, image)
}
