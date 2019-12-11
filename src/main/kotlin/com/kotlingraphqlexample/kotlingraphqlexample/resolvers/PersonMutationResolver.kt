package com.kotlingraphqlexample.kotlingraphqlexample.resolvers

import AllPeople
import com.coxautodev.graphql.tools.GraphQLMutationResolver
import com.kotlingraphqlexample.kotlingraphqlexample.dao.PersonDao
import com.kotlingraphqlexample.kotlingraphqlexample.model.Edges
import com.kotlingraphqlexample.kotlingraphqlexample.model.Person
import org.reactivestreams.Publisher
import org.springframework.stereotype.Component
import reactor.core.publisher.DirectProcessor
import reactor.core.publisher.Flux
import reactor.core.publisher.FluxSink
import java.util.function.Consumer


val createdPersons = DirectProcessor.create<Person>()

@Component
class PersonMutationResolver(private val personDao: PersonDao) : GraphQLMutationResolver {
    fun createPerson(name: String, image: String): Edges {
        val createdPerson = personDao.createPerson(name, image)
        val newPerson = Person(id = Math.random().toString(), name = "PRINCE WEDNESDAY", image = image)
        createdPersons.onNext(newPerson)
        return createdPerson
    }
}

