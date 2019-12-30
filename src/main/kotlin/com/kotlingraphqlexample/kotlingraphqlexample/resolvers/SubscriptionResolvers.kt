package com.kotlingraphqlexample.kotlingraphqlexample.resolvers

import com.coxautodev.graphql.tools.GraphQLSubscriptionResolver
import com.kotlingraphqlexample.kotlingraphqlexample.model.PeopleCollection
import com.kotlingraphqlexample.kotlingraphqlexample.model.Type
import java.time.Duration
import java.time.LocalDateTime
import java.util.function.Consumer
import org.reactivestreams.Publisher
import org.springframework.stereotype.Component
import reactor.core.publisher.Flux
import reactor.core.publisher.SynchronousSink

data class Tick(val time: LocalDateTime)

fun initialCollection(first: Int, cursor: String, type: Type): Flux<PeopleCollection> {
  val initial: Flux<PeopleCollection> = Flux.just(createCollection(first, cursor, type))
  return initial;
}

@Component
class SubscriptionResolvers : GraphQLSubscriptionResolver {
;
  data class Tick(val time: LocalDateTime)
  fun timer(): Publisher<Tick> {
    return Flux.generate(
        Consumer<SynchronousSink<LocalDateTime>> { sink ->
          sink.next(LocalDateTime.now())
        })
        .map { Tick(it) }
        .delayElements(Duration.ofSeconds(1))
  }

  fun subscribeToPeople(first: Int, cursor: String, type: Type): Publisher<PeopleCollection> {
    val newPeopleCollectionPub: Flux<PeopleCollection> = streamOfSubscriptions.map { createCollection(first, cursor, type)}
    return initialCollection(first, cursor, type).mergeWith(newPeopleCollectionPub)
  }
}

