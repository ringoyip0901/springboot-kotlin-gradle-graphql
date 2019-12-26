package com.kotlingraphqlexample.kotlingraphqlexample.resolvers

import AllPeople
import Edge
import com.coxautodev.graphql.tools.GraphQLSubscriptionResolver
import com.kotlingraphqlexample.kotlingraphqlexample.dao.PersonDao
import com.kotlingraphqlexample.kotlingraphqlexample.data.data
import com.kotlingraphqlexample.kotlingraphqlexample.data.heroes
import com.kotlingraphqlexample.kotlingraphqlexample.data.royalties
import com.kotlingraphqlexample.kotlingraphqlexample.model.Edges
import com.kotlingraphqlexample.kotlingraphqlexample.model.PageInfo
import com.kotlingraphqlexample.kotlingraphqlexample.model.PeopleCollection
import com.kotlingraphqlexample.kotlingraphqlexample.model.TYPE
import java.time.Duration
import java.time.LocalDateTime
import java.util.function.Consumer
import org.reactivestreams.Publisher
import org.springframework.stereotype.Component
import org.springframework.stereotype.Controller
import reactor.core.publisher.Flux
import reactor.core.publisher.FluxSink
import reactor.core.publisher.SynchronousSink

data class Tick(val time: LocalDateTime)
val initial: Flux<PeopleCollection> = Flux.just(createCollection(1, "slkaf", TYPE.ROYALTIES))

@Component
class SubscriptionResolvers : GraphQLSubscriptionResolver {

  data class Tick(val time: LocalDateTime)
  fun timer(): Publisher<Tick> {
    return Flux.generate(
        Consumer<SynchronousSink<LocalDateTime>> { sink ->
          sink.next(LocalDateTime.now())
        })
        .map { Tick(it) }
        .delayElements(Duration.ofSeconds(1))
  }

  fun subscribeToPeople(first: Int, cursor: String, type: TYPE): Publisher<PeopleCollection> {
    val newPeopleCollectionPub: Flux<PeopleCollection> = streamOfSubscriptions.map { createCollection(first, cursor, type)}
    return initial.mergeWith(newPeopleCollectionPub)
  }

//  fun subscribeToFamily(first: Int): Publisher<Edges> {
//    return Flux.create(
//        Consumer<FluxSink<Edges>> { sink ->
//          sink.next(getFamily())
//        })
//  }

//  fun getEveryone(offset: Int?): Publisher<AllPeople> {
//    val createdPersonsPublisher: Flux<AllPeople> = createdPersons.map { AllPeople(getFamily()) }
//    return initial.mergeWith(createdPersonsPublisher)
//  }
}
