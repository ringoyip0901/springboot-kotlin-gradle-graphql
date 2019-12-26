//package com.kotlingraphqlexample.kotlingraphqlexample.resolvers
//
//import AllPeople
//import com.coxautodev.graphql.tools.GraphQLMutationResolver
//import com.kotlingraphqlexample.kotlingraphqlexample.dao.PersonDao
//import com.kotlingraphqlexample.kotlingraphqlexample.model.Edges
//import com.kotlingraphqlexample.kotlingraphqlexample.model.Person
//import com.kotlingraphqlexample.kotlingraphqlexample.model.Title
//import org.reactivestreams.Publisher
//import org.springframework.stereotype.Component
//import reactor.core.publisher.DirectProcessor
//import reactor.core.publisher.Flux
//import reactor.core.publisher.FluxSink
//import java.util.function.Consumer
//
//val createdPersons = DirectProcessor.create<String>()
//
//@Component
//class PersonMutationResolver(private val personDao: PersonDao) : GraphQLMutationResolver {
//    fun createPerson(name: String, image: String, title: Title): Edges {
//        val newPerson = personDao.createPerson(name, image, title)
//        createdPersons.onNext("")
//        return newPerson
//    }
//}
//
