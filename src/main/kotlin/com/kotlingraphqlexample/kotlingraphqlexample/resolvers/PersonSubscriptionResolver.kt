package com.kotlingraphqlexample.kotlingraphqlexample.resolvers
import Edge
import com.coxautodev.graphql.tools.GraphQLSubscriptionResolver
import com.kotlingraphqlexample.kotlingraphqlexample.dao.PersonDao
import com.kotlingraphqlexample.kotlingraphqlexample.data.data
import com.kotlingraphqlexample.kotlingraphqlexample.model.Edges
import com.kotlingraphqlexample.kotlingraphqlexample.model.PageInfo
import com.kotlingraphqlexample.kotlingraphqlexample.model.Person
import org.reactivestreams.Publisher
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.stereotype.Component
import org.springframework.stereotype.Controller
import reactor.core.publisher.Flux
import reactor.core.publisher.SynchronousSink
import java.time.Duration
import java.time.LocalDateTime
import java.util.*
import java.util.function.Consumer


val fluxData = mutableListOf<String>("hi")

fun getFamily(): Edges {
  val edges = Edges(data.map { person -> Edge(person.id, PersonDao().getPersonById(person.id)) }, PageInfo())
  return edges;
}

@Component
@Controller
class PersonSubscriptionResolver: GraphQLSubscriptionResolver {
//  private DataPublisher dataPublisher;
//
//  fun publish() {
//    return dataPublisher.getPublisher();
//  }

  fun helloWorld(name: String): Publisher<MutableList<String>> {
    fluxData.add(name)
    return Flux.just(fluxData);
  }

  fun timer(): Publisher<Tick> {
    return Flux.generate(
        Consumer<SynchronousSink<LocalDateTime>> { sink ->
          sink.next(LocalDateTime.now())
        })
        .map { Tick(it) }
        .delayElements(Duration.ofSeconds(1))
  }

  data class Tick(val x: LocalDateTime)

  data class Family(val family: Edges)

//  @MessageMapping("/create-person")
//  @SendTo("/topic/family")
  fun subscribeToFamily(): Publisher<Edge> {
    return Flux.generate(
        Consumer<SynchronousSink<Edge>> { sink ->
          sink.next(getFamily().edges.last())
        })
//        .map { Family(it) }
  }
}
